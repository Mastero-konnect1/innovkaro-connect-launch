import { Button } from '@/components/ui/button';
import NetworkVisualization from './NetworkVisualization';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center network-bg pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-text-dark">
                We're{' '}
                <span className="brand-gradient-text">
                  Launching Soon
                </span>{' '}
                🚀
              </h1>
              
              <p className="text-xl text-text-light leading-relaxed max-w-lg">
                InnovKaro is your AI-powered platform to connect mentors and mentees. 
                Stay tuned to be part of the journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gradient h-12 px-8 text-base font-medium">
                Notify Me
              </Button>
              
              <Button 
                variant="outline"
                className="h-12 px-8 text-base font-medium border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or Features */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold brand-gradient-text">AI-Powered</div>
                <div className="text-sm text-text-muted">Matching</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold brand-gradient-text">Smart</div>
                <div className="text-sm text-text-muted">Connections</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold brand-gradient-text">Growth</div>
                <div className="text-sm text-text-muted">Focused</div>
              </div>
            </div>
          </div>

          {/* Right Column - Network Visualization */}
          <div className="relative">
            <NetworkVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;