(() => {
  const storageKey = 'site-theme';

  function applyTheme(theme) {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', dark ? 'Cambiar al modo claro' : 'Cambiar al modo noche');
    button.setAttribute('title', dark ? 'Cambiar al modo claro' : 'Cambiar al modo noche');
    button.setAttribute('aria-pressed', String(dark));
  }

  function initThemeToggle() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    try {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        applyTheme(savedTheme);
      } else {
        applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
      }
    } catch (error) {
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    }

    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(storageKey, nextTheme); } catch (error) {}
      applyTheme(nextTheme);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle, { once: true });
  } else {
    initThemeToggle();
  }
})();
