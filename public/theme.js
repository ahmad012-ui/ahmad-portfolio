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

function initThemeToggle() {
  if (document.querySelector('.theme-toggle')) return true;

  const nav = document.querySelector('.nav');
  if (!nav) return false;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle no-motion';
  button.setAttribute('title', 'Switch theme');

  button.innerHTML = `
    <svg class="theme-toggle-svg" viewBox="0 0 74 42" aria-hidden="true" focusable="false">
      <path class="theme-toggle-track"
        d="M2.5 21A18.5 18.5 0 0 1 21 2.5H53A18.5 18.5 0 0 1 71.5 21A18.5 18.5 0 0 1 53 39.5H21A18.5 18.5 0 0 1 2.5 21Z" />
      <g class="theme-toggle-active-wrap">
        <path class="theme-toggle-active"
          d="M37 4.5H30A16.5 16.5 0 0 0 30 37.5H37" />
      </g>
    </svg>
  `;

  const syncButton = () => {
    const light = document.documentElement.dataset.theme === 'light';
    button.classList.toggle('is-light', light);
    button.classList.toggle('is-dark', !light);
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
  requestAnimationFrame(() => button.classList.remove('no-motion'));
  return true;
}

const observer = new MutationObserver(() => {
  if (initThemeToggle()) observer.disconnect();
});

observer.observe(document.body, { childList: true, subtree: true });
initThemeToggle();
