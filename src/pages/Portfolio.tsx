import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      title: "Zara's Fashion",
      category: "E-commerce",
      description: "Revolutionizing online shopping experience with a high-performance e-commerce platform",
      image: "/port1.png",
      client: "Zara's Fashion"
    },
    {
      title: "PK Door Branding",
      category: "Branding",
      description: "Crafting a bold new identity that reflects innovation and reliability",
      image: "/port6.png",
      client: "PK Door"
    },
    {
      title: "WTD Logistics",
      category: "Mobile App",
      description: "Streamlining logistics operations with a custom mobile solution",
      image: "/port8.jpg",
      client: "WTD Logistics"
    },
    {
      title: "Tech Solutions",
      category: "Web Development",
      description: "Modern web platform for a leading tech company",
      image: "/port2.png",
      client: "Tech Solutions Inc."
    },
    {
      title: "Creative Studio",
      category: "Branding",
      description: "Complete visual identity for a creative agency",
      image: "/port3.png",
      client: "Creative Studio"
    },
    {
      title: "Fitness App",
      category: "Mobile Development",
      description: "Personalized fitness tracking and workout plans",
      image: "/port4.png",
      client: "FitLife"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechVision Inc.",
      logo: "TV",
      text: "Lynkz transformed our brand identity. Their creative approach and attention to detail exceeded all expectations.",
    },
    {
      name: "Michael Chen",
      company: "GreenGrocer",
      logo: "GG",
      text: "The ROI from our website redesign has been incredible. Our sales have tripled since launch.",
    },
    {
      name: "Emily Rodriguez",
      company: "FitPro Studios",
      logo: "FP",
      text: "Working with Lynkz felt like having an extension of our team. They truly understood our vision.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in">
            <span className="text-white">Lynkz in </span>
            <span className="text-gradient glow-green">Action</span>
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Explore our portfolio of successful projects and the impact we've created for our clients.
          </p>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-xl ${
                  index % 3 === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div
                  className="aspect-square bg-cover bg-center flex items-end p-6 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(/public${project.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="relative z-10 text-white w-full">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="opacity-90">{project.client}</p>
                        <p className="text-sm mt-2 opacity-80">{project.description}</p>
                        <button className="mt-3 px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">What Clients Say</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-card border border-white/10 rounded-xl p-12 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">
                  {testimonials[currentTestimonial].logo}
                </span>
              </div>
              <p className="text-xl text-white mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <h4 className="text-lg font-bold text-primary">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentTestimonial].company}
              </p>
            </div>

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
