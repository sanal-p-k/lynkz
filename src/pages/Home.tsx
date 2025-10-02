import { useEffect, useState, useRef } from "react";
import { ArrowRight, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/animations.module.css";

// Portfolio item type
type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
};

// Testimonial type
type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
};

const Home = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const keywords = [
    "Development",
    "Branding",
    "Content Creation",
    "Optimization",
    "Strategy",
    "Innovation",
  ];

  // Portfolio items
  const portfolioItems: PortfolioItem[] = [
    { 
      id: 1, 
      title: 'Zaras Fashion E-commerce', 
      category: 'E-commerce Development', 
      image: '/port1.png', 
      link: '/portfolio/zaras-fashion' 
    },
    { 
      id: 2, 
      title: 'DataCorrel Analytics Dashboard', 
      category: 'Web Application', 
      image: '/port2.png', 
      link: '/portfolio/datacorrel-analytics' 
    },
    { 
      id: 3, 
      title: 'FAB Mobile App', 
      category: 'Mobile App UI/UX', 
      image: '/port3.png', 
      link: '/portfolio/fab-mobile-app' 
    },
    { 
      id: 4, 
      title: 'Savees Grocery Campaign', 
      category: 'Digital Marketing', 
      image: '/port4.png', 
      link: '/portfolio/savees-campaign' 
    },
    { 
      id: 5, 
      title: 'Nurtr HR Solutions', 
      category: 'Web Development', 
      image: '/port5.png', 
      link: '/portfolio/nurtr-hr' 
    },
    { 
      id: 6, 
      title: 'PK Door Branding', 
      category: 'Brand Identity', 
      image: '/port6.png', 
      link: '/portfolio/pk-door' 
    },
    { 
      id: 7, 
      title: 'Soorya Healthcare', 
      category: 'Website Redesign', 
      image: '/port7.png', 
      link: '/portfolio/soorya-healthcare' 
    },
    { 
      id: 8, 
      title: 'WTD Logistics', 
      category: 'Mobile App Development', 
      image: '/port8.jpg', 
      link: '/portfolio/wtd-logistics' 
    },
    { 
      id: 9, 
      title: 'Lynkz Agency Website', 
      category: 'Web Development', 
      image: '/port9.png', 
      link: '/portfolio/lynkz-website' 
    }
  ];

  // Case studies
  const caseStudies = [
    {
      id: 1,
      title: 'Zaras Fashion E-commerce Platform',
      description: 'Developed a custom e-commerce solution that increased online sales by 180% in the first 6 months with a mobile-first approach and seamless checkout experience.',
      image: '/port1.png',
      results: ['180%', 'Sales Increase', '2.8s', 'Avg. Page Load', '45%', 'Mobile Traffic']
    },
    {
      id: 2,
      title: 'DataCorrel Analytics Dashboard',
      description: 'Created an interactive analytics dashboard that provided real-time business insights, reducing reporting time by 65% and improving decision-making efficiency.',
      image: '/port2.png',
      results: ['65%', 'Faster Reporting', '90%', 'User Adoption', '4.9/5', 'User Rating']
    },
    {
      id: 3,
      title: 'Savees Grocery Digital Campaign',
      description: 'Executed a comprehensive digital marketing campaign that boosted online orders by 220% and increased social media engagement by 350%.',
      image: '/port4.png',
      results: ['220%', 'More Orders', '350%', 'Engagement', '5x', 'ROI']
    }
  ];

  // Client logos with portfolio image placeholders
  const clientLogos = [
    { id: 1, name: 'PM Zara', logo: '/Clients/zaras.png' },
    { id: 2, name: 'DataCorrel', logo: '/Clients/datacorrel.png' },
    { id: 3, name: 'FAB Mobile', logo: '/Clients/fab.png' },
    { id: 4, name: 'Nurtr HR', logo: '/Clients/nurtrhr.png' },
    { id: 5, name: 'PK Door', logo: '/Clients/pkdoorbg.png' },
    { id: 6, name: 'Savees Group', logo: '/Clients/savees.png' },
    { id: 7, name: 'Soorya Healthcare', logo: '/Clients/soorya.png' },
    { id: 8, name: 'What The Data', logo: '/Clients/wtd.png' }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul Menon',
      role: 'CEO',
      company: 'Zaras Fashion',
      content: 'Lynkz transformed our e-commerce platform completely. The new design and improved user flow resulted in a 180% increase in sales within six months. Their team understood our vision and delivered beyond our expectations.',
      rating: 5,
      image: '/port1.png'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'Savees Grocery',
      content: 'The digital campaign by Lynkz was a game-changer for us. Their strategic approach and creative execution helped us achieve a 220% increase in online orders. Their team is responsive, professional, and truly cares about their clients\' success.',
      rating: 5,
      image: '/port4.png'
    },
    {
      id: 3,
      name: 'Vikram Nair',
      role: 'CTO',
      company: 'DataCorrel',
      content: 'The analytics dashboard developed by Lynkz has revolutionized how we process and visualize data. Their technical expertise and attention to detail are commendable. The solution has saved us countless hours in reporting.',
      rating: 5,
      image: '/port2.png'
    },
    {
      id: 4,
      name: 'Anjali Krishnan',
      role: 'Founder',
      company: 'Nurtr HR',
      content: 'Working with Lynkz has been a fantastic experience. They delivered our HR platform on time and within budget. Their team is knowledgeable, professional, and went above and beyond to ensure our satisfaction.',
      rating: 5,
      image: '/port5.png'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  // Animation variants
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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

      {/* Latest Works */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Latest Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our recent projects and see how we've helped businesses like yours succeed.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                variants={item}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - ${item.category} project by Lynkz`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width={400}
                    height={300}
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-primary font-medium mb-1">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <Link 
                    to={item.link}
                    className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    View Project <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Case Studies
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Success Stories
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Discover how we've helped businesses achieve remarkable results.
            </motion.p>
          </motion.div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentCaseStudy}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <motion.h3 
                        className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {caseStudies[currentCaseStudy].title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-muted-foreground text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {caseStudies[currentCaseStudy].description}
                      </motion.p>
                      
                      <motion.div 
                        className="grid grid-cols-3 gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, staggerChildren: 0.1 }}
                      >
                        {caseStudies[currentCaseStudy].results.map((result, i) => (
                          <motion.div 
                            key={i} 
                            className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-colors"
                            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <div className="text-2xl font-bold text-primary">{result}</div>
                            {i % 2 === 0 && (
                              <div className="text-sm text-muted-foreground mt-1">
                                {caseStudies[currentCaseStudy].results[i+1]}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <Button 
                          className="mt-6 group"
                          onClick={() => window.location.href = `/case-studies/${caseStudies[currentCaseStudy].id}`}
                        >
                          Read Full Case Study
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 bg-gradient-to-br from-primary/5 to-primary/10"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="text-xl font-bold text-white">{caseStudies[currentCaseStudy].title}</h4>
                          <p className="text-primary text-sm">View Project</p>
                        </div>
                      </div>
                      <img 
                        src={caseStudies[currentCaseStudy].image} 
                        alt={`${caseStudies[currentCaseStudy].title} case study`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={600}
                        height={450}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-12 space-x-2">
                {caseStudies.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentCaseStudy(i)}
                    className={`w-3 h-3 rounded-full transition-all ${i === currentCaseStudy ? 'bg-primary w-8' : 'bg-white/20'}`}
                    aria-label={`Go to case study ${i + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex justify-between w-full px-4">
                <motion.button
                  onClick={() => setCurrentCaseStudy(prev => (prev - 1 + caseStudies.length) % caseStudies.length)}
                  className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  onClick={() => setCurrentCaseStudy(prev => (prev + 1) % caseStudies.length)}
                  className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next case study"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:linear-gradient(0deg,transparent,black_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Our Clients
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Trusted By Industry Leaders
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We're proud to partner with innovative brands that trust our expertise and deliver exceptional results.
            </motion.p>
          </motion.div>
          
          <div className="relative">
            {/* Gradient Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Infinite Scrolling Logos */}
            <div className={`flex items-center py-8 ${styles.animateScroll}`}>
              {/* First set of logos */}
              <div className="flex items-center space-x-8 md:space-x-16 pr-8 md:pr-16">
                {clientLogos.map((logo, i) => (
                  <motion.div 
                    key={`first-${i}`} 
                    className="flex-shrink-0 group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <div className="h-24 w-40 md:h-28 md:w-48 flex items-center justify-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <img 
                        src={logo.logo} 
                        alt={logo.name} 
                        className="max-h-12 md:max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                        width={160}
                        height={80}
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          (e.target as HTMLImageElement).src = `https://via.placeholder.com/160x80?text=${encodeURIComponent(logo.name)}`;
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Duplicate set for infinite scroll effect */}
              <div className="flex items-center space-x-8 md:space-x-16">
                {clientLogos.map((logo, i) => (
                  <motion.div 
                    key={`second-${i}`} 
                    className="flex-shrink-0 group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <div className="h-24 w-40 md:h-28 md:w-48 flex items-center justify-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <img 
                        src={logo.logo} 
                        alt={logo.name}
                        className="max-h-12 md:max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                        width={160}
                        height={80}
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          (e.target as HTMLImageElement).src = `https://via.placeholder.com/160x80?text=${encodeURIComponent(logo.name)}`;
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.p 
              className="text-sm text-muted-foreground max-w-2xl mx-auto mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              And many more growing businesses that trust us with their digital presence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-primary/5">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Testimonials
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hear from businesses that have transformed with our solutions.
            </motion.p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                currentTestimonial === index && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <motion.div 
                      className="relative mb-12 p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <Quote className="w-12 h-12 mx-auto text-primary/20 absolute -top-6 left-1/2 transform -translate-x-1/2" />
                      
                      <motion.p 
                        className="text-xl md:text-2xl font-medium text-white/90 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        "{testimonial.content}"
                      </motion.p>
                      
                      <motion.div 
                        className="flex items-center justify-center space-x-1 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                          >
                            <Star 
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center justify-center space-x-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <motion.div 
                          className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary relative group"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width={56}
                            height={56}
                          />
                        </motion.div>
                        <div className="text-left">
                          <h4 className="font-bold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </motion.div>
                      
                      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {testimonials.map((_, i) => (
                          <motion.button
                            key={i}
                            onClick={() => setCurrentTestimonial(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? 'bg-primary w-6' : 'bg-white/20'}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                    
                    <div className="flex justify-center mt-8 space-x-4">
                      <motion.button
                        onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                        className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-muted-foreground mb-6">Ready to share your success story with us?</p>
              <Link to="/contact">
                <Button className="group">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 100}px`,
                  animation: `pulse ${Math.random() * 5 + 5}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Get Started
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Let's create something amazing together. Schedule a free consultation with our team today and take the first step towards your digital success.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link to="/contact" className="group">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              
              <Link to="/portfolio" className="group">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg group-hover:bg-white/5 group-hover:border-white/20 transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-8 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p>No commitment. No pressure. Just results.</p>
            </motion.div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white/10 overflow-hidden"
                      style={{ zIndex: 3 - i }}
                    >
                      <img 
                        src={`/port${i}.png`} 
                        alt={`Client ${i}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-left">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Trusted by 100+ businesses</p>
                </div>
              </div>
              
              <div className="h-10 w-px bg-white/10 hidden md:block"></div>
              
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Fast Turnaround</p>
                  <p className="text-xs text-muted-foreground">Quick project kickoff</p>
                </div>
              </div>
              
              <div className="h-10 w-px bg-white/10 hidden md:block"></div>
              
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Proven Results</p>
                  <p className="text-xs text-muted-foreground">Guaranteed satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
