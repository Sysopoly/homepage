import { useTranslation } from 'react-i18next';
import { Mail, ExternalLink } from 'lucide-react';
import { Section } from '../Layout/Section/Section';
import { Button } from '../ui/Button/Button';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <h2 className={styles.title}>{t('contact.title')}</h2>
      <p className={styles.description}>{t('contact.description')}</p>

      <div className={styles.actions}>
        <Button href={`mailto:${t('contact.email')}`}>
          <Mail size={16} />
          {t('contact.email')}
        </Button>
      </div>

      <div className={styles.social}>
        <a href="https://github.com/Sysopoly" target="_blank" rel="noopener noreferrer">
          <ExternalLink size={14} />
          GitHub
        </a>
        <a href="https://linkedin.com/in/morten-spjotvoll" target="_blank" rel="noopener noreferrer">
          <ExternalLink size={14} />
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
