import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      title: "TechStart Rebranding",
      category: "Branding",
      description: "Complete brand overhaul for a Silicon Valley startup",
      image: "bg-gradient-to-br from-purple-600 to-blue-600",
    },
    {
      title: "EcoStore E-commerce",
      category: "Web Development",
      description: "Sustainable shopping platform with 300% conversion increase",
      image: "bg-gradient-to-br from-green-600 to-teal-600",
    },
    {
      title: "FitLife Campaign",
      category: "Social Media",
      description: "Viral fitness campaign reaching 2M+ users",
      image: "bg-gradient-to-br from-orange-600 to-red-600",
    },
    {
      title: "FinanceAI Platform",
      category: "AI & Automation",
      description: "AI-powered financial advisory platform",
      image: "bg-gradient-to-br from-indigo-600 to-purple-600",
    },
    {
      title: "Restaurant Chain",
      category: "Video Production",
      description: "Brand story documentary series",
      image: "bg-gradient-to-br from-yellow-600 to-orange-600",
    },
    {
      title: "Data Dashboard",
      category: "Data Solutions",
      description: "Real-time analytics dashboard for enterprise client",
      image: "bg-gradient-to-br from-cyan-600 to-blue-600",
    },
  ];

  const caseStudies = [
    {
      client: "TechVision Inc.",
      problem: "Low brand recognition in crowded market",
      solution: "Developed comprehensive rebrand with unique visual identity",
      result: "Brand awareness increased by 250% in 6 months",
    },
    {
      client: "GreenGrocer",
      problem: "Poor online sales conversion rates",
      solution: "Redesigned e-commerce platform with UX optimization",
      result: "Conversion rate improved from 1.2% to 4.8%",
    },
    {
      client: "FitPro Studios",
      problem: "Stagnant social media growth",
      solution: "Created engaging content strategy with influencer partnerships",
      result: "Grew from 5K to 50K followers in 3 months",
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
                className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`aspect-square ${project.image} transition-transform duration-500 group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary text-sm font-semibold">{project.category}</span>
                      <ExternalLink className="text-primary" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Case Studies</h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-card border border-white/10 rounded-xl p-8 hover-lift"
              >
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-primary uppercase">Problem</h4>
                  <h3 className="text-2xl font-bold text-white">{study.client}</h3>
                  <p className="text-muted-foreground">{study.problem}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-primary uppercase">Solution</h4>
                  <p className="text-white">{study.solution}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-primary uppercase">Result</h4>
                  <p className="text-2xl font-bold text-primary">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Slider */}
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
