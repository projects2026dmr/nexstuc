import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h2 className="text-3xl font-semibold mt-10 mb-4">{serviceName} in {city} – Compleet, luxe en op maat</h2>
      <p className="mb-4">Op zoek naar een professionele {serviceName.toLowerCase()} in {city}? NexStuc verzorgt complete badkamerrenovaties van A tot Z in {city} en omgeving. Van sloopwerk en sanitair tot tegelwerk, beton ciré, stucwerk en afwerking — wij creëren uw droombadkamer met vakmanschap en oog voor detail.</p>
      <p className="mb-4">Met hoogwaardige materialen, waterdichte systemen en een doordacht ontwerp realiseren wij badkamers die niet alleen prachtig ogen, maar ook functioneel en duurzaam zijn. Of het nu gaat om een compacte badkamer of een luxe spa-ruimte in {city}.</p>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Wat omvat onze {serviceName.toLowerCase()} in {city}?</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Sloop en voorbereiding van de bestaande badkamer</li>
        <li>Installatie van sanitair (douche, bad, toilet, wastafel)</li>
        <li>Wand- en vloertegelwerk of beton ciré afwerking</li>
        <li>Stucwerk en waterdichting</li>
        <li>Elektriciteit, verlichting en ventilatie</li>
        <li>Eindafwerking, kitwerk en styling</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Waarom NexStuc voor uw badkamer in {city}?</h3>
      <p className="mb-4">Wij combineren verschillende specialisaties — stucwerk, beton ciré, tegelwerk en afwerking — in één team. Dat betekent één aanspreekpunt, strakke planning en een perfect eindresultaat. Neem contact op voor een vrijblijvende offerte voor uw {serviceName.toLowerCase()} in {city}.</p>
    </div>
  );
};

export default Content;
