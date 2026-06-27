import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    { q: `Welke verven gebruiken jullie voor ${serviceName.toLowerCase()} in ${city}?`, a: "Wij werken met premium merken zoals Sigma, Sikkens en Flexa. De keuze hangt af van de toepassing en uw wensen." },
    { q: `Hoe bereiden jullie de ondergrond voor?`, a: "Wij reinigen, schuren, plamuren en gronderen de ondergrond voordat we beginnen met schilderen. Zo garanderen wij een optimale hechting." },
    { q: `Doen jullie ook schilderwerk aan kozijnen en houtwerk?`, a: "Ja, wij schilderen kozijnen, deuren, plinten, trappen en houten panelen met duurzame lakken." },
    { q: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`, a: "De duur hangt af van de grootte. Een gemiddelde woning is binnen 3-5 werkdagen geschilderd." },
    { q: `Werken jullie ook in ${city}?`, a: `Ja, NexStuc is actief in ${city} en de gehele regio.` },
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
