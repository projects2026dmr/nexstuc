import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      
      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {serviceName} in {city} – Luxe, duurzaam en volledig op maat
      </h2>

      <p className="mb-4">
        Op zoek naar een hoogwaardige {serviceName.toLowerCase()} in {city}? 
        NexStuc realiseert complete badkamerrenovaties van A tot Z. 
        Wij combineren vakmanschap, moderne materialen en waterdichte systemen 
        om een badkamer te creëren die jarenlang mooi blijft.
      </p>

      <p className="mb-4">
        Van sloopwerk en leidingwerk tot tegelwerk, beton ciré, stucwerk en afwerking: 
        ons team verzorgt elke stap met precisie. 
        Of u nu een compacte badkamer wilt optimaliseren of een luxe wellnessruimte 
        wilt creëren in {city}, wij leveren een perfect eindresultaat.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Wat omvat onze {serviceName.toLowerCase()} in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Sloop en voorbereiding van de bestaande badkamer</li>
        <li>Installatie van sanitair (douche, bad, toilet, wastafel)</li>
        <li>Wand- en vloertegelwerk of beton ciré afwerking</li>
        <li>Waterdichting volgens moderne systemen</li>
        <li>Stucwerk voor wanden en plafonds</li>
        <li>Elektriciteit, verlichting en ventilatie</li>
        <li>Eindafwerking, kitwerk en styling</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Waarom kiezen voor NexStuc in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Één team voor stucwerk, tegelwerk, beton ciré en afwerking</li>
        <li>Strakke planning en duidelijke communicatie</li>
        <li>Hoogwaardige materialen en waterdichte systemen</li>
        <li>Vakmanschap met garantie op alle werkzaamheden</li>
        <li>Specialist in zowel kleine als luxe badkamers</li>
      </ul>

      <p className="mb-4">
        Neem contact op voor een vrijblijvende offerte voor uw 
        {serviceName.toLowerCase()} in {city}. 
        Wij denken graag met u mee over indeling, materiaalkeuze en afwerking.
      </p>
    </div>
  );
};

export default Content;
