export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6473966/pexels-photo-6473966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-brand-950/80 to-dark-900/90" />
        {/* Decorative accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Actief in heel Nederland
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Stukadoor voor
          <br />
          <span className="text-brand-400">heel Nederland</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
          Vakmanschap dat u ziet en voelt. NexStuc levert strak stucwerk,
          professioneel schilderwerk en luxe afwerkingen voor woningen en
          bedrijfspanden door heel Nederland. Altijd met oog voor detail,
          nette afwerking en duidelijke afspraken.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 border-none cursor-pointer"
          >
            Vraag een vrijblijvende offerte aan
          </button>
          <button
            onClick={() => scrollToSection("diensten")}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 cursor-pointer"
          >
            Bekijk onze diensten
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-brand-400 text-lg">✓</span>
            <span>Gratis offerte</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-400 text-lg">✓</span>
            <span>Ervaren vakmensen</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-400 text-lg">✓</span>
            <span>100% tevredenheidsgarantie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
