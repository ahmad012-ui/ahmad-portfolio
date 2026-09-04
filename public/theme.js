const STORAGE_KEY = 'ahmad-portfolio-theme';

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

setTheme(getInitialTheme());

a function initThemeToggle() {
  if (document.querySelector('.theme-toggle')) return true;

  const nav = document.querySelector('.nav');
  if (!nav) return false;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle';
  button.setAttribute('aria-label', 'Switch to light theme');
  button.setAttribute('title', 'Switch theme');

  const syncButton = () => {
    const light = document.documentElement.dataset.theme === 'light';
    button.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    button.setAttribute('aria-pressed', String(light));
  };

  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    syncButton();
  });

  nav.appendChild(button);
  syncButton();
  return true;
}

const observer = new MutationObserver(() => {
  if (initThemeToggle()) observer.disconnect();
});

observer.observe(document.body, { childList: true, subtree: true });
initThemeToggle();
