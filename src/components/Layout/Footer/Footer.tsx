import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img src="/logo.svg" alt="Sysopoly" className={styles.logo} />
        <p className={styles.text}>
          &copy; {year} {t('footer.copyright')} &middot; {t('footer.based')}
        </p>
      </div>
    </footer>
  );
}
