import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center network-bg pt-16 sm:pt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black px-2">
              We're{' '}
              <span className="brand-gradient-text">
                Launching Soon
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-2xl mx-auto px-4">
            <span className="text-brand-blue font-bold">
                Feeling stuck?  <br />
              </span>
            Connect directly with industry specialists, gain real insights, and make the right moves with InnovKaro by your side. Your AI-powered mentorship journey starts soon.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <link rel="stylesheet" href="https://forms.gle/5WYaAz3cGb3k5VEc8" />
            <a href="https://forms.gle/5WYaAz3cGb3k5VEc8" target="_blank" className="w-full sm:w-auto">
            <Button className="btn-gradient h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-medium w-full sm:w-auto">
              Notify me
            </Button>
            </a>
            {/* <Button 
              variant="outline"
              className="h-12 px-8 text-base font-medium border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Learn More
            </Button> */}
          </div>

          {/* Stats or Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold brand-gradient-text">AI-Powered</div>
              <div className="text-xs sm:text-sm text-black">Matching</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold brand-gradient-text">Smart</div>
              <div className="text-xs sm:text-sm text-black">Connections</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold brand-gradient-text">Growth</div>
              <div className="text-xs sm:text-sm text-black">Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;