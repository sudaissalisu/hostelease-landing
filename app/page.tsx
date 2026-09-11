import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Integrations } from '@/components/Integrations';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Integrations />
      <Stats />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
