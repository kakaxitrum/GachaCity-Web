import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>GachaCity Roleplay</h3>
          <p>Server Launcher GTA5 tốt nhất Việt Nam</p>
          <div className={styles.social}>
            <a href="#" aria-label="Discord">Discord</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>
        
        <div className={styles.section}>
          <h4>Liên kết nhanh</h4>
          <ul>
            <li><a href="/rules">Luật server</a></li>
            <li><a href="/jobs">Nghề nghiệp</a></li>
            <li><a href="/download">Tải game</a></li>
            <li><a href="/about">Giới thiệu</a></li>
          </ul>
        </div>
        
        <div className={styles.section}>
          <h4>Thông tin server</h4>
          <ul>
            <li>IP: discord.gg/gachaking</li>
            <li>Slot: 1000 players</li>
            <li>Version: Launcher Latest</li>
            <li>Ping: &lt; 50ms</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; 2025 GachaCity Roleplay. All rights reserved.</p>
      </div>
    </footer>
  );
}