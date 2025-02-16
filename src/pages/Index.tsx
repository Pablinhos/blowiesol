
import { useEffect } from "react";
import { Rocket, ChartLineUp, Users, ExternalLink } from "lucide-react";

const Index = () => {
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
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary-dark z-0" />
        <div className="container mx-auto text-center relative z-10">
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

      {/* Tokenomics Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-title animate-on-scroll">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">Total Supply</h3>
              <p className="text-3xl font-bold text-primary">69,420,000,000</p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">Initial Burn</h3>
              <p className="text-3xl font-bold text-primary">42%</p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">Reward Rate</h3>
              <p className="text-3xl font-bold text-primary">4.20%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary-dark to-primary/10">
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
                <ChartLineUp className="text-primary" size={24} />
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
      <section className="py-20 px-6">
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
