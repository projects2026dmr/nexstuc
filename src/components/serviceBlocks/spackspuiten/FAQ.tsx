import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    { q: `Is ${serviceName.toLowerCase()} geschikt voor elke woning in ${city}?`, a: "Ja, spackspuiten is geschikt voor zowel nieuwbouw als renovatie. Het is toepasbaar op vrijwel elke ondergrond." },
    { q: `Welke structuren bieden jullie aan bij ${serviceName.toLowerCase()}?`, a: "Wij bieden fijne, middelfijne en grove structuren aan. De keuze hangt af van uw persoonlijke voorkeur en het type ruimte." },
    { q: `Kan spackwerk later worden overschilderd?`, a: "Ja, spackwerk kan na droging (circa 24 uur) worden overgeschilderd of gelatexspoten voor een nog strakker resultaat." },
    { q: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`, a: "Een gemiddelde woning kan in 1-2 dagen volledig worden gespackspoten. De exacte duur hangt af van de grootte." },
    { q: `Werken jullie ook in ${city}?`, a: `Ja, NexStuc is actief in ${city} en de gehele regio. Neem contact op voor een vrijblijvende offerte.` },
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
