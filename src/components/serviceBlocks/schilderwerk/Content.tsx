import React from "react";

const Content = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h2 className="text-3xl font-semibold mt-10 mb-4">{serviceName} in {city} – Professioneel, duurzaam en strak</h2>
      <p className="mb-4">Op zoek naar professioneel {serviceName.toLowerCase()} in {city}? NexStuc levert hoogwaardig schilderwerk voor woningen en bedrijfspanden in {city} en omgeving. Met premium verven, vakmanschap en oog voor detail zorgen wij voor een duurzame en strakke afwerking.</p>
      <p className="mb-4">Van binnenmuren en plafonds tot kozijnen en houtwerk — wij schilderen alles met precisie en zorg. Het resultaat is een frisse, moderne uitstraling die jarenlang mooi blijft.</p>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Voordelen van {serviceName.toLowerCase()} door NexStuc in {city}</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Strakke, egale afwerking zonder strepen</li>
        <li>Duurzame bescherming van wanden en houtwerk</li>
        <li>Premium verfmerken voor langdurig resultaat</li>
        <li>Kleuradvies op maat voor uw woning in {city}</li>
        <li>Zorgvuldige voorbereiding van elke ondergrond</li>
        <li>Nette, opgeruimde werkwijze</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Onze schilderdiensten in {city}</h3>
      <p className="mb-4">Wij verzorgen binnen schilderwerk, wanden en plafonds, kozijnen en houtwerk, renovatie schilderwerk en schilderwerk na stucwerk. Voor zowel particulieren als zakelijke klanten in {city}. Neem contact op voor een vrijblijvende offerte.</p>
    </div>
  );
};

export default Content;
