import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {serviceName} in {city} – Luxe, naadloos en volledig waterdicht
      </h2>

      <p className="mb-4">
        Op zoek naar professioneel aangebracht {serviceName.toLowerCase()} in {city}? 
        NexStuc is specialist in hoogwaardige beton ciré afwerkingen voor badkamers, keukens, 
        wanden, vloeren en maatwerk meubels. Beton ciré geeft uw interieur een moderne, 
        minimalistische en luxe uitstraling met een volledig naadloze en waterdichte afwerking.
      </p>

      <p className="mb-4">
        Wij werken uitsluitend met premium materialen en gecertificeerde waterdichte systemen. 
        Hierdoor is beton ciré ideaal voor natte ruimtes zoals douches, badkamers en keukens, 
        maar ook voor woonruimtes, commerciële projecten en maatwerk toepassingen in {city}.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Voordelen van {serviceName.toLowerCase()} in {city}
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Volledig naadloze afwerking zonder voegen</li>
        <li>Waterdicht en schimmelbestendig – ideaal voor badkamers</li>
        <li>Slijtvast, duurzaam en geschikt voor intensief gebruik</li>
        <li>Modern, luxe en tijdloos design</li>
        <li>Breed kleurenpalet en verschillende structuren beschikbaar</li>
        <li>Geschikt voor wanden, vloeren, meubels en maatwerk</li>
        <li>Onderhoudsvriendelijk en hygiënisch</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Toepassingen van beton ciré in {city}
      </h3>

      <p className="mb-4">
        Beton ciré is veelzijdig en kan in vrijwel elke ruimte worden toegepast. 
        In {city} brengen wij beton ciré aan in:
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Badkamers: douches, wanden, vloeren, nissen</li>
        <li>Keukens: achterwanden, werkbladen, kookeilanden</li>
        <li>Woonkamers: accentwanden, haardwanden</li>
        <li>Commerciële ruimtes: winkels, horeca, kantoren</li>
        <li>Maatwerk meubels: tafels, tv-meubels, badkamermeubels</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Waarom kiezen voor NexStuc in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Gecertificeerde beton ciré specialisten</li>
        <li>Premium materialen en waterdichte systemen</li>
        <li>Strakke planning en duidelijke communicatie</li>
        <li>Perfecte afwerking met garantie</li>
        <li>Advies op maat voor kleur, structuur en toepassing</li>
      </ul>

      <p className="mb-4">
        Neem contact op voor een vrijblijvende offerte voor luxe 
        {serviceName.toLowerCase()} in {city}. Wij adviseren u graag over de beste 
        afwerking voor uw ruimte.
      </p>

    </div>
  );
};

export default Content;
