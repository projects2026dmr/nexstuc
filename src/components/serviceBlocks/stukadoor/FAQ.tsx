import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    { q: `Welke diensten biedt NexStuc als ${serviceName.toLowerCase()} in ${city}?`, a: `Wij bieden stucwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en complete badkamerrenovaties aan in ${city} en omgeving.` },
    { q: `Hoe lang duurt een stukadoorsklus in ${city}?`, a: "De duur hangt af van de grootte en het type project. Een gemiddelde woonkamer is binnen 1-2 dagen gestuct. Een volledige woning duurt doorgaans 3-5 werkdagen." },
    { q: `Komen jullie ook langs voor een opname in ${city}?`, a: `Ja, wij komen graag vrijblijvend bij u langs in ${city} voor een opname, advies en een offerte op maat.` },
    { q: `Werken jullie voor particulieren én bedrijven in ${city}?`, a: "Ja, wij werken voor zowel particuliere opdrachtgevers als zakelijke klanten, projectontwikkelaars en woningcorporaties." },
    { q: `Is een offerte van NexStuc als ${serviceName.toLowerCase()} in ${city} gratis?`, a: "Ja, wij bieden altijd een volledig vrijblijvende offerte aan. Neem contact op voor een afspraak." },
    { q: `Waarom NexStuc kiezen als ${serviceName.toLowerCase()} in ${city}?`, a: "NexStuc staat voor strak vakmanschap, eerlijke communicatie en een nette afwerking. Wij leveren kwaliteit die u ziet en voelt, met 100% tevredenheidsgarantie." },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mt-10 mb-4">Veelgestelde vragen over een {serviceName.toLowerCase()} in {city}</h2>
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
