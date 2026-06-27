import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {serviceName} in {city} – Snel, strak en betaalbaar
      </h2>

      <p className="mb-4">
        Op zoek naar professioneel {serviceName.toLowerCase()} in {city}? 
        NexStuc levert hoogwaardig spackspuitwerk voor woningen, nieuwbouwprojecten 
        en bedrijfspanden. Spackspuiten is een snelle, efficiënte en betaalbare manier 
        om wanden en plafonds een nette, egale structuur te geven — ideaal voor zowel 
        renovatie als nieuwbouw in {city}.
      </p>

      <p className="mb-4">
        Met moderne spuitapparatuur en ervaren vakmensen realiseren wij een strak, 
        slijtvast en onderhoudsvriendelijk resultaat dat jarenlang mooi blijft. 
        U kunt kiezen uit fijne, middelfijne of grove structuren. Wij adviseren u 
        graag over de beste structuur voor uw interieur in {city}.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Voordelen van {serviceName.toLowerCase()} in {city}
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Snelle uitvoering — grote oppervlakken in korte tijd</li>
        <li>Strakke, egale structuur zonder oneffenheden</li>
        <li>Geschikt voor wanden én plafonds</li>
        <li>Onderhoudsvriendelijk en slijtvast</li>
        <li>Diverse structuren mogelijk (fijn, middel, grof)</li>
        <li>Ideale basis voor latexspuiten of schilderwerk</li>
        <li>Perfecte dekking dankzij professionele spuitapparatuur</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Onze werkwijze voor spackspuiten in {city}
      </h3>

      <p className="mb-4">
        Wij beginnen met een zorgvuldige voorbereiding van de ondergrond: 
        oneffenheden herstellen, afplakken en volledige bescherming van vloeren 
        en meubels. Vervolgens brengen wij met professionele spuitapparatuur een 
        egale structuurlaag aan. Na afloop controleren wij elk detail en ruimen 
        wij alles netjes op.
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Herstellen van oneffenheden en voorbereiding van de ondergrond</li>
        <li>Afplakken en bescherming van alle oppervlakken</li>
        <li>Spuiten van structuurlaag in gewenste korrelgrootte</li>
        <li>Controle van dekking, hoeken en details</li>
        <li>Netjes opruimen en oplevering</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Waarom kiezen voor NexStuc in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Ervaren spackspuiters met professionele apparatuur</li>
        <li>Strakke planning en snelle uitvoering</li>
        <li>Hoogwaardige materialen voor duurzaam resultaat</li>
        <li>Perfecte afwerking met garantie</li>
        <li>Advies op maat voor structuur, toepassing en afwerking</li>
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
