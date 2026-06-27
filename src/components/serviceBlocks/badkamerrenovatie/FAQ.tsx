import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    { q: `Hoe lang duurt een ${serviceName.toLowerCase()} in ${city}?`, a: "Een gemiddelde badkamerrenovatie duurt 1-3 weken, afhankelijk van de omvang, de gekozen materialen en eventueel maatwerk." },
    { q: `Is beton ciré geschikt voor badkamers in ${city}?`, a: "Ja, beton ciré is volledig waterdicht en ideaal voor douches, wanden en vloeren in badkamers." },
    { q: `Kunnen jullie ook kleine badkamers renoveren?`, a: "Ja, wij zijn gespecialiseerd in slimme indelingen en maatwerk oplossingen voor compacte badkamers." },
    { q: `Verzorgen jullie ook het loodgieterswerk?`, a: "Wij werken samen met betrouwbare loodgieters en installateurs. Zo coördineren wij het volledige traject en bent u volledig ontzorgd." },
    { q: `Werken jullie ook in ${city}?`, a: `Ja, NexStuc is actief in ${city} en de gehele regio. Neem contact op voor een vrijblijvende offerte.` },
    { q: `Is een offerte gratis?`, a: "Ja, volledig vrijblijvend." },
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
