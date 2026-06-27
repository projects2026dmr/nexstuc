import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    {
      q: `Is ${serviceName.toLowerCase()} geschikt voor elke woning in ${city}?`,
      a: `Ja. Spackspuiten is geschikt voor zowel nieuwbouw als renovatieprojecten in ${city}. Het kan worden toegepast op vrijwel elke stabiele ondergrond, zoals gips, beton, stucwerk of bestaande wanden.`
    },
    {
      q: `Welke structuren bieden jullie aan bij ${serviceName.toLowerCase()}?`,
      a: `Wij bieden drie structuren aan: fijn, middelfijn en grof. De keuze hangt af van uw interieurstijl, lichtinval en gewenste uitstraling. Tijdens een opname in ${city} adviseren wij u graag over de beste korrelgrootte.`
    },
    {
      q: `Kan spackwerk later worden overschilderd of gelatexspoten?`,
      a: `Ja. Na volledige droging (meestal binnen 24 uur) kan spackwerk eenvoudig worden overgeschilderd of gelatexspoten. Latexspuiten geeft een extra strak, egaal resultaat en wordt vaak gecombineerd met spackspuiten.`
    },
    {
      q: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`,
      a: `Een gemiddelde woning kan binnen 1–2 dagen volledig worden gespackspoten. De exacte duur hangt af van de oppervlakte, voorbereiding en gekozen structuur.`
    },
    {
      q: `Moet de ruimte leeg zijn bij ${serviceName.toLowerCase()}?`,
      a: `Het is aan te raden de ruimte zo leeg mogelijk te maken. Wij dekken alle meubels, vloeren en ramen zorgvuldig af met professionele folie om overspray te voorkomen.`
    },
    {
      q: `Is spackspuiten een duurzame afwerking?`,
      a: `Ja. Spackwerk is slijtvast, onderhoudsvriendelijk en blijft jarenlang mooi. Dankzij de structuurlaag zijn kleine oneffenheden minder zichtbaar en blijft de wand langer netjes.`
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
