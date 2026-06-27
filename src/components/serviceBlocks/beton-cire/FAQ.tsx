import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    {
      q: `Is ${serviceName.toLowerCase()} volledig waterdicht?`,
      a: `Ja. Dankzij een hoogwaardige seallaag en professionele applicatie is beton ciré volledig waterdicht en schimmelbestendig. Hierdoor is het ideaal voor douches, badkamers en andere natte ruimtes in ${city}.`
    },
    {
      q: `Kan ${serviceName.toLowerCase()} over bestaande tegels worden aangebracht in ${city}?`,
      a: `In veel gevallen wel. Beton ciré kan direct over bestaande tegels worden aangebracht, mits de ondergrond stabiel en goed voorbereid is. Dit bespaart breekwerk en maakt renovaties in ${city} sneller en efficiënter.`
    },
    {
      q: `Hoe onderhoud je ${serviceName.toLowerCase()}?`,
      a: `Beton ciré is zeer onderhoudsvriendelijk. Regelmatig reinigen met een mild, pH‑neutraal middel is voldoende. Voor extra bescherming adviseren wij een jaarlijkse was- of seallaagbehandeling.`
    },
    {
      q: `Welke kleuren en structuren zijn beschikbaar voor ${serviceName.toLowerCase()} in ${city}?`,
      a: `Wij bieden een breed kleurenpalet: van lichte betonkleuren tot diepe industriële tinten. Ook zijn verschillende structuren mogelijk, zoals fijn, medium of robuust. Tijdens een afspraak in ${city} adviseren wij u graag over de beste keuze.`
    },
    {
      q: `Is beton ciré geschikt voor vloeren in ${city}?`,
      a: `Ja. Beton ciré is slijtvast, duurzaam en geschikt voor intensief gebruik. Het is ideaal voor woonkamers, keukens, commerciële ruimtes en maatwerk vloeren in ${city}.`
    },
    {
      q: `Hoe lang gaat ${serviceName.toLowerCase()} mee?`,
      a: `Bij professioneel aangebracht beton ciré gaat de afwerking jarenlang mee. Dankzij de sterke seallaag blijft het materiaal mooi, waterdicht en kleurvast.`
    },
    {
      q: `Werken jullie ook in ${city}?`,
      a: `Ja, NexStuc is actief in ${city} en de volledige regio. Wij komen vrijblijvend langs om uw project te bekijken en advies te geven.`
    },
    {
      q: `Is een offerte gratis?`,
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
