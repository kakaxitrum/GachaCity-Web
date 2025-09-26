import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ children, title = 'GachaCity Roleplay - FiveM Server' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="GachaCity Roleplay - Server FiveM GTA5 tốt nhất Việt Nam. Trải nghiệm roleplay chân thực với hệ thống jobs, economy và community sôi động." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="GTA5, FiveM, Roleplay, GachaCity, Server, Vietnam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}