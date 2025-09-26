import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServerStats from '@/components/ServerStats';
import Features from '@/components/Features';
import News from '@/components/News';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServerStats />
      <Features />
      <News />
    </Layout>
  );
}
