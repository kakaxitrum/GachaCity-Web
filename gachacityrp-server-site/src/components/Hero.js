import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [playerCount, setPlayerCount] = useState(847); 
  
  useEffect(() => {
   
    const interval = setInterval(() => {
      setPlayerCount(prev => {
        const change = Math.floor(Math.random() * 11) - 5; 
        const newCount = prev + change;
        return Math.max(500, Math.min(1000, newCount)); 
      });
    }, 30000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Chào mừng đến với <span className={styles.highlight}>GachaCity Roleplay</span>
            </h1>
            <p className={styles.subtitle}>
              Trải nghiệm roleplay chân thực nhất trên Server GTA5 với hệ thống độc đáo, 
              thị trường sống động và cộng đồng thân thiện
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{playerCount}</span>
                <span className={styles.statLabel}>Players Online</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1000</span>
                <span className={styles.statLabel}>Max Slots</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/24</span>
                <span className={styles.statLabel}>Uptime</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.primaryBtn}>
                Tham gia ngay
              </button>
              <button className={styles.secondaryBtn}>
                Hướng dẫn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}