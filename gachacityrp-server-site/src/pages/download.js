import Layout from '@/components/Layout';
import styles from '@/styles/Download.module.css';

export default function Download() {
  return (
    <Layout title="Tải game - GachaCity Roleplay">
      <div className={styles.downloadPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Tải game & Hướng dẫn</h1>
            <p className={styles.subtitle}>
              Làm theo hướng dẫn chi tiết để tham gia GachaCity Roleplay
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section className={styles.requirements}>
          <div className={styles.container}>
            <h2>Yêu cầu hệ thống</h2>
            <div className={styles.reqGrid}>
              <div className={styles.reqCard}>
                <h3>🖥️ Minimum</h3>
                <ul>
                  <li>OS: Windows 10 64-bit</li>
                  <li>CPU: Intel Core i3-2100 / AMD FX-6300</li>
                  <li>RAM: 8GB</li>
                  <li>GPU: GTX 660 2GB / HD 7870 2GB</li>
                  <li>Storage: 100GB free space</li>
                  <li>Network: Broadband Internet</li>
                </ul>
              </div>
              <div className={styles.reqCard}>
                <h3>⚡ Recommended</h3>
                <ul>
                  <li>OS: Windows 11 64-bit</li>
                  <li>CPU: Intel Core i5-8400 / AMD Ryzen 5 2600</li>
                  <li>RAM: 16GB</li>
                  <li>GPU: GTX 1060 6GB / RX 580 8GB</li>
                  <li>Storage: 150GB SSD</li>
                  <li>Network: High-speed Internet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Download Steps */}
        <section className={styles.steps}>
          <div className={styles.container}>
            <h2>Hướng dẫn cài đặt</h2>
            <div className={styles.stepsContainer}>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Mua GTA V</h3>
                  <p>Bạn cần sở hữu bản quyền GTA V từ Steam, Epic Games hoặc Rockstar Games</p>
                  <div className={styles.downloadLinks}>
                    <a href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={`${styles.downloadBtn} ${styles.steam}`}>
                      Steam Store
                    </a>
                    <a href="https://store.epicgames.com/en-US/p/grand-theft-auto-v" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={`${styles.downloadBtn} ${styles.epic}`}>
                      Epic Games
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Tải FiveM Client</h3>
                  <p>Tải và cài đặt FiveM client chính thức để có thể kết nối với server</p>
                  <div className={styles.downloadLinks}>
                    <a href="https://fivem.net/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={`${styles.downloadBtn} ${styles.fivem}`}>
                      Tải FiveM
                    </a>
                  </div>
                  <div className={styles.note}>
                    <strong>Lưu ý:</strong> Đảm bảo tải FiveM từ trang chính thức fivem.net
                  </div>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Cài đặt FiveM</h3>
                  <p>Chạy file FiveM.exe và làm theo hướng dẫn cài đặt</p>
                  <ul className={styles.stepList}>
                    <li>Chạy FiveM với quyền Administrator</li>
                    <li>FiveM sẽ tự động detect GTA V</li>
                    <li>Đợi quá trình cài đặt hoàn tất</li>
                    <li>Tạo tài khoản FiveM nếu chưa có</li>
                  </ul>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Kết nối Server</h3>
                  <p>Sử dụng thông tin dưới đây để kết nối với GachaCity RP</p>
                  <div className={styles.serverInfo}>
                    <div className={styles.serverDetail}>
                      <strong>Server IP:</strong>
                      <span className={styles.copyable}>connect.gachacity.vn</span>
                      <button className={styles.copyBtn}>📋 Copy</button>
                    </div>
                    <div className={styles.serverDetail}>
                      <strong>Direct Connect:</strong>
                      <span className={styles.copyable}>fivem://connect/connect.gachacity.vn</span>
                      <button className={styles.copyBtn}>📋 Copy</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepContent}>
                  <h3>Tạo nhân vật</h3>
                  <p>Tạo nhân vật của bạn và bắt đầu hành trình roleplay</p>
                  <ul className={styles.stepList}>
                    <li>Chọn appearance cho nhân vật</li>
                    <li>Đặt tên và background story</li>
                    <li>Hoàn thành tutorial trong game</li>
                    <li>Đọc luật server và bắt đầu RP!</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className={styles.troubleshooting}>
          <div className={styles.container}>
            <h2>Xử lý sự cố thường gặp</h2>
            <div className={styles.faqGrid}>
              
              <div className={styles.faqCard}>
                <h3>❌ Không kết nối được server</h3>
                <ul>
                  <li>Kiểm tra kết nối internet</li>
                  <li>Tắt VPN nếu đang sử dụng</li>
                  <li>Restart FiveM và thử lại</li>
                  <li>Kiểm tra firewall/antivirus</li>
                </ul>
              </div>

              <div className={styles.faqCard}>
                <h3>🔄 Game bị crash</h3>
                <ul>
                  <li>Update driver card màn hình</li>
                  <li>Verify integrity GTA V files</li>
                  <li>Giảm graphics settings</li>
                  <li>Chạy FiveM với Admin rights</li>
                </ul>
              </div>

              <div className={styles.faqCard}>
                <h3>🐌 FPS thấp/Lag</h3>
                <ul>
                  <li>Giảm graphics settings</li>
                  <li>Đóng các app không cần thiết</li>
                  <li>Update Windows và drivers</li>
                  <li>Kiểm tra nhiệt độ CPU/GPU</li>
                </ul>
              </div>

              <div className={styles.faqCard}>
                <h3>🔐 Không tải được mods</h3>
                <ul>
                  <li>Kiểm tra dung lượng ổ cứng</li>
                  <li>Clear cache FiveM</li>
                  <li>Restart router/modem</li>
                  <li>Liên hệ support nếu vẫn lỗi</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Support */}
        <section className={styles.support}>
          <div className={styles.container}>
            <div className={styles.supportBox}>
              <h3>🆘 Cần hỗ trợ thêm?</h3>
              <p>
                Nếu bạn gặp khó khăn trong quá trình cài đặt hoặc kết nối, 
                đội ngũ support của chúng tôi luôn sẵn sàng hỗ trợ 24/7
              </p>
              <div className={styles.supportButtons}>
                <button className={styles.discordBtn}>
                  Discord Support
                </button>
                <button className={styles.ticketBtn}>
                  Tạo Support Ticket
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}