import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

// Case study data
const caseStudies = [
  {
    id: "nurthr-digital-transformation",
    title: "Digital Audit & Transformation",
    client: "NurtrHR",
    category: "Digital Strategy & Web Development",
    overview: "When NurtrHR approached Lynkz, their digital presence was scattered — outdated website, inconsistent brand tone, and weak engagement on social media.",
    challenge: "NurtrHR needed to establish a strong, professional online presence that would effectively communicate their HR solutions to both enterprise clients and job seekers. Their existing digital assets were disjointed, with inconsistent branding and messaging across platforms.",
    solution: `We implemented a comprehensive digital transformation strategy that included:
    • Complete brand identity redesign
    • Development of two responsive websites (main corporate site and career portal)
    • Content strategy aligned with target audience needs
    • SEO optimization for better visibility
    • Social media presence revamp`,
    results: [
      "100% brand consistency across all digital platforms",
      "2 modern, responsive websites launched within 45 days",
      "3x increase in user engagement within the first month",
      "40% improvement in organic search traffic",
      "Streamlined application process for job seekers"
    ],
    testimonial: {
      content: "Lynkz handled our complete branding and website design — and I couldn't be happier! Their responses are super quick, and both websites they created look absolutely professional.",
      author: "Archana",
      role: "CEO, NurtrHR"
    },
    images: [
      "/Case Studies/nurtrhr.png",
      "/Case Studies/nurtrhr_cs2.png",
      "/Case Studies/nurtrhr_cs.png"
    ],
    nextCase: "fab-global-hr",
    nextTitle: "Social Media Growth Engine",
    nextClient: "Fab Global HR"
  },
  {
    id: "fab-global-hr",
    title: "Social Media Growth Engine",
    client: "Fab Global HR",
    category: "Social Media Marketing",
    overview: "Fab Global HR wanted to establish themselves as thought leaders in the competitive HR consultancy market but struggled with low visibility and inconsistent posting.",
    challenge: "The client needed to increase their brand awareness and establish credibility in the HR industry through social media, but lacked a consistent content strategy and brand voice.",
    solution: `We developed and executed a comprehensive social media strategy that included:
    • Content calendar focused on HR trends and insights
    • Video content strategy for higher engagement
    • Data-driven approach to content optimization
    • Consistent posting schedule
    • Engagement and community building`,
    results: [
      "100,000+ organic reach within 30 days",
      "45% increase in engagement rate",
      "Established as HR thought leader in the region",
      "Consistent brand voice across all platforms",
      "Higher quality lead generation"
    ],
    testimonial: {
      content: "Lynkz manages our social media brilliantly! We hit over 100K reach within just one month — outstanding content and strategy.",
      author: "Musavir",
      role: "CEO, Fab Global HR"
    },
    images: [
      "/Case Studies/fab.png",
      "/Case Studies/fab_cs2.png",
      "/Case Studies/fab_cs3.png"
    ],
    nextCase: "data-tutorial",
    nextTitle: "Analytics Meets Aesthetics",
    nextClient: "Data Tutorial"
  },
  {
    id: "data-tutorial",
    title: "Analytics Meets Aesthetics",
    client: "Data Tutorial",
    category: "Web Development & Analytics",
    overview: "Data Tutorial needed a professional platform to showcase their analytics tutorials with interactive dashboards and real-time data visualization.",
    challenge: "The client required a website that could seamlessly integrate complex data visualizations while maintaining fast load times and excellent user experience across all devices.",
    solution: `Our solution included:
    • Custom website with embedded Power BI and Tableau dashboards
    • Responsive design optimized for all devices
    • Performance optimization for fast loading
    • Intuitive navigation for technical content
    • SEO optimization for technical keywords`,
    results: [
      "60% higher average session duration",
      "Seamless integration of analytics dashboards",
      "Professional design that reflects data expertise",
      "Improved user engagement metrics",
      "Positive feedback from technical users"
    ],
    testimonial: {
      content: "Lynkz Agency delivered a stunning website with seamless Power BI and Tableau integrations. The design and functionality exceeded my expectations — truly impressive work!",
      author: "Swapnajeet",
      role: "Founder, Data Tutorial"
    },
    images: [
      "/Case Studies/dt_cs.png",
      "/Case Studies/dt_cs2.png",
      "/Case Studies/dt_cs3.png"
    ],
    nextCase: "savees-group-uk",
    nextTitle: "Brand to Business Impact",
    nextClient: "Savees Group UK"
  }
];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(study => study.id === id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!study) {
    return (
      <div className="min-h-screen pt-32 bg-black text-white text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">The requested case study could not be found.</p>
        <Link to="/case-studies">
          <Button variant="outline" className="group">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Case Studies
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
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
          <div className="max-w-4xl pt-20">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-primary hover:text-white mb-6 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary text-sm font-medium mb-4">{study.category}</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {study.overview}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground">{study.challenge}</p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground mb-8">{study.solution}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {study.images.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-white/10">
                    <img 
                      src={img} 
                      alt={`${study.title} - Example ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold mb-6">The Results</h2>
              <ul className="space-y-4">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Project Details */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">{study.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Services</p>
                    <p className="font-medium">{study.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Results</p>
                    <p className="font-medium">See above for detailed results</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-xl p-6">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground italic mb-4">"{study.testimonial.content}"</p>
                <div>
                  <p className="font-medium">{study.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Case Study CTA */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <span className="text-sm text-muted-foreground">Next Case Study</span>
              <h3 className="text-2xl font-bold">{study.nextTitle}</h3>
              <p className="text-muted-foreground">{study.nextClient}</p>
            </div>
            <Link to={`/case-studies/${study.nextCase}`} className="mt-6 md:mt-0">
              <Button>
                View Next Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
