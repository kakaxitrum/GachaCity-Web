import { useState } from 'react';
import styles from './News.module.css';

export default function News() {
  const [news] = useState([
    {
      id: 1,
      title: 'Update 3.5.1 - Housing System Overhaul',
      date: '2025-01-15',
      excerpt: 'Hệ thống nhà cửa được cập nhật hoàn toàn với giao diện mới, tính năng trang trí nâng cao và khả năng mở rộng không gian sống.',
      tag: 'Update',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'New Year Event 2025 - Tet Festival',
      date: '2025-01-10',
      excerpt: 'Chào đón năm mới với sự kiện Tết đặc biệt! Nhận red packet, tham gia dragon dance và khám phá các hoạt động văn hóa truyền thống.',
      tag: 'Event',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Server Performance Improvements',
      date: '2025-01-05',
      excerpt: 'Tối ưu hiệu suất server giảm lag, cải thiện sync và nâng cao trải nghiệm gaming cho tất cả người chơi.',
      tag: 'Technical',
      image: '/api/placeholder/400/250'
    }
  ]);

  const getTagColor = (tag) => {
    switch (tag) {
      case 'Update': return '#4CAF50';
      case 'Event': return '#FF9800';
      case 'Technical': return '#2196F3';
      default: return '#9E9E9E';
    }
  };

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tin tức & Cập nhật</h2>
        <p className={styles.subtitle}>
          Cập nhật thông tin mới nhất về server, events và các tính năng sắp tới
        </p>
        
        <div className={styles.newsGrid}>
          {news.map((article) => (
            <article key={article.id} className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <div className={styles.newsImage}></div>
                <div 
                  className={styles.newsTag}
                  style={{ backgroundColor: getTagColor(article.tag) }}
                >
                  {article.tag}
                </div>
              </div>
              
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  {new Date(article.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className={styles.newsTitle}>{article.title}</h3>
                <p className={styles.newsExcerpt}>{article.excerpt}</p>
                <button className={styles.readMoreBtn}>
                  Đọc thêm
                  <span className={styles.arrow}>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.moreNews}>
          <button className={styles.allNewsBtn}>
            Xem tất cả tin tức
          </button>
        </div>
      </div>
    </section>
  );
}