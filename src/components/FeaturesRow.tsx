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
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 max-w-sm`}
              style={{ minHeight: '140px' }}
            >
              <div className="text-white space-y-3">
                <h3 className="text-xl font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesRow;