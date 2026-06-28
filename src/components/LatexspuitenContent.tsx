import { LOCATIONS } from "../data/locations";

// Master SEO content for Latexspuiten pillar page
export default function LatexspuitenContent() {
  return (
    <div className="prose prose-lg max-w-none text-dark-700">
      <h1 className="text-4xl font-bold mb-6">Latexspuiten in Nederland – Strak, snel en streeploos resultaat</h1>

      <p className="mb-4">
        Latexspuiten is de modernste en meest efficiënte manier om wanden en plafonds strak en egaal af te werken. In tegenstelling tot traditioneel rollen zorgt airless latexspuiten voor een volledig streeploos resultaat, een perfecte dekking en een professionele uitstraling. NexStuc is gespecialiseerd in latexspuiten in heel Nederland — van nieuwbouwwoningen tot renovatieprojecten.
      </p>

      <p className="mb-4">
        Met professionele airless apparatuur, hoogwaardige verf en ervaren vakmensen leveren wij een afwerking die niet te vergelijken is met standaard schilderwerk. Latexspuiten is ideaal voor grote oppervlakken, strakke interieurs en woningen die snel en netjes opgeleverd moeten worden.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Wat is latexspuiten precies?</h2>

      <p className="mb-4">
        Latexspuiten is het machinaal aanbrengen van muurverf met een airless spuitmachine. De verf wordt onder hoge druk verneveld, waardoor deze in een gelijkmatige laag op de ondergrond wordt aangebracht. Dit zorgt voor een superstrak en egaal resultaat zonder strepen of rollerstructuur.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Voordelen van latexspuiten</h2>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Volledig streeploos resultaat</li>
        <li>Snelle uitvoering</li>
        <li>Perfecte dekking</li>
        <li>Moderne, strakke uitstraling</li>
        <li>Ideaal voor grote oppervlakken</li>
        <li>Professionele afwerking</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Onze latexspuitmethoden</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-2">1. Airless latexspuiten</h3>
      <p className="mb-4">
        De meest gebruikte methode voor wanden en plafonds. Door de hoge druk en fijne verneveling ontstaat een volledig egale laag zonder banen of strepen.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">2. Fine‑finish latexspuiten</h3>
      <p className="mb-4">
        Voor extra gladde oppervlakken en luxe interieurs. Ideaal voor moderne woningen en hoogwaardige afwerkingen.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">3. Latexspuiten op nieuw stucwerk</h3>
      <p className="mb-4">
        Nieuw stucwerk vraagt om de juiste voorbehandeling en droogtijd. Wij zorgen voor een perfecte dekking zonder vlekken of zuiging.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Hoe verloopt het latexspuitproces?</h2>

      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>Opname & advies</li>
        <li>Voorbereiding en afplakken</li>
        <li>Ondergrond behandelen</li>
        <li>Airless latexspuiten</li>
        <li>Afwerking & controle</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Latexspuiten in nieuwbouwwoningen</h2>

      <p className="mb-4">
        Nieuwbouwwoningen zijn ideaal voor latexspuiten dankzij de strakke wanden en grote ruimtes. Wij zorgen voor een luxe, moderne afwerking die perfect aansluit bij nieuwbouwstandaarden.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Latexspuiten in renovatieprojecten</h2>

      <p className="mb-4">
        Bij renovaties herstellen wij oneffenheden, oude verflagen en scheuren zodat de ondergrond perfect geschikt is voor latexspuiten. Het resultaat is een frisse, moderne uitstraling.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Latexspuiten op plafonds</h2>

      <p className="mb-4">
        Plafonds zijn lastig om mooi te schilderen met een roller. Latexspuiten voorkomt strepen, aanzetten en kleurverschillen en zorgt voor een volledig egaal oppervlak.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Waarom kiezen voor NexStuc?</h2>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Strak, streeploos resultaat</li>
        <li>Professionele airless apparatuur</li>
        <li>Ervaren spuitteams</li>
        <li>Actief in heel Nederland</li>
        <li>Snelle en nette uitvoering</li>
        <li>Hoogwaardige verfsoorten</li>
        <li>Uitstekende klantbeoordelingen</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Veelgestelde vragen (FAQ)</h2>

      <p className="mb-2 font-semibold">Is latexspuiten beter dan rollen?</p>
      <p className="mb-4">Ja, het resultaat is strakker, egaler en sneller klaar.</p>

      <p className="mb-2 font-semibold">Kan latexspuiten op nieuw stucwerk?</p>
      <p className="mb-4">Ja, mits de juiste voorbehandeling wordt toegepast.</p>

      <p className="mb-2 font-semibold">Werken jullie in heel Nederland?</p>
      <p className="mb-4">Ja, wij zijn actief in alle provincies en steden.</p>

      <p className="mb-2 font-semibold">Is een offerte gratis?</p>
      <p className="mb-4">Ja, volledig vrijblijvend.</p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">Latexspuiten in alle steden</h2>
      <p className="mb-4">NexStuc verzorgt professioneel latexspuiten in heel Nederland. Bekijk onze diensten per stad:</p>
<ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
  {LOCATIONS.map((loc) => (
    <li key={loc.slug}>
      <a
        href={`/latexspuiten/${loc.slug}`}
        className="text-brand-600 hover:text-brand-800 underline transition-colors"
      >
        Latexspuiten in {loc.city}
      </a>
    </li>
  ))}
</ul>

    </div>
  );
}
