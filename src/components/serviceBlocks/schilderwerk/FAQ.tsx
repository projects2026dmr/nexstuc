import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    {
      q: `Welke verfmerken gebruiken jullie voor ${serviceName.toLowerCase()} in ${city}?`,
      a: `Wij werken uitsluitend met premium merken zoals Sigma, Sikkens en Flexa. Afhankelijk van de ondergrond, toepassing en gewenste uitstraling adviseren wij het beste product voor uw woning of bedrijfspand in ${city}.`
    },
    {
      q: `Hoe bereiden jullie de ondergrond voor voordat jullie beginnen met schilderen?`,
      a: `Wij reinigen, schuren, plamuren en gronderen elke ondergrond zorgvuldig. Hierdoor hecht de verf optimaal en blijft de afwerking jarenlang strak en duurzaam. Voor houtwerk gebruiken wij speciale primers voor extra bescherming.`
    },
    {
      q: `Doen jullie ook schilderwerk aan kozijnen, deuren en houtwerk?`,
      a: `Ja. Wij schilderen kozijnen, deuren, plinten, trappen en al het overige houtwerk met hoogwaardige lakken die bestand zijn tegen slijtage en verkleuring. Dit zorgt voor een langdurig, strak resultaat.`
    },
    {
      q: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`,
      a: `De duur hangt af van de omvang van het project. Een gemiddelde woning is binnen 3–5 werkdagen volledig geschilderd. Grotere projecten of renovaties kunnen iets langer duren.`
    },
    {
      q: `Geven jullie ook kleuradvies voor schilderwerk in ${city}?`,
      a: `Ja. Wij helpen u bij het kiezen van de juiste kleuren, glansgraden en verfsoorten die passen bij uw interieur, lichtinval en stijl. Dit advies is volledig vrijblijvend.`
    },
    {
      q: `Werken jullie ook in ${city} en omgeving?`,
      a: `Ja, NexStuc is actief in ${city} en de volledige regio. Wij komen vrijblijvend langs voor een opname en persoonlijk advies.`
    },
    {
      q: `Is een offerte voor ${serviceName.toLowerCase()} in ${city} gratis?`,
      a: `Ja, onze offertes zijn volledig gratis en vrijblijvend. U ontvangt een duidelijke prijsopgave zonder verrassingen.`
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mt-10 mb-4">
        Veelgestelde vragen over {serviceName.toLowerCase()} in {city}
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl p-6 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-dark-900 mb-2">{faq.q}</h3>
            <p className="text-dark-700 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
