const MidSectionGrid = () => {
  const features = [
    {
      title: "Built-In Team Chat",
      description: "Integrated messaging system with channels, direct messages, and file sharing to keep all communication in one place.",
      image: "/Built-In Team Chat.jpeg",
      gradient: "from-brand-blue/10 to-brand-purple/10"
    },
    {
      title: "Task Assignment",
      description: "Smart task distribution with automated workload balancing, deadline tracking, and priority management.",
      image: "/Task Assignmentt.jpeg",
      gradient: "from-brand-purple/10 to-brand-blue/10"
    },
    {
      title: "Real-Time Scheduling",
      description: "Dynamic calendar integration with intelligent meeting scheduling, availability tracking, and timezone management.",
      image: "/Real-Time Scheduling.jpeg",
      gradient: "from-brand-blue/10 to-brand-purple/10"
    },
    {
      title: "Progress Tracking",
      description: "Comprehensive project monitoring with visual dashboards, milestone tracking, and automated progress reports.",
      image: "/Progress tracking.jpeg",
      gradient: "from-brand-purple/10 to-brand-blue/10"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            Everything Your Team Needs to Work Smarter
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4">
            Powerful features designed to streamline collaboration and boost productivity across your entire organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ minHeight: '200px', padding: '20px' }}
            >
              <div className="h-full flex flex-col">
                {/* Image Area */}
                <div className="w-full h-28 sm:h-32 mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MidSectionGrid;