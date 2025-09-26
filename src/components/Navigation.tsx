import { useState, useEffect } from 'react';
import innovkaroLogo from '@/assets/innovkaro-logo.png';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src={innovkaroLogo} 
              alt="InnovKaro Logo" 
              className="h-10 w-10 object-contain"
            />
            <div className="text-2xl font-bold">
              <span className="text-text-dark">Innov</span>
              <span className="brand-gradient-text">karo</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="btn-gradient h-10 px-6 text-sm font-medium">
            Notify Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;