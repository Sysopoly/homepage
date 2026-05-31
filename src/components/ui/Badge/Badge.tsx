import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'prominent';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const className = variant === 'prominent'
    ? `${styles.badge} ${styles.prominent}`
    : styles.badge;
  return <span className={className}>{children}</span>;
}
