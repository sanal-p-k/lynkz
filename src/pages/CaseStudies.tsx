import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Transformation",
      client: "Zara's Fashion",
      category: "Web Development",
      description: "Revolutionizing online shopping experience with a high-performance e-commerce platform.",
      image: "/port1.png",
      link: "/case-studies/zaras-fashion"
    },
    {
      id: 2,
      title: "Brand Identity Redesign",
      client: "PK Door",
      category: "Branding",
      description: "Crafting a bold new identity that reflects innovation and reliability.",
      image: "/port6.png",
      link: "/case-studies/pk-door"
    },
    {
      id: 3,
      title: "Mobile App Development",
      client: "WTD Logistics",
      category: "App Development",
      description: "Streamlining logistics operations with a custom mobile solution.",
      image: "/port8.jpg",
      link: "/case-studies/wtd-logistics"
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary/80 text-sm font-medium mb-4 tracking-widest">OUR WORK</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Case <span className="text-gradient glow-green">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses grow and transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-primary text-sm font-medium mb-2">{study.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Link 
                  to={study.link}
                  className="inline-flex items-center text-primary font-medium group-hover:text-white transition-colors duration-300"
                >
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white text-xl font-bold">{study.client}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
