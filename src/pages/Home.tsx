import { useEffect, useState, useRef, ReactNode } from "react";
import { ArrowRight, Quote, Star, ChevronLeft, ChevronRight, Instagram, Linkedin, Facebook, TrendingUp, X, Youtube, Palette, BarChart2, Megaphone, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/animations.module.css";
import TestimonialCard from "@/components/TestimonialCard";

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
  [x: string]: ReactNode;
  rating: number;
  id: number;
  name: string;
  company: string;
  content: string;
};

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string, title: string, category: string } | null>(null);

  const stats = [
    { value: "20+", label: "Clients Served" },
    { value: "50+", label: "Projects Completed" },
    { value: "4", label: "Team Members" },
    { value: "99%", label: "Client Satisfaction" },
  ];

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

  // Portfolio items (showing only 6 items on home page)
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'PM ZARA/SDN BHD',
      category: 'E-commerce Development',
      image: '/port15.png',
      link: '/portfolio/zaras-fashion'
    },
    {
      id: 2,
      title: 'DataCorrel',
      category: 'Web Application',
      image: '/port13.png',
      link: '/portfolio/datacorrel-analytics'
    },
    {
      id: 3,
      title: 'FAB Global HR',
      category: 'Social Media Marketing',
      image: '/port9.png',
      link: '/portfolio/fab-mobile-app'
    },
    {
      id: 4,
      title: 'Savees Group UK',
      category: 'Digital Marketing',
      image: '/port17.png',
      link: '/portfolio/savees-campaign'
    },
    {
      id: 5,
      title: 'Nurtr HR',
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
    }
  ];

  // Case studies
  const caseStudies = [
    {
      id: "nurthr-digital-transformation",
      title: 'Digital Audit & Transformation – NurtrHR',
      description: 'When NurtrHR approached Lynkz, their digital presence was scattered — outdated website, inconsistent brand tone, and weak engagement on social media. We conducted a complete digital audit covering brand consistency, SEO performance, content effectiveness, and UI/UX. Based on insights, Lynkz rebuilt the brand identity, redesigned both websites, and created a strong content rhythm.',
      image: '/Case Studies/nurtrhr.png',
      results: ['100%', 'Brand Consistency', '45', 'Days to Launch', '3x', 'Engagement Growth'],
      client: 'NurtrHR',
      category: 'Digital Strategy & Web Development',
      keyResults: [
        '100% brand consistency across all digital platforms',
        '2 modern, responsive websites launched within 45 days',
        '3x increase in user engagement within the first month',
        '40% improvement in organic search traffic',
        'Streamlined application process for job seekers'
      ]
    },
    {
      id: "fab-global-hr",
      title: 'Social Media Growth Engine – Fab Global HR',
      description: 'Fab Global HR wanted to establish themselves as thought leaders in the competitive HR consultancy market but struggled with low visibility and inconsistent posting.',
      image: '/Case Studies/fab_cs.png',
      results: ['100K+', 'Organic Reach', '45%', 'Engagement Rate', '1', 'Month to Results'],
      client: 'Fab Global HR',
      category: 'Social Media Marketing',
      keyResults: [
        '100,000+ organic reach within 30 days',
        '45% increase in engagement rate',
        'Established as HR thought leader in the region',
        'Consistent brand voice across all platforms',
        'Higher quality lead generation'
      ]
    },
    {
      id: "data-tutorial",
      title: 'Analytics Meets Aesthetics – Data Tutorial',
      description: 'Data Tutorial needed a professional platform to showcase analytics tutorials with interactive dashboards and real-time data visualization.',
      image: '/Case Studies/dt_cs.png',
      results: ['60%', 'Higher Session Duration', '100%', 'Dashboard Integration', '4.9/5', 'User Rating'],
      client: 'Data Tutorial',
      category: 'Web Development & Analytics',
      keyResults: [
        '60% higher average session duration',
        'Seamless integration of analytics dashboards',
        'Professional design that reflects data expertise',
        'Improved user engagement metrics',
        'Positive feedback from technical users'
      ]
    }
  ];

  // Client logos with portfolio image placeholders
  const clientLogos = [
    { id: 1, name: 'PM ZARA\'S SDN BHD', logo: '/Clients/pmzara.png' },
    { id: 2, name: 'DataCorrel', logo: '/Clients/datacorrel.svg' },
    { id: 3, name: 'FAB Global HR', logo: '/Clients/fab.png' },
    { id: 4, name: 'Nurtr HR', logo: '/Clients/nurtrhr.png' },
    { id: 5, name: 'PK Door', logo: '/Clients/pkdoorbg.png' },
    { id: 6, name: 'Savees Group', logo: '/Clients/savees.png' },
    { id: 7, name: 'International Soorya Solar', logo: '/Clients/soorya.png' },
    { id: 8, name: 'What The Data', logo: '/Clients/wtd.png' },
    { id: 9, name: 'Data Tutorial', logo: '/Clients/data-tutorial.png' },
    { id: 10, name: 'Galaxy Security', logo: '/Clients/galaxy.png' },
    { id: 11, name: 'LP', logo: '/Clients/lp.png' },
    { id: 12, name: 'MIS Data Automate', logo: '/Clients/mis.svg' },
    { id: 13, name: 'Samsung', logo: '/Clients/samsung.svg' },
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Swapnajeet',
      company: 'Data Tutorial',
      rating: 5,
      content: 'Lynkz Agency delivered a stunning website with seamless Power BI and Tableau integrations. The design and functionality exceeded my expectations — truly impressive work!',
    },
    {
      id: 2,
      name: 'International Soorya Solar',
      company: '',
      rating: 5,
      content: 'It’s been great working with the Lynkz team. They manage our social media with creativity and consistency — I’m really happy with the quality of content they deliver.',
    },
    {
      id: 3,
      name: 'Musavir',
      company: 'Fab Global HR',
      rating: 5,
      content: 'Lynkz and team have been managing our social media brilliantly! We hit over 100K reach within just one month — outstanding content and strategy.',
    },
    {
      id: 4,
      name: 'Archana',
      company: 'NurtrHR',
      rating: 5,
      content: 'Lynkz handled our complete branding and website design — and I couldn’t be happier! Their responses are super quick, and both websites they created look absolutely professional.',
    },
    {
      id: 5,
      name: 'Smarty Mukherjee',
      company: 'DataCorrel',
      rating: 5,
      content: 'Lynkz manages my LinkedIn and other social channels, and I’m genuinely seeing results! Great teamwork, consistency, and attention to detail.',
    },
    {
      id: 6,
      name: 'Hiran',
      company: 'Savees Group UK',
      rating: 5,
      content: 'Lynkz built our website and now handles our social media. Both have turned out excellent — modern, engaging, and perfectly aligned with our brand. Highly recommend them!',
    }
  ];


  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  // Handle keyboard navigation for image viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = portfolioItems.findIndex(item => item.image === selectedImage.src);
        const nextIndex = (currentIndex + 1) % portfolioItems.length;
        const nextItem = portfolioItems[nextIndex];
        setSelectedImage({
          src: nextItem.image,
          title: nextItem.title,
          category: nextItem.category
        });
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = portfolioItems.findIndex(item => item.image === selectedImage.src);
        const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        const prevItem = portfolioItems[prevIndex];
        setSelectedImage({
          src: prevItem.image,
          title: prevItem.title,
          category: prevItem.category
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

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

const scatteredIcons = [
  { icon: Instagram, pos: "top-[15%] left-[10%] md:left-[25%]", size: 30 },
  { icon: Linkedin, pos: "top-[10%] left-[40%] md:left-[55%]", size: 34 },
  { icon: Facebook, pos: "top-[15%] left-[70%] md:left-[85%]", size: 36 },

  { icon: X, pos: "top-[45%] left-[10%] md:left-[25%]", size: 30 },
  { icon: BarChart2, pos: "top-[50%] left-[40%] md:left-[55%]", size: 40 },
  { icon: Youtube, pos: "top-[40%] left-[70%] md:left-[85%]", size: 40 },

  { icon: Palette, pos: "top-[80%] left-[10%] md:left-[25%]", size: 30 },
  { icon: Megaphone, pos: "top-[75%] left-[40%] md:left-[55%]", size: 34 },
  { icon: TrendingUp, pos: "top-[80%] left-[70%] md:left-[85%]", size: 36 },
];


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

            <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-2xl font-medium text-center">
              {keywords.map((keyword, index) => (
                <span
                  key={keyword}
                  className={`transition-all duration-500 ${index === currentKeyword
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

      {/* Stats Section */}
      <section className="py-16 bg-black border-y border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              show: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-gradient glow-green mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<motion.div className="relative h-[500px] w-full">
  {scatteredIcons.map((item, i) => (
    <motion.div
      key={i}
      className={`absolute ${item.pos}`}
      animate={{ y: [0, -10, 0, 10, 0] }}
      transition={{
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <item.icon size={item.size} className="text-primary/50" />
    </motion.div>
  ))}
</motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold">Your Partner in Digital Excellence</h2>
              <p className="text-muted-foreground text-lg">
                Lynkz is a creative digital agency that blends design, storytelling, and strategy to help brands connect with their audiences. We are a team of passionate creators, thinkers, and innovators dedicated to crafting digital experiences that are not only beautiful but also drive results.
              </p>
              <p className="text-muted-foreground text-lg">
                Our mission is to empower businesses by providing them with the tools and expertise needed to thrive in the digital landscape. We believe in collaboration, transparency, and a client-first approach.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group mt-4">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </motion.div>
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
                className="relative overflow-hidden rounded-xl border border-white/10"
              // variants={item}
              >
                <div className="aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => setSelectedImage({
                  src: item.image,
                  title: item.title,
                  category: item.category
                })}>
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category} project by Lynkz`}
                    className="w-full h-full object-cover"
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
                                {caseStudies[currentCaseStudy].results[i + 1]}
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

            {/* Infinite Scrolling Logos */}
            <div className="overflow-hidden">
              <div className={`${styles.animateScroll} flex items-center gap-12 py-8`}>
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % clientLogos.length) * 0.1, duration: 0.5 }}
                  >
                    <div className="h-28 w-48 flex items-center justify-center p-4 bg-black rounded-2xl border-2 border-white/10 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 mx-8">
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className="max-h-14 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                        width={160}
                        height={80}
                        onError={(e) => {
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
                  {[
                    { src: '/Clients/soorya.png', alt: 'Soorya Solar' },
                    { src: '/Clients/fab.png', alt: 'FAB Global HR' },
                    { src: '/Clients/pmzara.png', alt: 'PM Zara' }
                  ].map((img, i) => {
                    // Debug: Log the image path
                    console.log('Loading image:', img.src);
                    return (
                      <div
                        key={img.src}
                        className="w-8 h-8 rounded-full border-2 border-white/10 overflow-hidden bg-white/5 flex items-center justify-center"
                        style={{ zIndex: 3 - i }}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                          width={20}
                          height={20}
                          onError={(e) => {
                            console.error('Failed to load image:', img.src, e);
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="ml-3 text-left">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Trusted by 20+ businesses</p>
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full Screen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <XCircle size={32} />
              </button>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={`${selectedImage.title} - ${selectedImage.category} project by Lynkz`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-4 bg-gray-900/80">
                  <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-primary">{selectedImage.category}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = portfolioItems.findIndex(item => item.image === selectedImage.src);
                  const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
                  const prevItem = portfolioItems[prevIndex];
                  setSelectedImage({
                    src: prevItem.image,
                    title: prevItem.title,
                    category: prevItem.category
                  });
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = portfolioItems.findIndex(item => item.image === selectedImage.src);
                  const nextIndex = (currentIndex + 1) % portfolioItems.length;
                  const nextItem = portfolioItems[nextIndex];
                  setSelectedImage({
                    src: nextItem.image,
                    title: nextItem.title,
                    category: nextItem.category
                  });
                }}
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

