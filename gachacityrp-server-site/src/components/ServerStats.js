import { useState, useEffect } from 'react';
import styles from './ServerStats.module.css';

export default function ServerStats() {
  const [stats, setStats] = useState({
    online: 847,
    maxPlayers: 1000,
    uptime: '99.9%',
    ping: '< 50ms',
    version: 'Latest'
  });

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Thống kê Server</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{stats.online}/{stats.maxPlayers}</span>
              <span className={styles.statLabel}>Players Online</span>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⚡</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{stats.uptime}</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📡</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{stats.ping}</span>
              <span className={styles.statLabel}>Ping</span>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🔄</div>
            <div className={styles.statInfo}>
              <span className={styles.statNumber}>{stats.version}</span>
              <span className={styles.statLabel}>Launcher Version</span>
            </div>
          </div>
        </div>

        <div className={styles.serverInfo}>
          <h3>Thông tin kết nối</h3>
          <div className={styles.connectionDetails}>
            <div className={styles.detail}>
              <strong>Server IP:</strong> discord.gg/gachaking
            </div>
            <div className={styles.detail}>
              <strong>Direct Connect:</strong> discord.gg/gachaking
            </div>
            <div className={styles.detail}>
              <strong>Location:</strong> Singapore (Asia) - Low Ping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}