import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {serviceName} in {city} – Strak, glad en duurzaam
      </h2>

      <p className="mb-4">
        Bent u op zoek naar professioneel {serviceName.toLowerCase()} in {city}? 
        NexStuc is specialist in hoogwaardig stucwerk voor woningen, nieuwbouwprojecten 
        en renovaties. Of het nu gaat om glad pleisterwerk, sierpleister, raapwerk of 
        cementgebonden stucwerk — wij zorgen voor een strakke, egale en duurzame 
        afwerking die uw interieur naar een hoger niveau tilt.
      </p>

      <p className="mb-4">
        Met jarenlange ervaring en vakbekwame stukadoors leveren wij topkwaliteit 
        {serviceName.toLowerCase()} voor zowel particulieren als zakelijke opdrachtgevers 
        in {city}. Van moderne nieuwbouwwoningen tot karakteristieke renovatieprojecten: 
        NexStuc staat garant voor een perfect resultaat.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Voordelen van {serviceName.toLowerCase()} door NexStuc in {city}
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Strakke, egale wanden en plafonds zonder oneffenheden</li>
        <li>Duurzame afwerking die jarenlang mooi blijft</li>
        <li>Perfecte basis voor schilderwerk, behang of decoratieve afwerkingen</li>
        <li>Verhoogt de waarde en uitstraling van uw woning in {city}</li>
        <li>Professionele technieken voor scheurvrije afwerking</li>
        <li>Netjes en opgeruimd werken — altijd</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Soorten stucwerk in {city}
      </h3>

      <p className="mb-4">
        Wij bieden diverse soorten stucwerk aan in {city}, waaronder:
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li><strong>Glad pleisterwerk (sausklaar)</strong> – perfect voor een moderne, strakke uitstraling</li>
        <li><strong>Behangklaar stucwerk</strong> – ideaal als basis voor behang of renovlies</li>
        <li><strong>Raapwerk</strong> – voor het corrigeren van scheve of ongelijke muren</li>
        <li><strong>Cementgebonden stucwerk</strong> – geschikt voor vochtige ruimtes zoals badkamers</li>
        <li><strong>Sierpleister</strong> – decoratieve afwerking met structuur</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Stucwerk voor nieuwbouw en renovatie in {city}
      </h3>

      <p className="mb-4">
        Of het nu gaat om een nieuwbouwwoning of een renovatieproject in {city} — 
        NexStuc levert altijd een strak en duurzaam resultaat. Bij nieuwbouw zorgen 
        wij voor een scheurvrije afwerking die voldoet aan moderne standaarden. 
        Bij renovaties herstellen wij oneffenheden, scheuren en oude pleisterlagen 
        voor een frisse, moderne uitstraling.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Waarom kiezen voor NexStuc in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Ervaren stukadoors met vakmanschap</li>
        <li>Hoogwaardige materialen en moderne technieken</li>
        <li>Strakke planning en duidelijke communicatie</li>
        <li>Perfecte afwerking met garantie</li>
        <li>Persoonlijk advies op locatie in {city}</li>
      </ul>

      <p className="mb-4">
        Neem vandaag nog contact op voor een vrijblijvende offerte voor 
        {serviceName.toLowerCase()} in {city}. Wij komen graag bij u langs voor 
        een opname en persoonlijk advies.
      </p>

    </div>
  );
};

export default Content;
