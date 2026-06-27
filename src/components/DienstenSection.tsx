import { useNavigate } from "react-router-dom";
import { services } from "../data/services";

export default function DienstenSection() {
  const navigate = useNavigate();

  const handleServiceClick = (slug: string) => {
    navigate(`/${slug}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="diensten" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
            Wat wij doen
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-dark-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Onze diensten
          </h2>
          <p className="mt-4 text-dark-700 leading-relaxed">
            Van stucwerk tot badkamerrenovatie – NexStuc biedt een compleet
            pakket aan afwerkingsdiensten. Al onze diensten zijn beschikbaar{" "}
            <strong>in heel Nederland</strong>.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <button
              key={service.slug}
              onClick={() => handleServiceClick(service.slug)}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 text-left cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark-900 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-dark-700 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-brand-500 text-sm font-semibold">
                <span>Meer informatie</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
