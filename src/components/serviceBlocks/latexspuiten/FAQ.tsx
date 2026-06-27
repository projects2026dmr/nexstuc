import React from "react";

const FAQ = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const faqs = [
    {
      q: `Is ${serviceName.toLowerCase()} beter dan rollen in ${city}?`,
      a: `Ja. Airless latexspuiten levert een veel strakker, egaler en sneller resultaat op dan traditioneel rollen. Dankzij professionele spuitapparatuur ontstaat een volledig streeploze afwerking die ideaal is voor moderne woningen en bedrijfspanden in ${city}.`
    },
    {
      q: `Kan ${serviceName.toLowerCase()} op nieuw stucwerk worden aangebracht?`,
      a: `Ja, mits het stucwerk voldoende is gedroogd (meestal 3–7 dagen) en de juiste voorbehandeling wordt toegepast. Wij zorgen voor een perfecte dekking zonder vlekken, strepen of aanzetten.`
    },
    {
      q: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`,
      a: `Een gemiddelde woning kan binnen 1–2 dagen volledig worden gelatexspoten. Grotere projecten of bedrijfspanden duren doorgaans 2–3 werkdagen, afhankelijk van de oppervlakte en voorbereiding.`
    },
    {
      q: `Moet de ruimte leeg zijn bij ${serviceName.toLowerCase()}?`,
      a: `Het is aan te raden de ruimte zo leeg mogelijk te maken. Wij dekken alle meubels, vloeren, ramen en deuren zorgvuldig af met professionele folie om overspray te voorkomen.`
    },
    {
      q: `Welke voorbereidingen zijn nodig voor ${serviceName.toLowerCase()} in ${city}?`,
      a: `Wij verzorgen alle voorbereidingen: afplakken, afdekken, ondergrondcontrole en eventuele reparaties. U hoeft alleen de ruimte toegankelijk te maken; wij regelen de rest.`
    },
    {
      q: `Is latexspuiten geschikt voor plafonds in ${city}?`,
      a: `Ja. Latexspuiten is ideaal voor plafonds omdat het een volledig egaal en streeploos resultaat geeft zonder rolbanen. Vooral in nieuwbouw en na stucwerk is dit de beste methode.`
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
