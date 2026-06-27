import { useLocation, useNavigate } from "react-router-dom";
import { services } from "../data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
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

  // Handle home click
  const handleHomeClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  // Handle pillar page click
  const handlePillarClick = (slug: string) => {
    navigate(`/${slug}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nex<span className="text-brand-400">Stuc</span>
            </span>
            <p className="mt-2 text-sm text-white/60">
              Strak vakmanschap voor heel Nederland
            </p>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Professioneel stukadoorsbedrijf actief in heel Nederland. Van
              stucwerk tot badkamerrenovatie – wij leveren kwaliteit die u ziet
              en voelt.
            </p>
            <p className="mt-6 text-xs text-brand-400 font-medium uppercase tracking-wider">
              ✦ Actief in heel Nederland
            </p>
          </div>

          {/* Belangrijke pagina's / Pillar pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Belangrijke pagina's
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <button
                    onClick={() => handlePillarClick(service.slug)}
                    className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleHomeClick}
                  className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("over-ons")}
                  className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  Over ons
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("diensten")}
                  className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  Diensten
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("projecten")}
                  className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  Projecten
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("werkwijze")}
                  className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  Werkwijze
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("reviews")}
                  className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-sm text-white/60 hover:text-brand-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact gegevens */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:123456789"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-400 transition-colors"
                >
                  <span className="text-lg">📞</span>
                  <span>123 456 789</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nexstuc.nl"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-400 transition-colors"
                >
                  <span className="text-lg">✉️</span>
                  <span>info@nexstuc.nl</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-400 transition-colors"
                >
                  <span className="text-lg">💬</span>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} NexStuc. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-white/40">
            Stukadoor • Stucwerk • Latexspuiten • Spackspuiten • Schilderwerk •
            Beton ciré • Badkamerrenovatie
          </p>
        </div>
      </div>
    </footer>
  );
}
