import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isActionHovered, setIsActionHovered] = useState(false);
  const [isActionMobileOpen, setIsActionMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Lynkz Hub", path: "/" },
    { name: "Behind Lynkz", path: "/about" },
    { name: "Solutions We Lynk", path: "/services" },
    { 
      name: "Lynkz in Action", 
      path: "/portfolio",
      id: 'action-dropdown',
      dropdown: [
        { name: "Case Studies", path: "/case-studies" },
        { name: "Portfolio", path: "/portfolio" }
      ]
    },
    { name: "Lynk Up", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/logo.png" alt="Lynkz Logo" className="w-10 h-10 rounded-lg group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-shadow" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setIsActionHovered(true)}
                onMouseLeave={() => link.dropdown && setIsActionHovered(false)}
              >
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.id ? null : link.id)}
                      className={`text-sm font-medium transition-colors flex items-center ${
                        location.pathname === link.path || 
                        (link.dropdown && link.dropdown.some(item => item.path === location.pathname))
                          ? "text-primary" 
                          : "text-white hover:text-primary"
                      }`}
                      aria-expanded={activeDropdown === link.id}
                      aria-haspopup="true"
                      aria-controls={link.id}
                    >
                      {link.name}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${(isActionHovered || activeDropdown === link.id) ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
                
                {link.dropdown && (isActionHovered || activeDropdown === link.id) && (
                  <div 
                    id={link.id}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-md border border-white/10 overflow-hidden z-50"
                    onMouseEnter={() => setIsActionHovered(true)}
                    onMouseLeave={() => setIsActionHovered(false)}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`${link.id}-button`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-3 text-sm hover:bg-white/5 transition-colors ${
                          location.pathname === item.path ? 'text-primary' : 'text-white'
                        }`}
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                
                {(location.pathname === link.path || 
                  (link.dropdown && link.dropdown.some(item => item.path === location.pathname))) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                <div key={link.path} className="w-full">
                  {link.dropdown ? (
                    <div className="w-full">
                      <button
                        onClick={() => setIsActionMobileOpen(!isActionMobileOpen)}
                        className={`w-full text-left text-lg font-medium transition-colors flex justify-between items-center ${
                          location.pathname === link.path || 
                          link.dropdown.some(item => item.path === location.pathname)
                            ? "text-primary" 
                            : "text-white hover:text-primary"
                        }`}
                      >
                        {link.name}
                        <svg 
                          className={`ml-2 w-4 h-4 transition-transform duration-200 ${isActionMobileOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isActionMobileOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsActionMobileOpen(false);
                              }}
                              className={`block py-2 text-base ${
                                location.pathname === item.path 
                                  ? 'text-primary' 
                                  : 'text-white/80 hover:text-primary'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 text-lg font-medium transition-colors ${
                        location.pathname === link.path ? "text-primary" : "text-white hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
