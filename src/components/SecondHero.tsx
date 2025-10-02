import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, Cpu, Scale, Monitor, DollarSign, Megaphone, TrendingUp, Package, Settings, Palette, Rocket } from 'lucide-react';

interface MentorCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  plateClass: string;
  iconClass: string;
}

const mentorCategories: MentorCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-blue',
    iconClass: 'text-blue-600'
  },
  {
    id: 'chip-design',
    name: 'Chip Design & Semiconductors',
    icon: <Cpu size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-purple',
    iconClass: 'text-violet-600'
  },
  {
    id: 'legal-law',
    name: 'Legal & Law',
    icon: <Scale size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-amber',
    iconClass: 'text-amber-500'
  },
  {
    id: 'technology-it',
    name: 'Technology & IT',
    icon: <Monitor size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-mint',
    iconClass: 'text-emerald-500'
  },
  {
    id: 'finance-investment',
    name: 'Finance & Investment',
    icon: <DollarSign size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-mint',
    iconClass: 'text-green-600'
  },
  {
    id: 'marketing-branding',
    name: 'Marketing & Branding',
    icon: <Megaphone size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-rose',
    iconClass: 'text-pink-600'
  },
  {
    id: 'sales-business',
    name: 'Sales & Business Development',
    icon: <TrendingUp size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-amber',
    iconClass: 'text-orange-500'
  },
  {
    id: 'operations-supply',
    name: 'Operations & Supply Chain',
    icon: <Package size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-ice',
    iconClass: 'text-cyan-500'
  },
  {
    id: 'product-management',
    name: 'Product Management',
    icon: <Settings size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-peri',
    iconClass: 'text-indigo-600'
  },
  {
    id: 'design-innovation',
    name: 'Design & Innovation',
    icon: <Palette size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-rose',
    iconClass: 'text-rose-600'
  },
  {
    id: 'startups-entrepreneurship',
    name: 'Startups & Entrepreneurship',
    icon: <Rocket size={26} strokeWidth={1.75} />,
    plateClass: 'mentor-plate-purple',
    iconClass: 'text-purple-600'
  }
];

interface MentorCardProps {
  category: MentorCategory;
}

const MentorCard: React.FC<MentorCardProps> = ({ category }) => (
  <div className="mentor-card group">
    <div className={`mentor-plate ${category.plateClass}`}>
      <div className={category.iconClass}>
        {category.icon}
      </div>
    </div>
    <div className="mentor-label">
      {category.name}
    </div>
  </div>
);

interface SecondHeroProps {
  variant?: 'grid' | 'carousel';
}

const SecondHero: React.FC<SecondHeroProps> = ({ variant = 'carousel' }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mentor-section">
      <div className="mentor-container">
        {/* Title and Subtitle */}
        <h1 className="mentor-title">
          500+ Industry Mentors Ready to Guide You
        </h1>
        <p className="mentor-lead">
  InnovKaro is backed by 500+ mentors <strong className="brand-gradient-text">who've already shown interest in our platform.</strong>
  <br />
  From established domains to cutting-edge fields, our mentors bring real-world experience
  and actionable insights to help you make the right moves.
</p>


        {/* Content - Grid or Carousel */}
        {variant === 'grid' ? (
          <div className="mentor-grid">
            {mentorCategories.map((category) => (
              <MentorCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <>
            {/* Carousel Viewport */}
            <div className="mentor-rail-viewport">
              <div 
                ref={carouselRef}
                className="mentor-rail"
              >
                <div className="mentor-rail-track">
                  {mentorCategories.map((category) => (
                    <MentorCard key={category.id} category={category} />
                  ))}
                </div>
                {/* Duplicate track for seamless infinite scroll */}
                <div className="mentor-rail-track">
                  {mentorCategories.map((category) => (
                    <MentorCard key={`${category.id}-dup`} category={category} />
                  ))}
                </div>
              </div>
            </div>

            {/* Callout Strip */}
            <aside className="mentor-callout">
              <h3 className="mentor-callout-title">
                Join InnovKaro and connect with mentors who shape the future of industries
              </h3>
              <button className="mentor-cta-btn">
                Connect with Mentors
              </button>
            </aside>
          </>
        )}
      </div>
    </section>
  );
};

export default SecondHero;