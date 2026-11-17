(() => {
  const storageKey = 'site-theme';

  function addThemeToggle() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    if (nav.querySelector('.theme-toggle')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.textContent = 'Modo noche';
    button.setAttribute('aria-label', 'Cambiar al modo noche');

    const applyTheme = (theme) => {
      const dark = theme === 'dark';
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      button.textContent = dark ? 'Modo claro' : 'Modo noche';
      button.setAttribute('aria-label', dark ? 'Cambiar al modo claro' : 'Cambiar al modo noche');
      button.setAttribute('aria-pressed', String(dark));
    };

    try {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        applyTheme(savedTheme);
      }
    } catch (error) {}

    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch (error) {}
      applyTheme(nextTheme);
    });

    nav.appendChild(button);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addThemeToggle, { once: true });
  } else {
    addThemeToggle();
  }
})();
