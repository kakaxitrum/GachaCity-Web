import Layout from '@/components/Layout';
import styles from '@/styles/Rules.module.css';

export default function Rules() {
  const ruleCategories = [
    {
      id: 1,
      title: 'Luật chung (General Rules)',
      icon: '📋',
      rules: [
        'Không được sử dụng ngôn từ độc hại, phân biệt chủng tộc hay xúc phạm',
        'Tôn trọng tất cả thành viên và staff của server',
        'Không spam chat hay voice chat',
        'Sử dụng tên nhân vật phù hợp và có ý nghĩa',
        'Không được chia sẻ thông tin cá nhân của người khác'
      ]
    },
    {
      id: 2,
      title: 'Roleplay Rules (RP)',
      icon: '🎭',
      rules: [
        'Luôn giữ tính cách nhân vật (stay in character)',
        'Không được metagaming (sử dụng thông tin OOC trong IC)',
        'Không powergaming (ép buộc hành động của người khác)',
        'Random Death Match (RDM) và Vehicle Death Match (VDM) bị cấm',
        'Phải có lý do hợp lý cho mọi hành động của nhân vật',
        'Không được combat logging (thoát game khi đang chiến đấu)'
      ]
    },
    {
      id: 3,
      title: 'Luật giao thông',
      icon: '🚗',
      rules: [
        'Tuân thủ luật giao thông như ngoài đời thực',
        'Không lái xe một cách bất hợp lý hay nguy hiểm',
        'Phải có lý do chính đáng để tham gia chase',
        'Không ramming cố ý vào xe khác',
        'Sử dụng turn signals khi cần thiết'
      ]
    },
    {
      id: 4,
      title: 'Luật nghề nghiệp',
      icon: '💼',
      rules: [
        'Tuân thủ SOP (Standard Operating Procedures) của từng job',
        'Không được abuse quyền hạn job',
        'Phải roleplay đúng với vai trò được giao',
        'Hợp tác với các department khác khi cần',
        'Báo cáo mọi vi phạm lên supervisor'
      ]
    },
    {
      id: 5,
      title: 'Luật kinh tế',
      icon: '💰',
      rules: [
        'Không được exploit hay bug abuse để kiếm tiền',
        'Giá cả phải hợp lý và phù hợp với thị trường',
        'Không được scam người chơi khác',
        'Money transfer phải có lý do IC hợp lệ',
        'Không được money laundering'
      ]
    },
    {
      id: 6,
      title: 'Luật tội phạm',
      icon: '🔫',
      rules: [
        'Phải có storyline và character development',
        'Không được kill người vô lý do',
        'Tuân thủ rule về hostage situations',
        'Không được camping respawn points',
        'Phải có escape plan hợp lý'
      ]
    }
  ];

  return (
    <Layout title="Luật Server - GachaCity Roleplay">
      <div className={styles.rulesPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Luật Server</h1>
            <p className={styles.subtitle}>
              Quy tắc và điều khoản để tạo nên một môi trường roleplay chuyên nghiệp
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className={styles.notice}>
          <div className={styles.container}>
            <div className={styles.noticeBox}>
              <div className={styles.noticeIcon}>⚠️</div>
              <div className={styles.noticeContent}>
                <h3>Lưu ý quan trọng</h3>
                <p>
                  Mọi thành viên tham gia server đều phải đọc và tuân thủ đầy đủ các quy tắc dưới đây. 
                  Vi phạm có thể dẫn đến cảnh cáo, kick hoặc ban tùy theo mức độ nghiêm trọng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rules Categories */}
        <section className={styles.rulesSection}>
          <div className={styles.container}>
            {ruleCategories.map((category) => (
              <div key={category.id} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h2 className={styles.categoryTitle}>{category.title}</h2>
                </div>
                <div className={styles.rulesList}>
                  {category.rules.map((rule, index) => (
                    <div key={index} className={styles.ruleItem}>
                      <span className={styles.ruleNumber}>{index + 1}.</span>
                      <p className={styles.ruleText}>{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Punishment System */}
        <section className={styles.punishment}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Hệ thống xử phạt</h2>
            <div className={styles.punishmentGrid}>
              <div className={styles.punishmentCard}>
                <div className={styles.punishmentIcon}>⚠️</div>
                <h3>Warning</h3>
                <p>Vi phạm nhẹ lần đầu</p>
                <span className={styles.punishmentDuration}>0 - 24h</span>
              </div>
              <div className={styles.punishmentCard}>
                <div className={styles.punishmentIcon}>👢</div>
                <h3>Kick</h3>
                <p>Vi phạm lặp lại hoặc nghiêm trọng</p>
                <span className={styles.punishmentDuration}>Tức thì</span>
              </div>
              <div className={styles.punishmentCard}>
                <div className={styles.punishmentIcon}>⏰</div>
                <h3>Temp Ban</h3>
                <p>Vi phạm nghiêm trọng</p>
                <span className={styles.punishmentDuration}>1 - 30 ngày</span>
              </div>
              <div className={styles.punishmentCard}>
                <div className={styles.punishmentIcon}>🚫</div>
                <h3>Permanent Ban</h3>
                <p>Vi phạm cực kỳ nghiêm trọng</p>
                <span className={styles.punishmentDuration}>Vĩnh viễn</span>
              </div>
            </div>
          </div>
        </section>

        {/* Appeals */}
        <section className={styles.appeals}>
          <div className={styles.container}>
            <div className={styles.appealBox}>
              <h3>Khiếu nại & Báo cáo</h3>
              <p>
                Nếu bạn cho rằng mình bị xử phạt không công bằng hoặc muốn báo cáo vi phạm, 
                vui lòng liên hệ qua Discord server hoặc tạo ticket trong game.
              </p>
              <div className={styles.appealButtons}>
                <button className={styles.discordBtn}>Discord Support</button>
                <button className={styles.ticketBtn}>Tạo Ticket</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}