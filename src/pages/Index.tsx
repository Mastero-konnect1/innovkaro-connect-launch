import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SecondHero from '@/components/SecondHero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <Hero />
        <SecondHero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
