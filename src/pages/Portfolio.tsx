import { useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

// Testimonial type
type Testimonial = {
  [x: string]: ReactNode;
  rating: number;
  id: number;
  name: string;
  company: string;
  content: string;
};

const Portfolio = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioImages = [
    "/port8.jpg",
    "/port6.png",
    "/port2.png",
    "/port3.png",
    "/port4.png",
    "/port7.png",
    "/port5.png",
    "/port9.png",
    "/port10.png",
    "/port11.png",
    "/port12.png",
    "/port16.png",
    "/port13.png",
    "/port14.png",
    "/port15.png",
    "/port17.png",
    "/port1.png"  // Moved the first image to the end
  ];

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our <span className="text-gradient glow-green">Portfolio</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of creative work and success stories that showcase our expertise across various industries.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg break-inside-avoid">
                <img
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We're proud to have partnered with amazing clients. Here's what they have to say about their experience with Lynkz.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <TestimonialCard testimonial={testimonials[currentTestimonial]} />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all border-2 border-primary"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all border-2 border-primary"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
