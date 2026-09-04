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

  // The reference animation is a single white line travelling around a fixed
  // rounded track. The cursor/metallic circle seen in the reference is not
  // part of the control, so it is intentionally not recreated here.
  button.innerHTML = `
    <svg class="theme-toggle-svg" viewBox="0 0 74 42" aria-hidden="true" focusable="false">
      <path class="theme-toggle-track" pathLength="100"
        d="M37 7H41A14 14 0 0 1 55 21A14 14 0 0 1 41 35H37A14 14 0 0 1 23 21A14 14 0 0 1 37 7Z" />
      <path class="theme-toggle-active" pathLength="100"
        d="M37 7H41A14 14 0 0 1 55 21A14 14 0 0 1 41 35H37A14 14 0 0 1 23 21A14 14 0 0 1 37 7Z" />
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
