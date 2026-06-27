import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    {
      q: `Hoe lang duurt ${serviceName.toLowerCase()} in ${city}?`,
      a: `De duur hangt af van de omvang van het project. Een gemiddelde woonkamer is binnen 1–2 dagen volledig gestuct. Een volledige woning duurt doorgaans 3–5 werkdagen, afhankelijk van ondergrond, type stucwerk en eventuele voorbereidingen.`
    },
    {
      q: `Welke soorten stucwerk bieden jullie aan in ${city}?`,
      a: `Wij bieden glad pleisterwerk (sausklaar), behangklaar stucwerk, raapwerk voor scheve muren, cementgebonden stucwerk voor vochtige ruimtes en sierpleister. Tijdens een opname in ${city} adviseren wij u graag over de beste optie voor uw woning.`
    },
    {
      q: `Is ${serviceName.toLowerCase()} geschikt voor badkamers?`,
      a: `Ja. Met cementgebonden stucwerk of beton ciré is stucwerk perfect geschikt voor vochtige ruimtes zoals badkamers, toiletten en wasruimtes. Deze afwerkingen zijn waterbestendig en zeer duurzaam.`
    },
    {
      q: `Wanneer kan ik schilderen na het stucwerk?`,
      a: `Na het aanbrengen van stucwerk moet het minimaal 3–7 dagen drogen voordat u kunt schilderen. Volledige uitharding duurt circa 4 weken. Voor een optimaal resultaat raden wij aan om pas te schilderen wanneer het stucwerk volledig is uitgehard.`
    },
    {
      q: `Moet de ruimte leeg zijn bij ${serviceName.toLowerCase()}?`,
      a: `Het is aan te raden de ruimte zo leeg mogelijk te maken. Wij dekken vloeren, meubels en ramen zorgvuldig af met professionele folie om stof en spuitnevel te voorkomen.`
    },
    {
      q: `Is stucwerk een duurzame afwerking?`,
      a: `Ja. Hoogwaardig stucwerk is slijtvast, scheurvast en blijft jarenlang mooi. Het vormt een perfecte basis voor schilderwerk, behang of decoratieve afwerkingen zoals beton ciré.`
    },
    {
      q: `Werken jullie ook in ${city} en omgeving?`,
      a: `Ja, NexStuc is actief in ${city} en de volledige regio. Wij komen vrijblijvend langs voor een opname en persoonlijk advies.`
    },
    {
      q: `Is een offerte voor ${serviceName.toLowerCase()} in ${city} gratis?`,
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
