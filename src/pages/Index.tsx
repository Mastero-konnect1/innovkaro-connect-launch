import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SecondHero from '@/components/SecondHero';
// import FeaturesRow from '@/components/FeaturesRow';
import MidSectionGrid from '@/components/MidSectionGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <Hero />
        <SecondHero />
        {/* <FeaturesRow /> */}
        <MidSectionGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
