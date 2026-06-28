import { LOCATIONS } from "../data/locations";

// Master SEO content for Stukadoor pillar page
export default function StukadoorContent() {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h1 className="text-4xl font-bold mb-6">Stukadoor in Nederland – Strak vakmanschap voor elke woning en elk project</h1>

      <p className="mb-4">
        Bent u op zoek naar een professionele stukadoor in Nederland die staat voor kwaliteit, betrouwbaarheid en een perfect afgewerkte woning? NexStuc is dé specialist in stucwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en complete badkamerrenovaties. Met jarenlange ervaring, moderne technieken en een scherp oog voor detail leveren wij strak vakmanschap in heel Nederland — van Groningen tot Maastricht en alles daartussen.
      </p>

      <p className="mb-4">
        Of het nu gaat om een renovatie, nieuwbouw, verbouwing of een zakelijke opdracht: wij zorgen voor een duurzame, egale en hoogwaardige afwerking die uw interieur naar een hoger niveau tilt.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Waarom een professionele stukadoor essentieel is</h2>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Strakke, egale wanden en plafonds zonder oneffenheden</li>
        <li>Duurzame afwerking die jarenlang mooi blijft</li>
        <li>Betere hechting voor verf, behang of decoratieve afwerkingen</li>
        <li>Hogere woningwaarde door een nette en moderne uitstraling</li>
        <li>Snellere oplevering dankzij professionele apparatuur en technieken</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Onze stukadoorsdiensten in heel Nederland</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-2">1. Traditioneel stucwerk (pleisterwerk)</h3>
      <p className="mb-4">
        Traditioneel stucwerk is de meest gekozen afwerking voor wanden en plafonds. Het zorgt voor een strakke, moderne en tijdloze uitstraling.
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Perfect glad resultaat</li>
        <li>Geschikt voor elke ruimte</li>
        <li>Ideale basis voor schilderwerk</li>
        <li>Brandvertragend en vochtregulerend</li>
        <li>Duurzaam en onderhoudsarm</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">2. Latexspuiten – supersnel en strak resultaat</h3>
      <p className="mb-4">
        Latexspuiten is dé moderne manier om wanden en plafonds strak en egaal te schilderen. Veel sneller en mooier dan rollen.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">3. Spackspuiten – voordelige en nette afwerking</h3>
      <p className="mb-4">
        Spackspuiten is een populaire keuze voor plafonds en wanden in woningen en bedrijfspanden. Snel, betaalbaar en netjes.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">4. Schilderwerk – professioneel en duurzaam</h3>
      <p className="mb-4">
        Onze schilders zorgen voor een hoogwaardige afwerking van uw interieur. Wij werken uitsluitend met professionele verfmerken.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">5. Beton ciré – luxe, modern en waterdicht</h3>
      <p className="mb-4">
        Beton ciré is een stijlvolle, naadloze afwerking die perfect past in moderne interieurs. Ideaal voor badkamers, keukens en woonruimtes.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">6. Badkamerrenovatie – compleet vernieuwd, van A tot Z</h3>
      <p className="mb-4">
        Wij verzorgen volledige badkamerrenovaties inclusief sloopwerk, tegelwerk, beton ciré, stucwerk, sanitair installatie en afwerking.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Onze werkwijze – helder, professioneel en efficiënt</h2>

      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>Kennismaking & opname</li>
        <li>Offerte & planning</li>
        <li>Voorbereiding</li>
        <li>Uitvoering</li>
        <li>Oplevering & nazorg</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Waarom kiezen voor NexStuc?</h2>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Strak vakmanschap</li>
        <li>Ervaren stukadoors</li>
        <li>Actief in heel Nederland</li>
        <li>Transparante prijzen</li>
        <li>Snelle oplevering</li>
        <li>Hoogwaardige materialen</li>
        <li>Perfecte afwerking</li>
        <li>Uitstekende klantbeoordelingen</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Veelgestelde vragen (FAQ)</h2>

      <p className="mb-2 font-semibold">Hoe lang duurt stucwerk?</p>
      <p className="mb-4">Meestal 1–3 dagen, afhankelijk van de ruimte.</p>

      <p className="mb-2 font-semibold">Werken jullie in heel Nederland?</p>
      <p className="mb-4">Ja, wij zijn actief in alle provincies en steden.</p>

      <p className="mb-2 font-semibold">Is een offerte gratis?</p>
      <p className="mb-4">Ja, volledig vrijblijvend.</p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Stukadoor in alle steden</h2>
      <p className="mb-4">NexStuc is actief als stukadoor in heel Nederland. Bekijk onze diensten per stad:</p>
<ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
  {LOCATIONS.map((loc) => (
    <li key={loc.slug}>
      <a
        href={`/stukadoor/${loc.slug}`}
        className="text-brand-600 hover:text-brand-800 underline transition-colors"
      >
        Stukadoor in {loc.city}
      </a>
    </li>
  ))}
</ul>

    </div>
  );
}
