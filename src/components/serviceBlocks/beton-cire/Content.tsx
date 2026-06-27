import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h2 className="text-3xl font-semibold mt-10 mb-4">{serviceName} in {city} – Luxe, naadloos en waterdicht</h2>
      <p className="mb-4">Op zoek naar professioneel {serviceName.toLowerCase()} in {city}? NexStuc is specialist in het aanbrengen van beton ciré op wanden, vloeren, badkamers en meubels in {city} en omgeving. Beton ciré geeft uw interieur een luxe, industriële uitstraling met een volledig naadloze en waterdichte afwerking.</p>
      <p className="mb-4">Met hoogwaardige materialen en vakmanschap creëren wij een tijdloze betonlook die perfect past in moderne interieurs. Beton ciré is ideaal voor badkamers, keukens, woonruimtes en maatwerk toepassingen in {city}.</p>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Voordelen van {serviceName.toLowerCase()} in {city}</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Volledig naadloze, luxe afwerking</li>
        <li>Waterdicht — ideaal voor natte ruimtes</li>
        <li>Slijtvast en duurzaam</li>
        <li>Breed kleurenpalet beschikbaar</li>
        <li>Geschikt voor wanden, vloeren en meubels</li>
        <li>Onderhoudsvriendelijk en hygiënisch</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Toepassingen in {city}</h3>
      <p className="mb-4">Wij brengen beton ciré aan in badkamers (douches, wanden, vloeren), keukens (achterwanden, werkbladen), woonkamers, op meubels en in commerciële ruimtes in {city}. Neem contact op voor een vrijblijvende offerte en persoonlijk advies.</p>
    </div>
  );
};

export default Content;
