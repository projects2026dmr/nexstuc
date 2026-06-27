import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {serviceName} in {city} – Professioneel, duurzaam en strak afgewerkt
      </h2>

      <p className="mb-4">
        Op zoek naar hoogwaardig {serviceName.toLowerCase()} in {city}? 
        NexStuc levert professioneel schilderwerk voor woningen, appartementen, 
        bedrijfspanden en renovatieprojecten. Met premium verfmerken, vakmanschap 
        en oog voor detail zorgen wij voor een duurzame, strakke en moderne afwerking 
        die jarenlang mooi blijft.
      </p>

      <p className="mb-4">
        Van binnenmuren en plafonds tot kozijnen, deuren en houtwerk — wij schilderen 
        alles met precisie. Dankzij een zorgvuldige voorbereiding en professionele 
        technieken realiseren wij een egale, streeploze afwerking die past bij elke 
        stijl en interieur in {city}.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Voordelen van {serviceName.toLowerCase()} door NexStuc in {city}
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Strakke, egale afwerking zonder strepen of banen</li>
        <li>Duurzame bescherming van wanden, plafonds en houtwerk</li>
        <li>Premium verfmerken zoals Sigma, Sikkens en Flexa</li>
        <li>Kleuradvies op maat voor uw woning in {city}</li>
        <li>Zorgvuldige voorbereiding van elke ondergrond</li>
        <li>Professionele technieken voor langdurig resultaat</li>
        <li>Nette, opgeruimde werkwijze</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Onze schilderdiensten in {city}
      </h3>

      <p className="mb-4">
        Wij verzorgen een breed scala aan schilderdiensten voor particulieren en 
        zakelijke klanten in {city}. Onze werkzaamheden omvatten:
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Binnen schilderwerk: wanden, plafonds, trappen, hallen</li>
        <li>Kozijnen, deuren en houtwerk met duurzame lakken</li>
        <li>Renovatie schilderwerk voor oudere woningen</li>
        <li>Schilderwerk na stucwerk of latexspuiten</li>
        <li>Kleuradvies en materiaaladvies op maat</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Waarom kiezen voor NexStuc in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Ervaren schilders met oog voor detail</li>
        <li>Gebruik van premium verven voor langdurige kwaliteit</li>
        <li>Strakke planning en duidelijke communicatie</li>
        <li>Perfecte afwerking met garantie</li>
        <li>Advies op maat voor kleur, stijl en materiaal</li>
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
