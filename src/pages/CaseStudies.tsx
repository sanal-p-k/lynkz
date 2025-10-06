import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Digital Audit & Transformation",
      client: "NurtrHR",
      category: "Digital Strategy & Web Development",
      description: "Complete digital transformation including brand identity, website redesign, and content strategy that increased engagement by 3x.",
      image: "/Case Studies/nurtrhr.png",
      link: "/case-studies/nurthr-digital-transformation"
    },
    {
      id: 2,
      title: "Social Media Growth Engine",
      client: "Fab Global HR",
      category: "Social Media Marketing",
      description: "Data-backed social strategy that achieved 100K+ organic reach and 45% engagement rate within one month.",
      image: "/Case Studies/fab_cs.png",
      link: "/case-studies/fab-global-hr"
    },
    {
      id: 3,
      title: "Analytics Meets Aesthetics",
      client: "Data Tutorial",
      category: "Web Development & Analytics",
      description: "Built a responsive platform with embedded Power BI and Tableau dashboards, increasing session duration by 60%.",
      image: "/Case Studies/dt_cs.png",
      link: "/case-studies/data-tutorial"
    },

  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Case <span className="text-gradient glow-green">Studies</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform and achieve their goals through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link 
              to={study.link}
              key={study.id}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block text-primary text-sm font-medium mb-2">{study.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{study.description}</p>
                  <div className="flex items-center text-primary font-medium mt-4">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
