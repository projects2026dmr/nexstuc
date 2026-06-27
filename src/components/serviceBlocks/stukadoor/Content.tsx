import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h2 className="text-3xl font-semibold mt-10 mb-4">{serviceName} in {city} – Vakmanschap dat u ziet en voelt</h2>
      <p className="mb-4">
        Op zoek naar een betrouwbare {serviceName.toLowerCase()} in {city}? NexStuc is uw partner voor alle stukadoorswerk in {city} en omgeving. Met jarenlange ervaring en een team van gecertificeerde vakmensen leveren wij stucwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en complete badkamerrenovaties van de hoogste kwaliteit.
      </p>
      <p className="mb-4">
        Wij staan bekend om onze strakke afwerking, duidelijke communicatie en nette werkwijze. Of het nu gaat om een nieuwbouwwoning, een renovatieproject of een zakelijk pand in {city} — NexStuc staat garant voor een resultaat waar u jarenlang van geniet.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Waarom NexStuc als {serviceName.toLowerCase()} in {city}?</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Ervaren en gecertificeerde stukadoors</li>
        <li>Strakke, egale afwerking voor wanden en plafonds</li>
        <li>Breed dienstenpakket: stucwerk, latex, spack, schilderwerk en meer</li>
        <li>Duidelijke afspraken en transparante communicatie</li>
        <li>Netjes en opgeruimd werken — altijd</li>
        <li>Scherpe prijzen zonder verborgen kosten</li>
        <li>100% tevredenheidsgarantie op al ons werk in {city}</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Onze diensten als {serviceName.toLowerCase()} in {city}</h3>
      <p className="mb-4">
        Als allround stukadoor in {city} bieden wij een compleet pakket aan afwerkingsdiensten. Van glad pleisterwerk en spackspuiten tot latexspuiten, professioneel schilderwerk, luxe beton ciré en volledige badkamerrenovaties. Wij adviseren u graag over de beste oplossing voor uw project.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">{serviceName} voor nieuwbouw en renovatie in {city}</h3>
      <p className="mb-4">
        Bij nieuwbouwprojecten in {city} zorgen wij voor een perfecte afwerking die aansluit bij de nieuwste standaarden. Bij renovaties herstellen wij oneffenheden, scheuren en verouderde afwerkingen en geven uw woning een frisse, moderne uitstraling. Neem vandaag nog contact op voor een vrijblijvende offerte.
      </p>
    </div>
  );
};

export default Content;
