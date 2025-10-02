import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const keywords = [
    "Development",
    "Branding",
    "Content Creation",
    "Optimization",
    "Strategy",
    "Innovation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/10">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 100}px`,
                  animation: `fadeIn ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-white">Design. </span>
              <span className="text-primary">Story. </span>
              <span className="text-white">Strategy.</span>
              <br />
              <span className="text-gradient glow-green">All Lynked.</span>
            </h1>

            <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl font-medium">
              {keywords.map((keyword, index) => (
                <span
                  key={keyword}
                  className={`transition-all duration-500 ${
                    index === currentKeyword
                      ? "text-primary scale-110 opacity-100"
                      : "text-muted-foreground opacity-40 scale-90"
                  }`}
                >
                  {keyword}
                  {index < keywords.length - 1 && (
                    <span className="mx-2 text-primary">•</span>
                  )}
                </span>
              ))}
            </div>

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] text-lg px-8 py-6 mt-8"
              >
                Lynk Up With Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Infinite Keyword Slider */}
      <section className="py-20 border-y border-white/10 overflow-hidden bg-black/50">
        <div className="flex space-x-12 animate-slide-infinite">
          {[...keywords, ...keywords].map((keyword, index) => (
            <div
              key={index}
              className="flex items-center space-x-12 whitespace-nowrap"
            >
              <span className="text-4xl font-bold text-white/20">{keyword}</span>
              <span className="text-primary">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-slide-up hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Discover</h3>
              <p className="text-muted-foreground">
                We dive deep into your brand story and identify opportunities for growth.
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-up hover-lift" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Design</h3>
              <p className="text-muted-foreground">
                Creating stunning visuals and strategies that make your brand stand out.
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-up hover-lift" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Deliver</h3>
              <p className="text-muted-foreground">
                Executing flawlessly and measuring results that drive real business impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
