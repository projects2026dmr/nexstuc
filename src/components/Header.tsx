import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Over ons", sectionId: "over-ons" },
  { label: "Diensten", sectionId: "diensten" },
  { label: "Projecten", sectionId: "projecten" },
  { label: "Werkwijze", sectionId: "werkwijze" },
  { label: "Reviews", sectionId: "reviews" },
  { label: "Contact", sectionId: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    
    if (isHomePage) {
      // Already on homepage, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  // Handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
        ? (scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent")
        : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#/" onClick={handleLogoClick} className="flex flex-col">
            <span
              className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-brand-900" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nex<span className="text-brand-500">Stuc</span>
            </span>
            <span
              className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-dark-700" : "text-white/80"
              }`}
            >
              Strak vakmanschap
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hoofdnavigatie">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-500 bg-transparent border-none cursor-pointer ${
                  scrolled ? "text-dark-800" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 border-none cursor-pointer"
            >
              Offerte aanvragen
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 transition-colors ${
                scrolled ? "bg-dark-900" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-colors ${
                scrolled ? "bg-dark-900" : "bg-white"
              }`}
            />
            <span
              className={`block w-4 h-0.5 transition-colors ${
                scrolled ? "bg-dark-900" : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-brand-950 flex flex-col items-center justify-center transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100vw", height: "100vh" }}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white w-12 h-12 flex items-center justify-center bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(false)}
          aria-label="Sluit menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo in menu */}
        <div className="mb-12">
          <span
            className="text-3xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nex<span className="text-brand-400">Stuc</span>
          </span>
        </div>

        <nav className="flex flex-col items-center gap-6" aria-label="Mobiele navigatie">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className="text-2xl font-semibold text-white/90 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 bg-brand-500 hover:bg-brand-400 text-white text-lg font-semibold px-8 py-3 rounded-lg transition-colors border-none cursor-pointer"
          >
            Offerte aanvragen
          </button>
        </nav>
      </div>
    </header>
  );
}
