import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Palette,
  Code,
  Search,
  BarChart2,
  MessageSquare,
  FileText,
  Smartphone,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Craft a powerful brand identity that stands out and resonates with your audience.",
      details: [
        "Logo & Visual Identity Design",
        "Brand Guidelines & Style Guides",
        "Brand Strategy & Positioning",
        "Brand Voice & Messaging"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "High-performance websites built for speed, security, and seamless user experiences.",
      details: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Integration"
      ]
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Data-driven strategies to improve your search rankings and organic traffic.",
      details: [
        "Keyword Research & Strategy",
        "On-Page & Technical SEO",
        "Content Optimization",
        "Link Building & Outreach"
      ]
    },
    {
      icon: BarChart2,
      title: "Digital Marketing",
      description: "Targeted campaigns that drive engagement, leads, and conversions.",
      details: [
        "PPC & Paid Advertising",
        "Email Marketing",
        "Conversion Rate Optimization",
        "Marketing Automation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Turn your data into actionable insights for smarter business decisions.",
      details: [
        "Custom Dashboard Development",
        "KPI Tracking & Reporting",
        "User Behavior Analysis",
        "Predictive Analytics"
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Strategic social presence that builds communities and drives engagement.",
      details: [
        "Content Strategy & Calendar",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Partnerships"
      ]
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Compelling content that tells your story and connects with your audience.",
      details: [
        "Blog Writing & Strategy",
        "Video Production",
        "Infographics & Visual Content",
        "Case Studies & Whitepapers"
      ]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Innovative mobile solutions that solve real business challenges.",
      details: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven approaches to scale your business effectively.",
      details: [
        "Market Research & Analysis",
        "Customer Acquisition Strategy",
        "Revenue Optimization",
        "Performance Metrics & KPIs"
      ]
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our <span className="text-gradient glow-green">Expertise</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Front of Card */}
              <div className="relative z-10 h-full bg-gradient-to-b from-card/80 to-card/90 backdrop-blur-sm border border-white/5 p-8 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
                  }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
                </div>
                
                {/* Floating Circle Accent */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-black/80 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
