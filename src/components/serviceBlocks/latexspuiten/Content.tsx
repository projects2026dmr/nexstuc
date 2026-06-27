import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h2 className="text-3xl font-semibold mt-10 mb-4">{serviceName} in {city} – Streeploos, snel en perfect egaal</h2>
      <p className="mb-4">
        Op zoek naar professioneel {serviceName.toLowerCase()} in {city}? NexStuc is dé specialist in airless latexspuiten voor woningen en bedrijfspanden in {city} en omgeving. Met professionele spuitapparatuur bereiken wij een volledig streeploos, egaal resultaat dat met rollen onmogelijk is.
      </p>
      <p className="mb-4">
        Latexspuiten is de snelste en meest efficiënte manier om wanden en plafonds strak af te werken. Ideaal voor nieuwbouw, na stucwerk of bij een complete renovatie in {city}. Het resultaat? Een moderne, professionele uitstraling die jarenlang mooi blijft.
      </p>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Voordelen van {serviceName.toLowerCase()} in {city}</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Volledig streeploos en egaal resultaat</li>
        <li>Snellere uitvoering dan traditioneel rollen</li>
        <li>Perfecte dekking in 2 lagen</li>
        <li>Geschikt voor wanden én plafonds</li>
        <li>Ideaal na stucwerk of spackspuiten</li>
        <li>Moderne, strakke uitstraling voor uw woning in {city}</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Onze werkwijze voor latexspuiten in {city}</h3>
      <p className="mb-4">
        Wij beginnen met een zorgvuldige voorbereiding: alles wordt afgedekt en afgeplakt. Vervolgens behandelen wij de ondergrond en brengen wij met airless apparatuur twee lagen latex aan voor een dekkend, strak resultaat. Na afloop controleren wij elk detail en ruimen wij netjes op.
      </p>
      <p className="mb-4">
        Vraag vandaag nog een vrijblijvende offerte aan voor {serviceName.toLowerCase()} in {city}. Wij komen graag bij u langs voor een persoonlijk advies.
      </p>
    </div>
  );
};

export default Content;
