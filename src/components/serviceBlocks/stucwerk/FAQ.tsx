import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    { q: `Hoe lang duurt ${serviceName.toLowerCase()} in ${city}?`, a: `De duur hangt af van de grootte van het project. Een gemiddelde woonkamer is binnen 1-2 dagen gestuct. Een volledige woning duurt doorgaans 3-5 werkdagen.` },
    { q: `Welke soorten stucwerk bieden jullie aan in ${city}?`, a: `Wij bieden glad pleisterwerk (sausklaar), behangklaar stucwerk, raapwerk, cementgebonden stucwerk en sierpleister aan in ${city} en omgeving.` },
    { q: `Is ${serviceName.toLowerCase()} geschikt voor badkamers?`, a: `Ja, met cementgebonden stucwerk of beton ciré is stucwerk perfect geschikt voor vochtige ruimtes zoals badkamers en toiletten.` },
    { q: `Wanneer kan ik schilderen na het stucwerk?`, a: `Na het aanbrengen van stucwerk moet het minimaal 3-7 dagen drogen voordat u kunt schilderen. Volledige uitharding duurt circa 4 weken.` },
    { q: `Werken jullie ook in ${city} en omgeving?`, a: `Ja, NexStuc is actief in ${city} en de gehele regio. Wij komen graag bij u langs voor een vrijblijvende opname en offerte.` },
    { q: `Is een offerte voor ${serviceName.toLowerCase()} in ${city} gratis?`, a: `Ja, wij bieden altijd een volledig vrijblijvende offerte aan. Neem contact op voor een afspraak.` },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mt-10 mb-4">Veelgestelde vragen over {serviceName.toLowerCase()} in {city}</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-dark-900 mb-2">{faq.q}</h3>
            <p className="text-dark-700 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
