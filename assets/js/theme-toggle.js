(() => {
  const storageKey = 'site-theme';

  function initializeThemeToggle() {
    const nav = document.querySelector('.site-nav');
    if (!nav || nav.querySelector('.theme-toggle')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', 'Cambiar al modo noche');

    function setTheme(theme, savePreference) {
      const isDark = theme === 'dark';
      document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
      button.textContent = isDark ? 'Modo claro' : 'Modo noche';
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', isDark ? 'Cambiar al modo claro' : 'Cambiar al modo noche');

      if (savePreference) {
        try {
          localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
        } catch (error) {
          // Theme switching still works for this page if browser storage is unavailable.
        }
      }
    }

    let initialTheme = document.documentElement.dataset.theme || 'light';
    try {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme === 'dark' || savedTheme === 'light') initialTheme = savedTheme;
    } catch (error) {
      // Keep the default light theme if browser storage is unavailable.
    }

    setTheme(initialTheme, false);
    button.addEventListener('click', () => {
      const currentTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      setTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    });
    nav.appendChild(button);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle, { once: true });
  } else {
    initializeThemeToggle();
  }
})();
