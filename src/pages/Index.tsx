
import { useEffect } from "react";
import { Rocket, ChartLine, Users, ExternalLink, Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-10");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary-dark/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-primary">BLOWIE</a>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                <Menu size={24} />
              </button>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-secondary-dark md:bg-transparent p-4 md:p-0 gap-4 md:gap-8 border-b md:border-none border-white/10`}>
              <a href="#roadmap" className="text-white hover:text-primary transition-colors">Roadmap</a>
              <a href="#community" className="text-white hover:text-primary transition-colors">Community</a>
              <button className="button-primary md:ml-4">Buy Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary-dark z-0" />
        <div className="container mx-auto text-center relative z-10 mt-16">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary animate-float">
            <img 
              src="/lovable-uploads/9e81c6c6-c074-4032-a0b4-6432224cadf6.png" 
              alt="BLOWIE Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-float">
            BLOWIE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light animate-float" style={{ animationDelay: "0.2s" }}>
            Every man needs a blowie
          </p>
          <button className="button-primary animate-float" style={{ animationDelay: "0.4s" }}>
            Buy $BLOWIE Now
          </button>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 bg-gradient-to-b from-secondary-dark to-primary/10">
        <div className="container mx-auto">
          <h2 className="section-title animate-on-scroll">Roadmap</h2>
          <div className="space-y-8">
            <div className="glass-card p-6 animate-on-scroll">
              <div className="flex items-center gap-4">
                <Rocket className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Phase 1: Launch</h3>
              </div>
              <p className="mt-4 text-gray-300">Website launch, community building, and initial marketing push</p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <div className="flex items-center gap-4">
                <ChartLine className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Phase 2: Growth</h3>
              </div>
              <p className="mt-4 text-gray-300">Exchange listings, partnerships, and expanded marketing campaigns</p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <div className="flex items-center gap-4">
                <Users className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Phase 3: Expansion</h3>
              </div>
              <p className="mt-4 text-gray-300">NFT collection launch, governance implementation, and ecosystem development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-title animate-on-scroll">Join Our Community</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="https://t.me/BLOWIECTO"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:bg-white/10 transition-all animate-on-scroll w-full md:w-auto"
            >
              <img src="/lovable-uploads/9e81c6c6-c074-4032-a0b4-6432224cadf6.png" alt="Telegram" className="w-8 h-8" />
              <span>Join Telegram</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="https://x.com/BLOWIECTO"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:bg-white/10 transition-all animate-on-scroll w-full md:w-auto"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Follow on X</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-secondary-dark to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-on-scroll">
            Ready to Join the Revolution?
          </h2>
          <button className="button-primary animate-on-scroll">
            Buy $BLOWIE Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
