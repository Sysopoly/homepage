import { useTranslation } from 'react-i18next';
import { TrendingUp, Shield, Puzzle } from 'lucide-react';
import { Section } from '../Layout/Section/Section';
import styles from './Approach.module.css';

const pillars = [
  { key: 'scalable', icon: TrendingUp, num: '01' },
  { key: 'maintainable', icon: Shield, num: '02' },
  { key: 'flexible', icon: Puzzle, num: '03' },
] as const;

export function Approach() {
  const { t } = useTranslation();

  return (
    <Section id="approach">
      <h2 className={styles.title}>{t('approach.title')}</h2>
      <div className={styles.grid}>
        {pillars.map(({ key, icon: Icon, num }) => (
          <div key={key} className={styles.pillar}>
            <div className={styles.pillarHeader}>
              <span className={styles.num}>{num}</span>
              <Icon size={20} className={styles.icon} />
            </div>
            <h3 className={styles.pillarTitle}>{t(`approach.${key}.title`)}</h3>
            <p className={styles.pillarDesc}>{t(`approach.${key}.description`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
