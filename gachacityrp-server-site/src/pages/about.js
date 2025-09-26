import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <Layout title="Giới thiệu - GachaCity Roleplay">
      <div className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>GachaCity Roleplay</h1>
            <p className={styles.subtitle}>
              Hành trình từ giấc mơ đến hiện thực của một server GTA5 Việt Nam chất lượng cao
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.story}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>Về GachaCity Roleplay</h2>
              <p>
                GachaCity Roleplay Thành phố văn minh,lịch sự và thoải mái với rất nhiều content không ở đâu có, các tuyến storymode tuyệt đối điện ảnh.
                Lấy Roleplay làm gốc, hãy phát triển tuyến nhân vật của bạn thật chất lượng và đúng luật.
              </p>
              <p>
                Thành phố được phát triển để trở thành hình mẫu một nền kinh tế thị trường điển hình với rất nhiều doanh nghiệp, nghề tạp hóa phụ thuộc mật thiết lẫn nhau.
                Sẽ không có một thành phố nào có tận 60 doanh nghiệp như GachaCity Roleplay.
                Bí ẩn sẽ dần bật mí. Việc của bạn là sống và hóa thân thành nhân vật bạn hằng mong muốn!.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <div className={styles.container}>
            <h2>Giá trị cốt lõi</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎭</div>
                <h3>Roleplay chân thực</h3>
                <p>Khuyến khích roleplay sâu và có ý nghĩa, tạo ra những câu chuyện đáng nhớ</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>Cộng đồng thân thiện</h3>
                <p>Xây dựng môi trường tích cực, hỗ trợ lẫn nhau và tôn trọng mọi người</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>⚡</div>
                <h3>Chất lượng cao</h3>
                <p>Cam kết mang đến hiệu suất server tốt nhất và trải nghiệm mượt mà</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🔧</div>
                <h3>Cải tiến liên tục</h3>
                <p>Lắng nghe phản hồi và không ngừng phát triển các tính năng mới</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <div className={styles.container}>
            <h2>Đội ngũ phát triển</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>👑</div>
                <h3>Founder & CEO</h3>
                <p>Visionary và người dẫn dắt dự án từ những ngày đầu</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>💻</div>
                <h3>Development Team</h3>
                <p>Đội ngũ lập trình viên tài năng với kinh nghiệm phong phú</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>🛡️</div>
                <h3>Admin Team</h3>
                <p>Đội ngũ quản trị tận tâm, đảm bảo trật tự và hỗ trợ người chơi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statistics}>
          <div className={styles.container}>
            <h2>Thành tích của chúng tôi</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>Người chơi đã tham gia</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>99.8%</span>
                <span className={styles.statLabel}>Uptime server</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Updates đã phát hành</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Hỗ trợ người chơi</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}