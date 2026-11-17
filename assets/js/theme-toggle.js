(() => {
  const storageKey = 'site-theme';
  const systemTheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  let hasManualPreference = false;

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
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem(storageKey);
    } catch (error) {
      // System appearance still works when browser storage is unavailable.
    }

    hasManualPreference = savedTheme === 'dark' || savedTheme === 'light';
    const initialTheme = hasManualPreference
      ? savedTheme
      : (systemTheme && systemTheme.matches ? 'dark' : 'light');
    applyTheme(initialTheme);

    if (systemTheme) {
      const handleSystemChange = (event) => {
        if (!hasManualPreference) applyTheme(event.matches ? 'dark' : 'light');
      };
      if (typeof systemTheme.addEventListener === 'function') {
        systemTheme.addEventListener('change', handleSystemChange);
      } else if (typeof systemTheme.addListener === 'function') {
        systemTheme.addListener(handleSystemChange);
      }
    }

    if (!button) return;
    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      hasManualPreference = true;
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
