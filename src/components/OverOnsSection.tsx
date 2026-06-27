export default function OverOnsSection() {
  const usps = [
    "Meer dan 10 jaar ervaring in stucwerk en afwerking",
    "Actief in heel Nederland – van Groningen tot Maastricht",
    "Eerlijke prijzen zonder verborgen kosten",
    "Duidelijke afspraken en strakke planning",
    "Netjes en opgeruimd werken – altijd",
    "100% tevredenheidsgarantie op al ons werk",
  ];

  return (
    <section id="over-ons" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
              Wie wij zijn
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold text-dark-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Over ons
            </h2>

            <div className="mt-6 space-y-4 text-dark-700 leading-relaxed">
              <p>
                NexStuc is een professioneel stukadoorsbedrijf dat actief is
                door heel Nederland. Met een team van ervaren vakmensen leveren
                wij hoogwaardig stucwerk, latexspuiten, spackspuiten,
                schilderwerk, beton ciré en complete badkamerrenovaties.
              </p>
              <p>
                Wij geloven in strak vakmanschap, eerlijke communicatie en een
                nette afwerking. Bij elk project – groot of klein – streven wij
                naar perfectie. Onze klanten waarderen ons om onze
                betrouwbaarheid, ons oog voor detail en onze no-nonsense
                aanpak.
              </p>
              <p>
                Of het nu gaat om een particuliere woning, een nieuwbouwproject
                of een zakelijk pand: NexStuc staat garant voor kwaliteit die u
                ziet en voelt. Wij komen graag bij u langs voor een
                vrijblijvende opname en offerte.
              </p>
            </div>
          </div>

          {/* USP's Card */}
          <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 rounded-2xl p-8 sm:p-10 border border-brand-200/50">
            <h3 className="text-xl font-bold text-dark-900 mb-6">
              Waarom kiezen voor NexStuc?
            </h3>
            <ul className="space-y-4">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-dark-700">{usp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
