import { projects } from "../data/projects";

export default function ProjectenSection() {
  return (
    <section id="projecten" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
            Ons werk
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-dark-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Recente projecten
          </h2>
          <p className="mt-4 text-dark-700 leading-relaxed">
            Een selectie van recent opgeleverde projecten door heel Nederland.
            Van stucwerk in woonkamers tot luxe badkamerrenovaties.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="450"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-dark-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
