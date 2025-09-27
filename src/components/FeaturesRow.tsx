const FeaturesRow = () => {
  const features = [
    {
      title: "Real-Time Collaboration",
      description: "Work together seamlessly with live editing, instant messaging, and shared workspaces that keep everyone aligned.",
      gradient: "from-brand-blue to-brand-purple"
    },
    {
      title: "Task & Project Tracking", 
      description: "Intelligent project management with automated progress tracking, milestone alerts, and performance insights.",
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: "Performance Insights",
      description: "AI-powered analytics provide actionable insights to optimize team productivity and project outcomes.",
      gradient: "from-brand-blue to-brand-purple"
    }
    ,
    {
      title: "AI-powered Mentorship",
      description: "The mentorship provide actionable insights to optimize team productivity and project outcomes.",
      gradient: "from-brand-blue to-brand-purple"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-violet-500/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex-1 max-w-sm"
              style={{ 
                minHeight: '180px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold leading-tight text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </div>
              {/* Glassmorphism overlay effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesRow;