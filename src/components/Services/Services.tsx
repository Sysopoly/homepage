import { useTranslation } from 'react-i18next';
import { Layers, Code2, Server, MessageSquare } from 'lucide-react';
import { Section } from '../Layout/Section/Section';
import { Card } from '../ui/Card/Card';
import styles from './Services.module.css';

const services = [
  { key: 'fullstack', icon: Code2 },
  { key: 'infrastructure', icon: Server },
  { key: 'architecture', icon: Layers },
  { key: 'advisory', icon: MessageSquare },
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <Section id="services">
      <h2 className={styles.title}>{t('services.title')}</h2>
      <div className={styles.grid}>
        {services.map(({ key, icon: Icon }) => (
          <Card key={key}>
            <div className={styles.icon}>
              <Icon size={22} />
            </div>
            <h3 className={styles.cardTitle}>{t(`services.${key}.title`)}</h3>
            <p className={styles.cardDesc}>{t(`services.${key}.description`)}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
