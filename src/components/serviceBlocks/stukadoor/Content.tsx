import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {serviceName} in {city} – Vakmanschap dat u ziet en voelt
      </h2>

      <p className="mb-4">
        Op zoek naar een betrouwbare {serviceName.toLowerCase()} in {city}? 
        NexStuc is uw allround specialist voor hoogwaardig stukadoorswerk in 
        {city} en omgeving. Met jarenlange ervaring en gecertificeerde vakmensen 
        leveren wij stucwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré 
        en complete badkamerrenovaties met een afwerking die u ziet én voelt.
      </p>

      <p className="mb-4">
        Wij staan bekend om onze strakke afwerking, duidelijke communicatie en 
        nette werkwijze. Of het nu gaat om een nieuwbouwwoning, renovatieproject 
        of zakelijk pand in {city} — NexStuc garandeert een resultaat dat jarenlang 
        mooi blijft.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Waarom kiezen voor NexStuc als {serviceName.toLowerCase()} in {city}?
      </h3>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Ervaren en gecertificeerde stukadoors</li>
        <li>Strakke, egale afwerking voor wanden en plafonds</li>
        <li>Breed dienstenpakket: stucwerk, latexspuiten, spackspuiten, schilderwerk en meer</li>
        <li>Hoogwaardige materialen en moderne technieken</li>
        <li>Duidelijke afspraken en transparante communicatie</li>
        <li>Netjes en opgeruimd werken — altijd</li>
        <li>100% tevredenheidsgarantie op al ons werk in {city}</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        Onze diensten als {serviceName.toLowerCase()} in {city}
      </h3>

      <p className="mb-4">
        Als allround stukadoor in {city} bieden wij een compleet pakket aan 
        afwerkingsdiensten. Wij adviseren u graag over de beste oplossing voor 
        uw woning of bedrijfspand.
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li><strong>Glad pleisterwerk (sausklaar)</strong> – perfect voor een moderne, strakke uitstraling</li>
        <li><strong>Behangklaar stucwerk</strong> – ideale basis voor behang of renovlies</li>
        <li><strong>Raapwerk</strong> – voor het corrigeren van scheve of ongelijke muren</li>
        <li><strong>Spackspuiten</strong> – snelle, egale structuur voor wanden en plafonds</li>
        <li><strong>Latexspuiten</strong> – streeploze, strakke afwerking met airless spuittechniek</li>
        <li><strong>Schilderwerk</strong> – professioneel binnen- en buitenschilderwerk</li>
        <li><strong>Beton ciré</strong> – luxe, waterdichte afwerking voor badkamers en keukens</li>
        <li><strong>Badkamerrenovatie</strong> – complete renovaties inclusief stucwerk, beton ciré en afwerking</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        {serviceName} voor nieuwbouw en renovatie in {city}
      </h3>

      <p className="mb-4">
        Bij nieuwbouwprojecten in {city} zorgen wij voor een perfecte, scheurvrije 
        afwerking die voldoet aan moderne standaarden. Bij renovaties herstellen 
        wij oneffenheden, scheuren en verouderde afwerkingen en geven uw woning 
        een frisse, moderne uitstraling.
      </p>

      <p className="mb-4">
        Neem vandaag nog contact op voor een vrijblijvende offerte voor 
        {serviceName.toLowerCase()} in {city}. Wij komen graag bij u langs voor 
        een opname en persoonlijk advies.
      </p>

    </div>
  );
};

export default Content;
