import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white relative">
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-blue)/0.05)] to-transparent"></div>
      
      {/* Partner Section */}
      <div className="border-b border-border py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-text-dark mb-2">Partnered With</h3>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {/* Partner logo placeholders */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center opacity-60 hover:opacity-80 transition-opacity"
              >
                <span className="text-gray-400 text-xs font-medium">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo and Tagline */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/src/assets/innovkaro-logo.png" alt="InnovKaro" className="h-8 w-8" />
                <span className="text-xl font-bold">
                  <span className="text-text-dark">Innov</span>
                  <span className="brand-gradient-text">Karo</span>
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                AI-powered platform connecting mentors and mentees for meaningful growth and learning experiences.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-text-dark">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Find Mentors', 'Become a Mentor', 'How It Works', 'Pricing'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-text-muted hover:text-brand-blue transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: About Us */}
            <div className="space-y-4">
              <h4 className="font-semibold text-text-dark">About Us</h4>
              <ul className="space-y-2">
                {['Our Story', 'Blog', 'Careers', 'Press', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-text-muted hover:text-brand-blue transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-text-dark">Contact Info</h4>
              <div className="space-y-2 text-sm text-text-muted">
                <p>123 Innovation Street<br />Tech City, TC 12345</p>
                <p>hello@innovkaro.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © 2025 InnovKaro. All Rights Reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-text-muted hover:text-brand-blue transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(var(--brand-blue)/0.3)]"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;