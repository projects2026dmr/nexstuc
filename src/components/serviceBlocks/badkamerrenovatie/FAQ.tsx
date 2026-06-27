import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    {
      q: `Hoe lang duurt een ${serviceName.toLowerCase()} in ${city}?`,
      a: `Een gemiddelde badkamerrenovatie duurt 1–3 weken. Dit hangt af van de omvang van de badkamer, de gekozen materialen, eventuele maatwerkoplossingen en of er leidingwerk moet worden verplaatst. In ${city} kunnen wij vaak sneller schakelen dankzij onze vaste partners.`
    },
    {
      q: `Wat kost een ${serviceName.toLowerCase()} in ${city}?`,
      a: `De kosten zijn afhankelijk van de afmetingen van de badkamer, materiaalkeuze (tegels, beton ciré, sanitair), afwerking en eventuele extra opties zoals vloerverwarming. Wij maken altijd een vrijblijvende, transparante offerte op maat voor projecten in ${city}.`
    },
    {
      q: `Is beton ciré geschikt voor badkamers in ${city}?`,
      a: `Ja, beton ciré is volledig waterdicht en daardoor ideaal voor douches, wanden en vloeren. Het geeft een moderne, naadloze uitstraling en is eenvoudig te onderhouden. Wij passen beton ciré regelmatig toe in badkamers in ${city}.`
    },
    {
      q: `Kunnen jullie ook kleine badkamers renoveren?`,
      a: `Zeker. Wij zijn gespecialiseerd in slimme indelingen, maatwerkmeubels en ruimtebesparende oplossingen. Kleine badkamers kunnen vaak verrassend luxe worden met de juiste materialen en planning.`
    },
    {
      q: `Verzorgen jullie ook het loodgieterswerk en elektriciteit?`,
      a: `Ja. Wij coördineren het volledige traject: loodgieterswerk, elektriciteit, ventilatie, verlichting en afwerking. U heeft één aanspreekpunt en wij zorgen voor een perfect afgestemde planning.`
    },
    {
      q: `Werken jullie ook in ${city}?`,
      a: `Ja, NexStuc is actief in ${city} en de volledige regio. Wij komen vrijblijvend langs om de badkamer te bekijken en uw wensen te bespreken.`
    },
    {
      q: `Is een offerte echt gratis?`,
      a: `Ja, onze offertes zijn volledig vrijblijvend. U ontvangt een duidelijke prijsopgave zonder verrassingen.`
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
