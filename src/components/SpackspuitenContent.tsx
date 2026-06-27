import { LOCATIONS } from "../data/locations";

// Master SEO content for Spackspuiten pillar page
export default function SpackspuitenContent() {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h1 className="text-4xl font-bold mb-6">Spackspuiten in Nederland – Snel, strak en duurzaam</h1>

      <p className="mb-4">
        Spackspuiten is één van de meest efficiënte en populaire manieren om wanden en plafonds netjes en egaal af te werken. Dankzij de snelle uitvoering, nette structuur en moderne uitstraling is spackspuitwerk ideaal voor zowel nieuwbouwwoningen als renovatieprojecten. NexStuc is gespecialiseerd in professioneel spackspuiten in heel Nederland.
      </p>

      <p className="mb-4">
        Met moderne spuitapparatuur, hoogwaardige materialen en ervaren vakmensen leveren wij een strak en duurzaam resultaat dat jarenlang mooi blijft. Spackspuitwerk is geschikt voor vrijwel elke ruimte en biedt een nette, onderhoudsvriendelijke afwerking.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Wat is spackspuiten?</h2>

      <p className="mb-4">
        Spackspuiten is een machinale afwerking waarbij een pleisterlaag onder hoge druk op wanden of plafonds wordt gespoten. Het bestaat uit twee lagen: een grondlaag die de ondergrond egaliseert en een afwerklaag die de uiteindelijke structuur bepaalt.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Voordelen van spackspuiten</h2>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Snelle uitvoering</li>
        <li>Strakke en egale structuur</li>
        <li>Geschikt voor wanden én plafonds</li>
        <li>Onderhoudsvriendelijk en slijtvast</li>
        <li>Ideaal voor nieuwbouw en renovatie</li>
        <li>In verschillende structuren mogelijk</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Soorten spackstructuren</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-2">1. Fijne structuur</h3>
      <p className="mb-4">
        Een subtiele, moderne korrel die perfect past in woonkamers, slaapkamers en andere leefruimtes.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">2. Middelfijne structuur</h3>
      <p className="mb-4">
        De meest gekozen structuur. Een mooie balans tussen strak en karakter.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">3. Grove structuur</h3>
      <p className="mb-4">
        Een decoratieve, robuuste uitstraling. Geschikt voor grotere ruimtes of bedrijfspanden.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Hoe verloopt het spackspuitproces?</h2>

      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>Opname & advies</li>
        <li>Voorbereiding en afplakken</li>
        <li>Ondergrond herstellen en voorstrijken</li>
        <li>Grondlaag spuiten</li>
        <li>Structuurlaag spuiten</li>
        <li>Afwerking & controle</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Spackspuiten in nieuwbouwwoningen</h2>

      <p className="mb-4">
        Nieuwbouwwoningen zijn ideaal voor spackspuitwerk dankzij de strakke wanden en grote oppervlakken. Wij zorgen voor een nette, egale afwerking die perfect aansluit bij moderne nieuwbouwstandaarden.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Spackspuiten in renovatieprojecten</h2>

      <p className="mb-4">
        Bij renovaties herstellen wij scheuren, oneffenheden en slechte hechting zodat het spackwerk perfect hecht en egaal wordt. Het resultaat is een frisse, moderne uitstraling.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Spackspuiten op plafonds</h2>

      <p className="mb-4">
        Plafonds zijn lastig om mooi te schilderen of te stucen. Spackspuiten voorkomt strepen, aanzetten en kleurverschillen en zorgt voor een volledig egale structuur.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Waarom kiezen voor NexStuc?</h2>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Professionele spuitapparatuur</li>
        <li>Ervaren spackspuitteams</li>
        <li>Actief in heel Nederland</li>
        <li>Snelle en nette uitvoering</li>
        <li>Strakke en egale structuur</li>
        <li>Hoogwaardige materialen</li>
        <li>Uitstekende klantbeoordelingen</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Veelgestelde vragen (FAQ)</h2>

      <p className="mb-2 font-semibold">Is spackspuiten geschikt voor elke woning?</p>
      <p className="mb-4">Ja, voor zowel nieuwbouw als renovatie.</p>

      <p className="mb-2 font-semibold">Kan spackspuitwerk over bestaand stucwerk?</p>
      <p className="mb-4">Ja, mits de ondergrond geschikt is.</p>

      <p className="mb-2 font-semibold">Is spackwerk overschilderbaar?</p>
      <p className="mb-4">Ja, spackwerk kan later worden geschilderd.</p>

      <p className="mb-2 font-semibold">Werken jullie in heel Nederland?</p>
      <p className="mb-4">Ja, wij zijn actief in alle provincies en steden.</p>

      <p className="mb-2 font-semibold">Is een offerte gratis?</p>
      <p className="mb-4">Ja, volledig vrijblijvend.</p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Spackspuiten in alle steden</h2>
      <p className="mb-4">NexStuc verzorgt professioneel spackspuiten in heel Nederland. Bekijk onze diensten per stad:</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        {LOCATIONS.map((loc) => (
          <li key={loc.slug}>
            <a href={`#/spackspuiten/${loc.slug}`} className="text-brand-600 hover:text-brand-800 underline transition-colors">
              Spackspuiten in {loc.city}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
