import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h2 className="text-3xl font-semibold mt-10 mb-4">{serviceName} in {city} – Snel, strak en betaalbaar</h2>
      <p className="mb-4">Op zoek naar professioneel {serviceName.toLowerCase()} in {city}? NexStuc levert hoogwaardig spackspuitwerk voor woningen en bedrijfspanden in {city} en omgeving. Spackspuiten is een snelle, efficiënte en betaalbare manier om wanden en plafonds een nette, egale structuur te geven.</p>
      <p className="mb-4">Met moderne spuitapparatuur en ervaren vakmensen zorgen wij voor een strak resultaat dat jarenlang mooi blijft. Kies uit fijne, middelfijne of grove structuren — wij adviseren u graag over de beste optie voor uw interieur in {city}.</p>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Voordelen van {serviceName.toLowerCase()} in {city}</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Snelle uitvoering — grote oppervlakken in korte tijd</li>
        <li>Strakke, egale structuur zonder oneffenheden</li>
        <li>Geschikt voor wanden én plafonds</li>
        <li>Onderhoudsvriendelijk en slijtvast</li>
        <li>Diverse structuren mogelijk (fijn, middel, grof)</li>
        <li>Ideale basis voor latexspuiten of schilderwerk</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-6 mb-2">{serviceName} voor nieuwbouw en renovatie in {city}</h3>
      <p className="mb-4">Of het nu gaat om een nieuwbouwwoning of een renovatieproject in {city} — spackspuiten is altijd een uitstekende keuze. Wij herstellen oneffenheden, behandelen de ondergrond en brengen een perfect egale structuurlaag aan. Neem contact op voor een vrijblijvende offerte.</p>
    </div>
  );
};

export default Content;
