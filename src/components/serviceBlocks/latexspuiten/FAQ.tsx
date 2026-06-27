import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    { q: `Is ${serviceName.toLowerCase()} beter dan rollen in ${city}?`, a: `Ja, latexspuiten levert een veel strakker, egaler en sneller resultaat op dan traditioneel rollen. Het is de professionele standaard voor moderne afwerkingen.` },
    { q: `Kan ${serviceName.toLowerCase()} op nieuw stucwerk?`, a: `Ja, mits het stucwerk voldoende is gedroogd (minimaal 3-7 dagen) en de juiste voorbehandeling wordt toegepast. Wij zorgen voor een perfecte dekking zonder vlekken.` },
    { q: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`, a: `Een gemiddelde woning kan binnen 1-2 dagen volledig worden gelatexspoten. Grotere projecten duren doorgaans 2-3 werkdagen.` },
    { q: `Moet de ruimte leeg zijn bij ${serviceName.toLowerCase()}?`, a: `Het is aan te raden de ruimte zo leeg mogelijk te maken. Wij dekken alles zorgvuldig af met folie om meubels en vloeren te beschermen tegen overspray.` },
    { q: `Werken jullie ook in ${city} en omgeving?`, a: `Ja, NexStuc is actief in ${city} en de gehele regio. Neem contact op voor een vrijblijvende offerte.` },
    { q: `Is een offerte voor ${serviceName.toLowerCase()} in ${city} gratis?`, a: `Ja, volledig vrijblijvend. Wij komen graag langs voor een opname en persoonlijk advies.` },
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
