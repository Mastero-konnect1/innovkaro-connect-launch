const MidSectionGrid = () => {
  const features = [
    {
      title: "Built-In Team Chat",
      description: "Integrated messaging system with channels, direct messages, and file sharing to keep all communication in one place.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      gradient: "from-brand-blue/10 to-brand-purple/10"
    },
    {
      title: "Task Assignment",
      description: "Smart task distribution with automated workload balancing, deadline tracking, and priority management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      gradient: "from-brand-purple/10 to-brand-blue/10"
    },
    {
      title: "Real-Time Scheduling",
      description: "Dynamic calendar integration with intelligent meeting scheduling, availability tracking, and timezone management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      gradient: "from-brand-blue/10 to-brand-purple/10"
    },
    {
      title: "Progress Tracking",
      description: "Comprehensive project monitoring with visual dashboards, milestone tracking, and automated progress reports.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      gradient: "from-brand-purple/10 to-brand-blue/10"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Everything Your Team Needs to Work Smarter
          </h2>
          <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to streamline collaboration and boost productivity across your entire organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              style={{ minHeight: '200px' }}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Image Area */}
                <div className="w-full h-24 mb-4 rounded-lg overflow-hidden bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-dark mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-medium leading-relaxed">
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