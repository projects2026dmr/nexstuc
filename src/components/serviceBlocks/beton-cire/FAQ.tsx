import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    { q: `Is ${serviceName.toLowerCase()} waterdicht?`, a: "Ja, dankzij de speciale seallaag is beton ciré volledig waterdicht en ideaal voor douches en badkamers." },
    { q: `Kan ${serviceName.toLowerCase()} over bestaande tegels in ${city}?`, a: "Ja, in veel gevallen kan beton ciré direct over bestaande tegels worden aangebracht. Dit bespaart breekwerk en maakt de renovatie sneller." },
    { q: `Hoe onderhoud je ${serviceName.toLowerCase()}?`, a: "Beton ciré is zeer onderhoudsvriendelijk. Regelmatig dweilen met een neutraal reinigingsmiddel is voldoende. Wij adviseren een jaarlijkse wasbehandeling." },
    { q: `Welke kleuren zijn beschikbaar voor ${serviceName.toLowerCase()} in ${city}?`, a: "Wij bieden een breed kleurenpalet aan, van lichte betonnen tinten tot donkere, industriële kleuren. Wij adviseren u graag bij de keuze." },
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
