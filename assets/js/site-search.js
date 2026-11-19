(() => {
  const input = document.querySelector('[data-site-search]');
  if (!input) return;

  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const english = input.dataset.lang === 'en';
  const labels = english
    ? { ready: 'Start typing to search.', loading: 'Loading search…', error: 'Search is unavailable right now. Please try again later.', none: 'No results. Try a different word.', singular: '1 result', plural: ' results' }
    : { ready: 'Escribí algo para empezar.', loading: 'Cargando búsqueda…', error: 'La búsqueda no está disponible en este momento. Probá de nuevo más tarde.', none: 'No encontré resultados. Probá con otra palabra.', singular: '1 resultado', plural: ' resultados' };

  const normalize = (text) => String(text || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

  let entries = [];
  let loaded = false;

  function render() {
    const query = input.value.trim();
    results.replaceChildren();
    if (!query) {
      status.textContent = labels.ready;
      return;
    }
    if (!loaded) {
      status.textContent = labels.loading;
      return;
    }

    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const matches = entries
      .map((entry) => ({
        entry,
        title: normalize(entry.title),
        text: normalize(entry.text),
      }))
      .filter(({ title, text }) => terms.every((term) => title.includes(term) || text.includes(term)))
      .sort((a, b) => Number(b.title.includes(normalize(query))) - Number(a.title.includes(normalize(query))))
      .slice(0, 30);

    if (!matches.length) {
      status.textContent = labels.none;
      return;
    }

    status.textContent = matches.length === 1 ? labels.singular : matches.length + labels.plural;
    const fragment = document.createDocumentFragment();
    matches.forEach(({ entry }) => {
      const article = document.createElement('article');
      article.className = 'search-result';
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      link.href = entry.url;
      link.textContent = entry.title;
      heading.appendChild(link);
      const summary = document.createElement('p');
      const plainText = String(entry.text || '').replace(/\s+/g, ' ').trim();
      summary.textContent = plainText.length > 220 ? plainText.slice(0, 217).trimEnd() + '…' : plainText;
      article.append(heading, summary);
      fragment.appendChild(article);
    });
    results.appendChild(fragment);
  }

  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q');
  if (initialQuery) input.value = initialQuery;
  input.addEventListener('input', render);

  fetch(input.dataset.indexUrl)
    .then((response) => {
      if (!response.ok) throw new Error('Search index request failed');
      return response.json();
    })
    .then((data) => {
      entries = data.filter((entry) => entry.lang === input.dataset.lang && entry.url && entry.title);
      loaded = true;
      render();
    })
    .catch(() => {
      loaded = false;
      status.textContent = labels.error;
    });
})();
