import { useEffect, useState } from "react";
import { Users, Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    { year: "2020", title: "The Beginning", description: "Founded with a vision to transform digital experiences" },
    { year: "2021", title: "Growing Team", description: "Expanded to 15+ talented professionals" },
    { year: "2022", title: "100+ Projects", description: "Delivered excellence for over 100 clients" },
    { year: "2023", title: "Global Reach", description: "Serving clients across 20+ countries" },
    { year: "2024", title: "Innovation Hub", description: "Leading in AI and automation solutions" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className={`text-5xl md:text-7xl font-bold text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-white">Behind </span>
            <span className="text-gradient glow-green">Lynkz</span>
          </h1>
          <p className={`text-xl text-center text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We're a team of creative minds, strategists, and tech enthusiasts on a mission to help brands tell their stories in the digital age.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lynkz Agency was born from a simple belief: every brand has a unique story worth telling. We started in a small studio with big dreams, and today we're proud to be a leading digital agency that helps businesses connect with their audiences in meaningful ways.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach combines creativity with data-driven strategy, ensuring that every project we take on not only looks amazing but delivers real results. We don't just build websites or create content—we build relationships and craft experiences that resonate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-white/10 hover-lift">
                <Users className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-white/10 hover-lift">
                <Target className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-white/10 hover-lift">
                <Lightbulb className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">15</h3>
                <p className="text-muted-foreground">Awards Won</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-white/10 hover-lift">
                <Rocket className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">98%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="animate-slide-up hover-lift" style={{ animationDelay: `${index * 0.2}s` }}>
                    <h3 className="text-3xl font-bold text-primary mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-black shadow-[0_0_20px_rgba(34,197,94,0.5)] animate-pulse-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-t from-black to-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-scale-in hover-lift">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership with our clients.
              </p>
            </div>

            <div className="text-center space-y-4 animate-scale-in hover-lift" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <Target className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white">Excellence</h3>
              <p className="text-muted-foreground">
                Quality is non-negotiable. We strive for perfection in every detail.
              </p>
            </div>

            <div className="text-center space-y-4 animate-scale-in hover-lift" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <Rocket className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of the curve, embracing new technologies and trends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
