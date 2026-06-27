import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    {
      q: `Welke diensten biedt NexStuc als ${serviceName.toLowerCase()} in ${city}?`,
      a: `Wij bieden een compleet pakket aan afwerkingsdiensten in ${city}, waaronder stucwerk, glad pleisterwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en volledige badkamerrenovaties. Onze stukadoors adviseren u graag over de beste oplossing voor uw woning of bedrijfspand.`
    },
    {
      q: `Hoe lang duurt een stukadoorsklus in ${city}?`,
      a: `De duur hangt af van het type project en de oppervlakte. Een gemiddelde woonkamer is binnen 1–2 dagen volledig gestuct. Een volledige woning duurt doorgaans 3–5 werkdagen, afhankelijk van ondergrond, voorbereidingen en gekozen afwerking.`
    },
    {
      q: `Komen jullie ook langs voor een opname in ${city}?`,
      a: `Ja. Wij komen vrijblijvend bij u langs in ${city} voor een opname, technisch advies en een offerte op maat. Tijdens de opname bekijken wij de ondergrond, eventuele oneffenheden en de gewenste afwerking.`
    },
    {
      q: `Werken jullie voor particulieren én bedrijven in ${city}?`,
      a: `Ja. Wij werken voor particulieren, bedrijven, aannemers, projectontwikkelaars en woningcorporaties in ${city} en omgeving. Zowel kleine projecten als grote renovaties zijn mogelijk.`
    },
    {
      q: `Is stucwerk geschikt voor badkamers en vochtige ruimtes?`,
      a: `Ja. Cementgebonden stucwerk en beton ciré zijn perfect geschikt voor vochtige ruimtes zoals badkamers, toiletten en wasruimtes. Deze afwerkingen zijn waterbestendig, slijtvast en zeer duurzaam.`
    },
    {
      q: `Wanneer kan ik schilderen na het stucwerk?`,
      a: `Stucwerk moet minimaal 3–7 dagen drogen voordat u kunt schilderen. Volledige uitharding duurt circa 4 weken. Voor het beste resultaat raden wij aan om pas te schilderen wanneer het stucwerk volledig is uitgehard.`
    },
    {
      q: `Waarom NexStuc kiezen als ${serviceName.toLowerCase()} in ${city}?`,
      a: `NexStuc staat voor strak vakmanschap, moderne technieken, hoogwaardige materialen en duidelijke communicatie. Wij leveren een afwerking die u ziet én voelt, met 100% tevredenheidsgarantie op al ons werk in ${city}.`
    },
    {
      q: `Is een offerte van NexStuc als ${serviceName.toLowerCase()} in ${city} gratis?`,
      a: `Ja. Onze offertes zijn volledig gratis en vrijblijvend. U ontvangt een duidelijke prijsopgave zonder verrassingen.`
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mt-10 mb-4">
        Veelgestelde vragen over een {serviceName.toLowerCase()} in {city}
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
