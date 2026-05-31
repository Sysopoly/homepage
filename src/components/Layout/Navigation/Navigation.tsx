import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Navigation.module.css';

const navLinks = ['services', 'approach', 'portfolio', 'technologies', 'contact'] as const;

export function Navigation() {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'no' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('language', next);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <img src="/logo.svg" alt="Sysopoly" className={styles.logoImg} />
        </a>

        <ul className={styles.links}>
          {navLinks.map((key) => (
            <li key={key}>
              <a href={`#${key}`} className={styles.link}>
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button onClick={toggleLanguage} className={styles.iconBtn} aria-label="Toggle language">
            <Globe size={18} />
            <span className={styles.langLabel}>{i18n.language.toUpperCase()}</span>
          </button>
          <button onClick={toggle} className={styles.iconBtn} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
