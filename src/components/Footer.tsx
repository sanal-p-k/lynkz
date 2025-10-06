import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Lynkz Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-xl font-bold text-white">
                Lynkz <span className="text-primary">Agency</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Design. Story. Strategy. All Lynked.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Lynkz Hub
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                Behind Lynkz
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Solutions We Lynk
              </Link>
              <Link to="/portfolio" className="block text-muted-foreground hover:text-primary transition-colors">
                Lynkz in Action
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Lynk Up
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Social Media</p>
              <p className="text-muted-foreground text-sm">Branding</p>
              <p className="text-muted-foreground text-sm">Web Development</p>
              <p className="text-muted-foreground text-sm">AI & Automation</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <span>lynkzagency@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                <span>+91 9497684728</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                <span>Malappuram, Kerala</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Lynkz Agency. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61581432620812" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
              <Facebook size={18} className="text-white" />
            </a>
            <a href="https://www.instagram.com/lynkz.agency/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
              <Instagram size={18} className="text-white" />
            </a>
            <a href="https://www.linkedin.com/company/lynkz-agency/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
              <Linkedin size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
