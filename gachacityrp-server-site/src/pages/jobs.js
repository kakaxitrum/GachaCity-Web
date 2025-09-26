import Layout from '@/components/Layout';
import styles from '@/styles/Jobs.module.css';

export default function Jobs() {
  const jobCategories = [
    {
      category: 'Government',
      color: '#4CAF50',
      jobs: [
        {
          title: 'Police Officer',
          description: 'Bảo vệ và phục vụ công dân, duy trì trật tự công cộng',
          requirements: ['Tuổi tối thiểu: 21', 'Background check', 'Academy training'],
          salary: '$4,000 - $8,000',
          icon: '👮'
        },
        {
          title: 'EMS/Paramedic',
          description: 'Cấp cứu y tế, hồi sinh và điều trị bệnh nhân',
          requirements: ['Medical certificate', 'First aid training', 'Clean record'],
          salary: '$3,500 - $7,000',
          icon: '🚑'
        },
        {
          title: 'Firefighter',
          description: 'Chữa cháy, cứu hộ và xử lý các tình huống khẩn cấp',
          requirements: ['Physical fitness', 'Fire academy', 'Teamwork skills'],
          salary: '$3,800 - $7,500',
          icon: '🚒'
        }
      ]
    },
    {
      category: 'Legal',
      color: '#2196F3',
      jobs: [
        {
          title: 'Lawyer',
          description: 'Đại diện pháp lý, tư vấn luật và bảo vệ quyền lợi khách hàng',
          requirements: ['Law degree', 'Bar exam', 'Good reputation'],
          salary: '$5,000 - $15,000',
          icon: '⚖️'
        },
        {
          title: 'Judge',
          description: 'Xét xử các vụ án và đảm bảo công lý được thực thi',
          requirements: ['Extensive legal experience', 'Appointed by government'],
          salary: '$8,000 - $20,000',
          icon: '👨‍⚖️'
        }
      ]
    },
    {
      category: 'Business',
      color: '#FF9800',
      jobs: [
        {
          title: 'Real Estate Agent',
          description: 'Mua bán, cho thuê bất động sản và tư vấn đầu tư',
          requirements: ['License required', 'Sales experience', 'Market knowledge'],
          salary: '$2,000 + Commission',
          icon: '🏠'
        },
        {
          title: 'Banker',
          description: 'Quản lý tài chính, cho vay và dịch vụ ngân hàng',
          requirements: ['Finance background', 'Clean record', 'Professional attire'],
          salary: '$4,500 - $10,000',
          icon: '🏦'
        },
        {
          title: 'Car Dealer',
          description: 'Bán xe, tư vấn và hỗ trợ tài chính mua xe',
          requirements: ['Sales license', 'Vehicle knowledge', 'Customer service'],
          salary: '$3,000 + Commission',
          icon: '🚗'
        }
      ]
    },
    {
      category: 'Services',
      color: '#9C27B0',
      jobs: [
        {
          title: 'Taxi Driver',
          description: 'Vận chuyển hành khách an toàn và chuyên nghiệp',
          requirements: ['Valid license', 'Clean driving record', 'Customer service'],
          salary: '$2,500 - $5,000',
          icon: '🚕'
        },
        {
          title: 'Mechanic',
          description: 'Sửa chữa, bảo dưỡng và độ xe cho khách hàng',
          requirements: ['Mechanical skills', 'Tool knowledge', 'Workshop access'],
          salary: '$3,000 - $8,000',
          icon: '🔧'
        },
        {
          title: 'Delivery Driver',
          description: 'Giao hàng nhanh chóng và chính xác cho khách hàng',
          requirements: ['Vehicle access', 'Good navigation', 'Time management'],
          salary: '$2,000 - $4,500',
          icon: '📦'
        }
      ]
    },
    {
      category: 'Entertainment',
      color: '#E91E63',
      jobs: [
        {
          title: 'News Reporter',
          description: 'Đưa tin tức, phỏng vấn và tạo nội dung truyền thông',
          requirements: ['Communication skills', 'Camera presence', 'Writing ability'],
          salary: '$3,500 - $8,000',
          icon: '📺'
        },
        {
          title: 'DJ/Entertainer',
          description: 'Tổ chức sự kiện, phát nhạc và giải trí cho cộng đồng',
          requirements: ['Music knowledge', 'Equipment access', 'Personality'],
          salary: '$2,000 - $6,000',
          icon: '🎵'
        }
      ]
    },
    {
      category: 'Criminal',
      color: '#F44336',
      jobs: [
        {
          title: 'Gang Member',
          description: 'Hoạt động ngầm, kiểm soát lãnh thổ và kinh doanh bất hợp pháp',
          requirements: ['Street credibility', 'Loyalty', 'Risk tolerance'],
          salary: 'Varies - High Risk',
          icon: '🔫'
        },
        {
          title: 'Drug Dealer',
          description: 'Sản xuất và phân phối chất cấm (cao rủi ro)',
          requirements: ['Underground connections', 'Discretion', 'Capital'],
          salary: 'High Risk/Reward',
          icon: '💊'
        }
      ]
    }
  ];

  return (
    <Layout title="Nghề nghiệp - GachaCity Roleplay">
      <div className={styles.jobsPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Nghề nghiệp</h1>
            <p className={styles.subtitle}>
              Khám phá hơn 20+ nghề nghiệp đa dạng với hệ thống progression chuyên sâu
            </p>
          </div>
        </section>

        {/* Job Application Process */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2>Quy trình ứng tuyển</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>1️⃣</div>
                <h3>Đăng ký</h3>
                <p>Tạo hồ sơ ứng viên trong game</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}>2️⃣</div>
                <h3>Phỏng vấn</h3>
                <p>Tham gia phỏng vấn với department head</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}>3️⃣</div>
                <h3>Training</h3>
                <p>Hoàn thành khóa training bắt buộc</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}>4️⃣</div>
                <h3>Làm việc</h3>
                <p>Bắt đầu công việc và phát triển career</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className={styles.jobsSection}>
          <div className={styles.container}>
            {jobCategories.map((category, catIndex) => (
              <div key={catIndex} className={styles.categorySection}>
                <div 
                  className={styles.categoryHeader}
                  style={{ borderLeftColor: category.color }}
                >
                  <h2 style={{ color: category.color }}>{category.category}</h2>
                </div>
                
                <div className={styles.jobsGrid}>
                  {category.jobs.map((job, jobIndex) => (
                    <div key={jobIndex} className={styles.jobCard}>
                      <div className={styles.jobHeader}>
                        <span className={styles.jobIcon}>{job.icon}</span>
                        <div className={styles.jobTitleSection}>
                          <h3 className={styles.jobTitle}>{job.title}</h3>
                          <span 
                            className={styles.jobSalary}
                            style={{ color: category.color }}
                          >
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      
                      <p className={styles.jobDescription}>{job.description}</p>
                      
                      <div className={styles.requirements}>
                        <h4>Yêu cầu:</h4>
                        <ul>
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <button 
                        className={styles.applyBtn}
                        style={{ 
                          backgroundColor: category.color,
                          borderColor: category.color 
                        }}
                      >
                        Ứng tuyển ngay
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2>Lợi ích khi làm việc</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>💰</div>
                <h3>Lương thưởng hấp dẫn</h3>
                <p>Mức lương cạnh tranh với bonus performance</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>📈</div>
                <h3>Thăng tiến rõ ràng</h3>
                <p>Hệ thống rank và promotion minh bạch</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🏥</div>
                <h3>Bảo hiểm y tế</h3>
                <p>Chăm sóc y tế miễn phí cho nhân viên</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🚗</div>
                <h3>Xe công ty</h3>
                <p>Phương tiện làm việc được cung cấp</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}