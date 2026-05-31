import styles from './Section.module.css';
import { useAnimateIn } from '../../../hooks/useAnimateIn';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export function Section({ id, children }: SectionProps) {
  const { ref, isInView } = useAnimateIn();

  return (
    <section
      id={id}
      ref={ref}
      className={styles.section}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out)',
      }}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}
