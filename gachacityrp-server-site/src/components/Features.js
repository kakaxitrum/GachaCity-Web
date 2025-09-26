import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      icon: '🏠',
      title: 'Hệ Thống Nhà Trọ',
      description: 'Hệ thống nhà cửa độc đáo với khả năng mua, bán và trang trí theo ý thích'
    },
    {
      icon: '🚗',
      title: 'Phương Tiện Custom',
      description: 'Hơn 100+ xe custom với handling cực tốt và hệ thống độ xe đa dạng'
    },
    {
      icon: '💼',
      title: 'Hệ Thống Nghề Nghiệp',
      description: '20+ nghề nghiệp đa dạng từ sạch tới bẩn: Police, EMS, Cứu hộ, Vận chuyển, Câu cá và nhiều hơn nữa'
    },
    {
      icon: '💰',
      title: 'Kinh Tế',
      description: 'Hệ thống kinh tế cân bằng cho phép kinh doanh giao dịch tự do với doanh nghiệp , cửa hàng tạp hóa,quần áo...'
    },
    {
      icon: '🏪',
      title: 'Doanh Nghiệp',
      description: 'Quản lý các doanh nghiệp có sẵn trong thành phố như Cứu hộ, Đồ ăn, Nước uống, Quần áo, Xe cộ...'
    },
    {
      icon: '⚖️',
      title: 'Hệ Thống Luật Pháp',
      description: 'Hệ thống luật lệ ingame hoàn chỉnh với cách xử lý chi tiết,bài bản và minh bạch cùng hệ thống MDT'
    },
    {
      icon: '📱',
      title: 'Điện Thoại Tùy Chỉnh',
      description: 'Điện thoại custom với apps đa dạng: GPS, Banking, Social Media'
    },
    {
      icon: '🎮',
      title: 'Events',
      description: 'Events hàng tuần với phần thưởng hấp dẫn và hoạt động cộng đồng sôi động và hấp dẫn với các sự kiện khác ngoài ingame như LOL, Valorant,TFT...'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tính năng nổi bật</h2>
        <p className={styles.subtitle}>
          Khám phá những tính năng độc đáo làm nên sự khác biệt của GachaCity RP
        </p>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <h3>Sẵn sàng bắt đầu cuộc phiêu lưu?</h3>
          <p>Tham gia ngay cùng hàng ngàn người chơi khác trong thế giới GachaCity</p>
          <button className={styles.joinButton}>Tham gia Server</button>
        </div>
      </div>
    </section>
  );
}