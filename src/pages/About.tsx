import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    { 
      year: "2023", 
      title: "Vision Ignited", 
      description: "Four friends started dreaming of building a company that combines creativity, technology, and impact." 
    },
    { 
      year: "2023", 
      title: "Laying the Groundwork", 
      description: "Spent time learning, experimenting, and helping a few clients while preparing to launch something bigger." 
    },
    { 
      year: "2025", 
      title: "Lynkz Officially Launched", 
      description: "Transformed our long-standing passion into reality by officially launching Lynkz—a creative tech agency." 
    },
    { 
      year: "2025", 
      title: "First Clients & Real Impact", 
      description: "Completed projects for 5+ clients across education, HR, retail, and marketing sectors, building strong case studies." 
    },
    { 
      year: "2025", 
      title: "Expanding the Vision", 
      description: "Started developing in-house products like TutorLink while scaling up our services and outreach." 
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Animated Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-black">
          {/* Network Grid Effect */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-glow"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span>Behind </span>
              <span className="text-gradient glow-green">Lynkz</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of creative minds, strategists, and tech enthusiasts on a mission to help brands tell their stories in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Behind Lynkz Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Behind <span className="text-gradient glow-green">Lynkz</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Lynkz is the brainchild of four friends who came together with a shared dream—to build a creative tech agency that blends storytelling, design, and engineering into solutions that matter. We're not just developers or marketers—we're builders, hustlers, designers, and strategists who love solving real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our strength lies in our diversity—one part code, one part content, one part strategy, one part hustle. From web development to digital campaigns, branding to analytics, we create work that speaks with clarity and performs with purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What makes Lynkz different isn't just our skills—it's the way we think. We're small, fast, and deeply committed to every brand we work with. We treat every project like it's our own startup, blending creativity with execution, and always staying hungry to learn, adapt, and deliver.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <img 
                src="/about.jpg" 
                alt="The Lynkz Team" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm">The Lynkz Founders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary/5 to-black/30 p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  At Lynkz Agency, our mission is to bridge creativity with strategy — helping brands grow through powerful storytelling, data-driven marketing, and digital innovation.
                </p>
                <p className="text-muted-foreground">
                  We empower businesses to build meaningful connections, amplify their voice online, and turn digital presence into measurable growth.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-primary/5 to-black/30 p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  To become a global creative hub where brands, data, and design converge — redefining how businesses connect, communicate, and convert in the digital era.
                </p>
                <p className="text-muted-foreground">
                  Our vision is to make every brand unforgettable through intelligent marketing, purposeful design, and technology that inspires action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-t from-black to-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4 animate-scale-in hover-lift">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white">Customer-Centric</h3>
              <p className="text-muted-foreground">
                We put our clients at the heart of everything we do, ensuring their success is our top priority.
              </p>
            </div>

            <div className="text-center space-y-4 animate-scale-in hover-lift" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <Rocket className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creativity and forward-thinking to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center space-y-4 animate-scale-in hover-lift" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <Target className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white">Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to delivering exceptional quality in every project we undertake.
              </p>
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/10 to-black/80">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Let's create something amazing together. Whether you're looking to build a new website, revamp your brand, or grow your online presence, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              >
                Get Started
              </a>
              <a 
                href="/portfolio" 
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
