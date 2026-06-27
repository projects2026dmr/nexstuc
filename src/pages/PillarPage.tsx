import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../data/services";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PillarPageStructuredData } from "../components/StructuredData";
import StukadoorContent from "../components/StukadoorContent";
import StucwerkContent from "../components/StucwerkContent";
import LatexspuitenContent from "../components/LatexspuitenContent";
import SpackspuitenContent from "../components/SpackspuitenContent";
import SchilderwerkContent from "../components/SchilderwerkContent";
import BetonCireContent from "../components/BetonCireContent";
import BadkamerrenovatieContent from "../components/BadkamerrenovatieContent";

interface PillarPageProps {
  service: Service;
}

export default function PillarPage({ service }: PillarPageProps) {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  // Update document title for each pillar page
  useEffect(() => {
    document.title = `${service.heroTitle} | NexStuc – Professioneel ${service.title}`;
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", service.heroDescription);
    }
  }, [service]);

  const handleHomeClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <PillarPageStructuredData
        serviceName={service.title}
        serviceDescription={service.description}
        serviceSlug={service.slug}
      />

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-dark-900 via-brand-950 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
            <span className="text-2xl">{service.icon}</span>
            <span className="text-sm text-white/90 font-medium">
              {service.shortTitle}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            {service.heroDescription}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 border-none cursor-pointer"
            >
              Offerte aanvragen
            </button>
            <button
              onClick={handleHomeClick}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 cursor-pointer"
            >
              ← Terug naar home
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content Area */}
      {service.slug === "stukadoor" ? (
        /* Stukadoor Master SEO Content */
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <StukadoorContent />
          </div>
        </section>
      ) : service.slug === "stucwerk" ? (
        /* Stucwerk Master SEO Content */
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <StucwerkContent />
          </div>
        </section>
      ) : service.slug === "latexspuiten" ? (
        /* Latexspuiten Master SEO Content */
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LatexspuitenContent />
          </div>
        </section>
      ) : service.slug === "spackspuiten" ? (
        /* Spackspuiten Master SEO Content */
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SpackspuitenContent />
          </div>
        </section>
      ) : service.slug === "schilderwerk" ? (
        /* Schilderwerk Master SEO Content */
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SchilderwerkContent />
          </div>
        </section>
      ) : service.slug === "beton-cire" ? (
        /* Beton ciré Master SEO Content */
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BetonCireContent />
          </div>
        </section>
      ) : service.slug === "badkamerrenovatie" ? (
        /* Badkamerrenovatie Master SEO Content */
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BadkamerrenovatieContent />
          </div>
        </section>
      ) : (
        <>
          {/* Intro */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className="text-2xl sm:text-3xl font-bold text-dark-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title} door NexStuc
              </h2>
              <p className="mt-6 text-dark-700 leading-relaxed text-lg">
                {service.introText}
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
                  Waarom NexStuc
                </span>
                <h2
                  className="mt-3 text-2xl sm:text-3xl font-bold text-dark-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Voordelen van onze {service.shortTitle.toLowerCase()}
                </h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-dark-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
                  Toepassingen
                </span>
                <h2
                  className="mt-3 text-2xl sm:text-3xl font-bold text-dark-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Waar zetten wij {service.shortTitle.toLowerCase()} in?
                </h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.applications.map((app, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-brand-50 to-brand-100/50 border border-brand-200/50 rounded-xl p-5"
                    >
                      <span className="text-dark-800 font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
                  Veelgestelde vragen
                </span>
                <h2
                  className="mt-3 text-2xl sm:text-3xl font-bold text-dark-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  FAQ – {service.title}
                </h2>
                <div className="mt-8 space-y-6">
                  {service.faq.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100"
                    >
                      <h3 className="text-lg font-bold text-dark-900">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-dark-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Location Pages Placeholder */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
                  Locaties
                </span>
                <h2
                  className="mt-3 text-2xl sm:text-3xl font-bold text-dark-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title} bij u in de buurt
                </h2>
                <p className="mt-4 text-dark-700 leading-relaxed">
                  NexStuc is actief in heel Nederland. Wij leveren professioneel{" "}
                  {service.shortTitle.toLowerCase()} in alle provincies en grote
                  steden. Hieronder vindt u binnenkort onze locatiepagina's.
                </p>
                {/* 
                  // ============================================================
                  // Location pages will be generated programmatically here
                  // Each location page targets: "{service.title} in [Stad]"
                  // Example URLs: /{service.slug}/amsterdam, /{service.slug}/rotterdam
                  // Total: 96 location pages per service
                  // ============================================================
                */}
                <div className="mt-8 bg-brand-50 border border-brand-200/50 rounded-xl p-8 text-center">
                  <p className="text-brand-800 font-medium">
                    🚧 Locatiepagina's worden binnenkort toegevoegd
                  </p>
                  <p className="mt-2 text-brand-600 text-sm">
                    96 steden in heel Nederland – van Amsterdam tot Zwolle
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-950 via-brand-900 to-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.title} nodig?
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Neem vandaag nog contact op voor een vrijblijvende offerte. Onze
            specialisten helpen u graag verder.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:123456789"
              className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200"
            >
              📞 Bel ons direct
            </a>
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
          <div className="mt-8">
            <button
              onClick={handleHomeClick}
              className="text-white/60 hover:text-brand-400 text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
            >
              ← Terug naar de homepage
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
