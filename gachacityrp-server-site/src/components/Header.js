import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>GachaCity <span className={styles.rp}>RP</span></h1>
          </Link>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink}>
            Trang chủ
          </Link>
          <Link href="/about" className={styles.navLink}>
            Giới thiệu
          </Link>
          <Link href="/rules" className={styles.navLink}>
            Luật server
          </Link>
          <Link href="/jobs" className={styles.navLink}>
            Nghề nghiệp
          </Link>
          <Link href="/download" className={styles.navLink}>
            Tải game
          </Link>
          <a href="#" className={`${styles.navLink} ${styles.discord}`}>
            Discord
          </a>
        </nav>

        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}