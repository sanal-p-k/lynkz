import { useState } from "react";
import { 
  Smartphone, 
  Palette, 
  Video, 
  Code, 
  Database, 
  Sparkles 
} from "lucide-react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Smartphone,
      title: "Social Media",
      description: "Strategic social media management that builds communities and drives engagement.",
      features: ["Content Strategy", "Community Management", "Analytics & Insights", "Paid Advertising"],
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Create a memorable brand identity that resonates with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Positioning"],
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content that tells your story and captivates viewers.",
      features: ["Commercial Production", "Animated Videos", "Post-Production", "Motion Graphics"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences.",
      features: ["Custom Websites", "E-commerce", "Web Apps", "SEO Optimization"],
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Transform your data into actionable insights that drive business growth.",
      features: ["Data Analytics", "Business Intelligence", "Reporting", "Data Visualization"],
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description: "Leverage cutting-edge AI to automate processes and enhance efficiency.",
      features: ["AI Integration", "Workflow Automation", "Chatbots", "Predictive Analytics"],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in">
            <span className="text-white">Solutions We </span>
            <span className="text-gradient glow-green">Lynk</span>
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group perspective-1000"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative h-full bg-card border border-white/10 rounded-xl p-8 transition-all duration-500 hover-lift ${
                    hoveredCard === index ? 'shadow-[0_0_40px_rgba(34,197,94,0.3)]' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredCard === index ? 'rotateY(0deg)' : '',
                  }}
                >
                  {/* Front of Card */}
                  <div className={`transition-opacity duration-300 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border-2 border-primary">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  {/* Back of Card (appears on hover) */}
                  <div className={`absolute inset-0 p-8 flex flex-col justify-center transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <h4 className="text-xl font-bold text-primary mb-4">What We Offer:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help your business grow and thrive in the digital landscape.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-black font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
