import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {serviceName} in {city} – Streeploos, snel en perfect egaal
      </h2>

      <p className="mb-4">
        Op zoek naar professioneel {serviceName.toLowerCase()} in {city}? 
        NexStuc is specialist in airless latexspuiten voor woningen, nieuwbouwprojecten 
        en bedrijfspanden. Met geavanceerde spuitapparatuur realiseren wij een volledig 
        streeploos, egaal en strak resultaat dat met rollen simpelweg niet haalbaar is.
      </p>

      <p className="mb-4">
        Latexspuiten is de snelste en meest efficiënte manier om wanden en plafonds 
        strak af te werken. Ideaal na stucwerk, bij renovaties of voor een complete 
        restyling van uw woning in {city}. Het resultaat is een moderne, professionele 
        afwerking die jarenlang mooi blijft.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Voordelen van {serviceName.toLowerCase()} in {city}
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Volledig streeploos en egaal resultaat</li>
        <li>Snellere uitvoering dan traditioneel rollen</li>
        <li>Perfecte dekking in slechts 2 lagen</li>
        <li>Geschikt voor wanden én plafonds</li>
        <li>Ideaal na stucwerk of spackspuiten</li>
        <li>Moderne, strakke uitstraling voor uw woning in {city}</li>
        <li>Professionele apparatuur voor een consistente afwerking</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Onze werkwijze voor latexspuiten in {city}
      </h3>

      <p className="mb-4">
        Wij beginnen met een zorgvuldige voorbereiding: afplakken, afdekken en het 
        controleren van de ondergrond. Vervolgens brengen wij met professionele airless 
        apparatuur twee lagen latex aan voor een perfect dekkend en strak resultaat. 
        Na afloop controleren wij elk detail en ruimen wij alles netjes op.
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Afplakken en volledige bescherming van meubels en vloeren</li>
        <li>Voorbehandeling van wanden en plafonds</li>
        <li>Airless spuiten voor een strak, egaal oppervlak</li>
        <li>Controle van dekking, hoeken en details</li>
        <li>Netjes opruimen en oplevering</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Waarom kiezen voor NexStuc in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Specialist in airless latexspuiten</li>
        <li>Strakke planning en snelle uitvoering</li>
        <li>Hoogwaardige materialen en professionele apparatuur</li>
        <li>Perfecte afwerking met garantie</li>
        <li>Advies op maat voor kleur, dekking en afwerking</li>
      </ul>

      <p className="mb-4">
        Vraag vandaag nog een vrijblijvende offerte aan voor 
        {serviceName.toLowerCase()} in {city}. Wij komen graag bij u langs voor 
        een persoonlijk advies en een nauwkeurige prijsopgave.
      </p>

    </div>
  );
};

export default Content;
