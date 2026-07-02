import { useEffect, useState } from 'react';
import styles from '../styles/themeToggle.module.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const attr = document.documentElement.getAttribute('data-theme');
    const initial = attr || 'light';
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggle = () =>
    setTheme((t) => {
      const next = t === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined' && window.umami?.track) {
        window.umami.track('theme-toggle', { to: next });
      }
      return next;
    });

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={styles.toggle}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
