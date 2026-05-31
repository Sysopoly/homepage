import { useTranslation } from 'react-i18next';
import { FolderOpen } from 'lucide-react';
import { Section } from '../Layout/Section/Section';
import styles from './Portfolio.module.css';

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <Section id="portfolio">
      <h2 className={styles.title}>{t('portfolio.title')}</h2>
      <div className={styles.empty}>
        <FolderOpen size={40} className={styles.icon} />
        <p className={styles.emptyText}>{t('portfolio.empty')}</p>
        <p className={styles.subtitle}>{t('portfolio.subtitle')}</p>
      </div>
    </Section>
  );
}
