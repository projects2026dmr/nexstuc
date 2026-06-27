const steps = [
  {
    number: "01",
    title: "Kennismaking & opname",
    description:
      "Wij komen vrijblijvend bij u langs om de situatie te bekijken. Tijdens dit bezoek bespreken we uw wensen, nemen we de maten op en adviseren we u over de beste aanpak en materialen.",
  },
  {
    number: "02",
    title: "Offerte & planning",
    description:
      "Na de opname ontvangt u binnen 48 uur een heldere, gedetailleerde offerte zonder verborgen kosten. Bij akkoord plannen we de werkzaamheden in op een moment dat u schikt.",
  },
  {
    number: "03",
    title: "Voorbereiding",
    description:
      "Onze vakmensen bereiden de werkplek zorgvuldig voor. Wij dekken vloeren en meubels af, repareren eventuele beschadigingen en zorgen dat de ondergrond perfect gereed is.",
  },
  {
    number: "04",
    title: "Uitvoering",
    description:
      "Het stucwerk, de afwerking of renovatie wordt uitgevoerd door ervaren vakmensen met oog voor detail. Wij werken efficiënt, netjes en houden u op de hoogte van de voortgang.",
  },
  {
    number: "05",
    title: "Oplevering & nazorg",
    description:
      "Na afronding lopen we samen het resultaat na. Pas als u 100% tevreden bent, beschouwen wij het project als opgeleverd. Ook na oplevering staan wij voor u klaar bij vragen.",
  },
];

export default function WerkwijzeSection() {
  return (
    <section id="werkwijze" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-wider">
            Hoe wij werken
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-dark-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Onze werkwijze
          </h2>
          <p className="mt-4 text-dark-700 leading-relaxed">
            Van eerste kennismaking tot oplevering – bij NexStuc weet u precies
            waar u aan toe bent. Transparant, professioneel en altijd gericht op
            het beste resultaat.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 items-start"
            >
              {/* Number circle + vertical connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-brand-500/20">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full bg-brand-200 mt-2 min-h-[40px]" />
                )}
              </div>

              {/* Content card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex-1 mb-2">
                <h3 className="text-lg font-bold text-dark-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-dark-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
