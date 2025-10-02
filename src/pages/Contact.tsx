import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24">
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
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in">
            <span className="text-white">Lynk </span>
            <span className="text-gradient glow-green">Up</span>
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to transform your digital presence? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-card border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-white/10 text-white rounded-lg focus:border-primary focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-white/10 text-white rounded-lg focus:border-primary focus:ring-primary"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-input border-white/10 text-white rounded-lg focus:border-primary focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-input border-white/10 text-white rounded-lg focus:border-primary focus:ring-primary min-h-[150px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] text-lg py-6"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help bring your ideas to life. Reach out through any of these channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-card border border-white/10 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@lynkz.agency</p>
                    <p className="text-muted-foreground">support@lynkz.agency</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card border border-white/10 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card border border-white/10 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Innovation Drive</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all"
                  >
                    <Facebook size={20} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all"
                  >
                    <Twitter size={20} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all"
                  >
                    <Instagram size={20} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
