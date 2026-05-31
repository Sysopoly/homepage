import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

const nodes = [
  { x: 28, y: 18, label: 'App', delay: 0.4 },
  { x: 72, y: 18, label: 'Auth', delay: 0.5 },
  { x: 50, y: 42, label: 'API', delay: 0.3 },
  { x: 50, y: 62, label: 'Core', delay: 0.6 },
  { x: 50, y: 80, label: 'Data', delay: 0.8 },
];

// App → API, Auth → API, API → Core, Core → Data
const connections = [
  [0, 2], [1, 2], [2, 3], [3, 4],
];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.orbContainer}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.badge}>Software Consultancy</span>
          <h1 className={styles.headline}>
            {t('hero.headline')}
          </h1>
          <p className={styles.sub}>{t('hero.subheadline')}</p>
        </motion.div>

        {/* Network illustration */}
        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 100 95" className={styles.network}>
            {connections.map(([from, to], i) => (
              <motion.line
                key={i}
                x1={nodes[from].x}
                y1={nodes[from].y}
                x2={nodes[to].x}
                y2={nodes[to].y}
                className={styles.connection}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
              />
            ))}
            {nodes.map((node, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: node.delay }}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.label === 'API' ? 6 : 4.5}
                  className={node.label === 'API' ? styles.nodeCore : styles.node}
                />
                <text
                  x={node.x}
                  y={node.y + (node.label === 'API' ? 12 : 10)}
                  className={styles.nodeLabel}
                >
                  {node.label}
                </text>
              </motion.g>
            ))}
          </svg>
          <div className={styles.pulse} />
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
