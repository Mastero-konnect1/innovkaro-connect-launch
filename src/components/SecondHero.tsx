import { Button } from '@/components/ui/button';

const SecondHero = () => {
  const profileCards = [
    { id: 1, name: "Sarah Chen", role: "Product Manager", image: "https://images.unsplash.com/photo-1494790108755-2616b6210533?w=150&h=150&fit=crop&crop=face" },
    { id: 2, name: "David Kumar", role: "Tech Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { id: 3, name: "Maya Rodriguez", role: "Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    { id: 4, name: "James Wilson", role: "Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { id: 5, name: "Lisa Park", role: "Marketing", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
    { id: 6, name: "Alex Thompson", role: "Sales Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { id: 7, name: "Emma Davis", role: "Operations", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
    { id: 8, name: "Ryan Miller", role: "Strategy", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Main Content */}
        <div className="space-y-8 mb-16">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold leading-tight text-text-dark max-w-4xl mx-auto">
            All-in-one platform to plan, collaborate, and deliver
            <span className="brand-gradient-text"> — faster and smarter</span>
          </h1>
          
          <p className="text-xl text-text-medium leading-relaxed max-w-2xl mx-auto">
            InnovKaro connects teams with AI-powered collaboration tools, 
            smart project management, and seamless workflow automation.
          </p>
          
          <Button className="bg-text-dark text-white hover:bg-text-medium h-12 px-8 text-base font-medium rounded-lg shadow-lg transition-all duration-300">
            Get started for Free
          </Button>
        </div>

        {/* Profile Cards Row - Auto-scrolling */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Double the cards for seamless loop */}
            {[...profileCards, ...profileCards].map((profile, index) => (
              <div
                key={`${profile.id}-${index}`}
                className={`flex-shrink-0 glass-card rounded-2xl p-4 mx-2 transform transition-all duration-300 hover:scale-105`}
                style={{
                  width: '120px',
                  height: '150px',
                  animation: `wave 3s ease-in-out infinite ${index * 0.5}s`,
                  boxShadow: '0 20px 40px -12px rgba(0, 123, 255, 0.25), 0 8px 25px -8px rgba(157, 78, 221, 0.15)'
                }}
              >
                <div className="space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-brand-blue to-brand-purple p-0.5">
                    <img
                      src={profile.image}
                      alt={`${profile.name} profile`}
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-text-dark leading-tight">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-tight">
                      {profile.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;