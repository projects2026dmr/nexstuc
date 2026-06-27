// Service data for NexStuc - used across homepage and pillar pages
// Each service maps to a pillar page URL for programmatic SEO

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  benefits: string[];
  applications: string[];
  faq: { question: string; answer: string }[];
  introText: string;
}

export const services: Service[] = [
  {
    slug: "stukadoor",
    title: "Stukadoor",
    shortTitle: "Stukadoor",
    icon: "🏗️",
    description:
      "Onze ervaren stukadoors zorgen voor een strakke, vlakke afwerking van uw muren en plafonds. Van nieuwbouw tot renovatie – wij leveren vakmanschap dat u ziet en voelt.",
    heroTitle: "Stukadoor in Nederland",
    heroDescription:
      "NexStuc levert professioneel stukadoorswerk door heel Nederland. Van nieuwbouw tot renovatie, onze vakbekwame stukadoors staan voor u klaar.",
    introText:
      "Bent u op zoek naar een betrouwbare stukadoor? NexStuc is uw partner voor alle stukadoorswerk in Nederland. Met jarenlange ervaring en oog voor detail zorgen wij voor een perfecte afwerking van uw wanden en plafonds. Of het nu gaat om een nieuwe woning, een kantoorpand of een renovatieproject – onze stukadoors leveren altijd topkwaliteit.",
    benefits: [
      "Strakke en duurzame afwerking",
      "Ervaren en gecertificeerde vakmensen",
      "Werkzaam door heel Nederland",
      "Scherpe prijzen zonder verborgen kosten",
      "Persoonlijk advies en maatwerk",
      "Netjes en opgeruimd werken",
    ],
    applications: [
      "Nieuwbouw woningen en appartementen",
      "Renovatie van bestaande panden",
      "Kantoren en bedrijfsruimten",
      "Plafonds en wanden",
      "Binnen- en buitenstucwerk",
    ],
    faq: [
      {
        question: "Wat kost een stukadoor per m²?",
        answer:
          "De kosten variëren tussen €15 en €35 per m², afhankelijk van het type stucwerk, de staat van de ondergrond en de grootte van het project. Neem contact op voor een vrijblijvende offerte op maat.",
      },
      {
        question: "Hoe lang duurt het stucen van een woning?",
        answer:
          "Een gemiddelde woonkamer is binnen 1-2 dagen gestuct. Een volledige woning duurt doorgaans 3-5 werkdagen, afhankelijk van de grootte en het type afwerking.",
      },
      {
        question: "Werken jullie door heel Nederland?",
        answer:
          "Ja, NexStuc is actief in heel Nederland. Van Amsterdam tot Maastricht, van Groningen tot Eindhoven – wij komen graag bij u langs.",
      },
    ],
  },
  {
    slug: "stucwerk",
    title: "Stucwerk",
    shortTitle: "Stucwerk",
    icon: "🧱",
    description:
      "Professioneel stucwerk voor een gladde, strakke uitstraling. Wij werken met hoogwaardige materialen en moderne technieken voor een duurzaam resultaat.",
    heroTitle: "Stucwerk door heel Nederland",
    heroDescription:
      "Professioneel stucwerk voor woningen en bedrijfspanden. NexStuc levert strak, duurzaam stucwerk met oog voor detail.",
    introText:
      "Stucwerk is de basis voor een mooie, strakke afwerking van uw interieur. Bij NexStuc combineren we traditioneel vakmanschap met moderne technieken om het perfecte resultaat te bereiken. Of u nu kiest voor glad pleisterwerk, sierpleister of een structuurafwerking – wij adviseren u graag over de beste oplossing voor uw situatie.",
    benefits: [
      "Glad en strak resultaat",
      "Keuze uit diverse afwerkingen",
      "Duurzame materialen van topkwaliteit",
      "Geschikt voor nieuwbouw en renovatie",
      "Snelle en efficiënte uitvoering",
      "Stofvrij en netjes werken",
    ],
    applications: [
      "Woonkamers en slaapkamers",
      "Keukens en badkamers",
      "Kantoorruimten",
      "Plafonds en scheidingswanden",
      "Trappenhuizen en hallen",
    ],
    faq: [
      {
        question: "Wat is het verschil tussen stucwerk en pleisterwerk?",
        answer:
          "Stucwerk is de verzamelnaam voor het aanbrengen van een pleisterlaag op muren en plafonds. Pleisterwerk is een specifieke techniek binnen stucwerk waarbij een dunne laag wordt aangebracht voor een gladde afwerking.",
      },
      {
        question: "Hoe lang moet stucwerk drogen?",
        answer:
          "Stucwerk heeft gemiddeld 24-48 uur nodig om te drogen voordat het geschuurd kan worden. Volledige uitharding duurt circa 4 weken. Pas daarna kunt u het stucwerk schilderen.",
      },
      {
        question: "Kan stucwerk over behang heen?",
        answer:
          "Wij raden aan om behang eerst te verwijderen voor het beste resultaat. Stucwerk hecht beter op een schone, stabiele ondergrond. Onze vakmensen bereiden de muur zorgvuldig voor.",
      },
    ],
  },
  {
    slug: "latexspuiten",
    title: "Latexspuiten",
    shortTitle: "Latexspuiten",
    icon: "🎨",
    description:
      "Latexspuiten is de snelste manier voor een egale, professionele afwerking van muren en plafonds. Ideaal voor nieuwbouw en renovatieprojecten.",
    heroTitle: "Latexspuiten in heel Nederland",
    heroDescription:
      "Snel, efficiënt en een perfect egaal resultaat. NexStuc is specialist in latexspuiten voor woningen en bedrijfspanden door heel Nederland.",
    introText:
      "Latexspuiten is een moderne, efficiënte techniek om muren en plafonds in één keer een strakke afwerking te geven. Met professionele spuitapparatuur brengen wij een egale laag latex aan – sneller en gelijkmatiger dan traditioneel rollen of verven. Het resultaat? Een vlekkeloze, uniforme afwerking die er jarenlang mooi uitziet.",
    benefits: [
      "Snelle uitvoering – grote oppervlakken in korte tijd",
      "Egaal en vlekkeloos resultaat",
      "Geschikt voor muren én plafonds",
      "Minder verfverlies dan traditioneel schilderen",
      "Diverse kleuren en afwerkingen mogelijk",
      "Ideaal voor nieuwbouw en na stucwerk",
    ],
    applications: [
      "Nieuwbouwwoningen en appartementen",
      "Na stucwerk of spackspuiten",
      "Kantoren en commerciële ruimten",
      "Plafonds (ook schuin)",
      "Grote renovatieprojecten",
    ],
    faq: [
      {
        question: "Wat is het verschil tussen latexspuiten en latex rollen?",
        answer:
          "Bij latexspuiten wordt de verf met een professioneel spuitsysteem aangebracht, wat een veel egaler resultaat geeft dan rollen. Het is ook aanzienlijk sneller, vooral bij grote oppervlakken.",
      },
      {
        question: "Moet de ruimte leeg zijn bij latexspuiten?",
        answer:
          "Het is aan te raden de ruimte zo leeg mogelijk te maken. Wij dekken alles zorgvuldig af met folie om meubels en vloeren te beschermen tegen overspray.",
      },
      {
        question: "Hoeveel lagen latex zijn nodig?",
        answer:
          "Doorgaans brengen wij 2 lagen aan voor een dekkend, egaal resultaat. Op donkere of onregelmatige ondergronden kan een extra laag nodig zijn.",
      },
    ],
  },
  {
    slug: "spackspuiten",
    title: "Spackspuiten",
    shortTitle: "Spackspuiten",
    icon: "💨",
    description:
      "Spackspuiten geeft uw plafonds en wanden een fijne, egale structuur. Perfect als basis voor latex of als definitieve afwerking.",
    heroTitle: "Spackspuiten door heel Nederland",
    heroDescription:
      "Professioneel spackspuiten voor een egale structuurafwerking. NexStuc levert perfect spackwerk voor woningen en bedrijfspanden.",
    introText:
      "Spackspuiten is een veelgebruikte techniek om plafonds en wanden een subtiele, egale structuur te geven. Het verbergt kleine oneffenheden en biedt een mooie basis voor verdere afwerking. Bij NexStuc gebruiken we professionele apparatuur en hoogwaardige spackmaterialen voor een resultaat waar u jarenlang van geniet.",
    benefits: [
      "Verbergt kleine oneffenheden en scheurtjes",
      "Egale structuur over het hele oppervlak",
      "Snelle verwerking van grote oppervlakken",
      "Goede basis voor latex of verf",
      "Diverse structuren mogelijk (fijn tot grof)",
      "Betaalbare afwerkingstechniek",
    ],
    applications: [
      "Plafonds in woonkamers en slaapkamers",
      "Wanden in nieuwbouw",
      "Kantoor- en bedrijfsruimten",
      "Garageplafonds",
      "Als basis voor latexspuiten",
    ],
    faq: [
      {
        question: "Wat is het verschil tussen spackspuiten en stucwerk?",
        answer:
          "Bij spackspuiten wordt een dunne laag spack op het oppervlak gespoten, wat een lichte structuur geeft. Stucwerk resulteert in een glad, vlak oppervlak. Spackspuiten is over het algemeen goedkoper.",
      },
      {
        question: "Kan spackspuitwerk overgeschilderd worden?",
        answer:
          "Ja, na droging (circa 24 uur) kunt u het spackwerk overschilderen of latexen. Veel klanten kiezen voor een combinatie van spackspuiten en latexspuiten.",
      },
      {
        question: "Hoe lang duurt spackspuiten?",
        answer:
          "Een gemiddelde woning kan in 1-2 dagen volledig gespackspoten worden. De exacte duur hangt af van de grootte en het aantal ruimten.",
      },
    ],
  },
  {
    slug: "schilderwerk",
    title: "Schilderwerk",
    shortTitle: "Schilderwerk",
    icon: "🖌️",
    description:
      "Van binnenuit tot buitenom – ons schilderwerk staat garant voor een perfecte afwerking. Wij werken met premium verven voor een duurzaam resultaat.",
    heroTitle: "Schilderwerk in heel Nederland",
    heroDescription:
      "Professioneel schilderwerk voor binnen en buiten. NexStuc schildert uw woning of bedrijfspand met oog voor detail en duurzame materialen.",
    introText:
      "Een goede schilder maakt het verschil. Bij NexStuc werken we uitsluitend met premium verven en lakken voor een resultaat dat er niet alleen mooi uitziet, maar ook jarenlang meegaat. Van het schilderen van binnenmuren tot het beschermen van buitengevels – onze schilders combineren vakmanschap met efficiëntie.",
    benefits: [
      "Premium verven en lakken",
      "Binnen- en buitenschilderwerk",
      "Kleuradvies op maat",
      "Zorgvuldige voorbereiding van ondergronden",
      "Nette afwerking tot in detail",
      "Duurzaam resultaat met garantie",
    ],
    applications: [
      "Binnenmuren en plafonds",
      "Buitengevels en kozijnen",
      "Houtwerk en metaalwerk",
      "Trappenhuizen en hallen",
      "Commerciële panden",
    ],
    faq: [
      {
        question: "Welke verven gebruiken jullie?",
        answer:
          "Wij werken met premium merken zoals Sigma, Sikkens en Flexa. De keuze hangt af van de toepassing en uw wensen. Wij adviseren u graag over de beste optie.",
      },
      {
        question: "Hoe bereiden jullie de muren voor?",
        answer:
          "Een goede voorbereiding is essentieel. Wij reinigen, schuren, plamuren en gronderen de ondergrond voordat we beginnen met schilderen. Zo garanderen wij een optimale hechting.",
      },
      {
        question: "Doen jullie ook buitenschilderwerk?",
        answer:
          "Ja, wij verzorgen ook buitenschilderwerk inclusief kozijnen, deuren, gevels en dakgoten. We gebruiken weerbestendige verven voor langdurige bescherming.",
      },
    ],
  },
  {
    slug: "beton-cire",
    title: "Beton ciré",
    shortTitle: "Beton ciré",
    icon: "🪨",
    description:
      "Beton ciré geeft uw interieur een industriële, luxe uitstraling. Geschikt voor vloeren, wanden, badkamers en aanrechtbladen.",
    heroTitle: "Beton ciré specialist in Nederland",
    heroDescription:
      "Beton ciré voor een luxe, industriële look. NexStuc brengt beton ciré aan op vloeren, wanden en in badkamers door heel Nederland.",
    introText:
      "Beton ciré is een veelzijdige afwerking die uw interieur een stijlvolle, industriële uitstraling geeft. Deze naadloze coating is waterbestendig en uitermate geschikt voor badkamers, keukens en woonruimten. Bij NexStuc zijn we gespecialiseerd in het vakkundig aanbrengen van beton ciré – voor een resultaat dat zowel esthetisch als functioneel perfect is.",
    benefits: [
      "Luxe, industriële uitstraling",
      "Naadloze, waterdichte afwerking",
      "Geschikt voor natte ruimten",
      "Breed kleurenpalet beschikbaar",
      "Duurzaam en onderhoudsvriendelijk",
      "Toepasbaar op diverse ondergronden",
    ],
    applications: [
      "Badkamervloeren en -wanden",
      "Keukenaanrechtbladen",
      "Woonkamervloeren",
      "Douchewanden",
      "Meubels en tafels",
    ],
    faq: [
      {
        question: "Is beton ciré waterbestendig?",
        answer:
          "Ja, mits correct aangebracht en afgewerkt met een seallaag is beton ciré volledig waterbestendig. Het is daarom ideaal voor badkamers en keukens.",
      },
      {
        question: "Hoe onderhoud je beton ciré?",
        answer:
          "Beton ciré is zeer onderhoudsvriendelijk. Regelmatig dweilen met een neutraal reinigingsmiddel is voldoende. Vermijd schurende middelen. Wij adviseren een jaarlijkse behandeling met was.",
      },
      {
        question: "Kan beton ciré over bestaande tegels?",
        answer:
          "Ja, beton ciré kan in veel gevallen direct over bestaande tegels worden aangebracht. Dit bespaart breekwerk en maakt de renovatie sneller en schoner.",
      },
    ],
  },
  {
    slug: "badkamerrenovatie",
    title: "Badkamerrenovatie",
    shortTitle: "Badkamerrenovatie",
    icon: "🚿",
    description:
      "Complete badkamerrenovatie van ontwerp tot oplevering. Wij verzorgen stucwerk, beton ciré, tegels en afwerking voor uw droombadkamer.",
    heroTitle: "Badkamerrenovatie in heel Nederland",
    heroDescription:
      "Complete badkamerrenovatie door NexStuc. Van ontwerp tot oplevering – wij realiseren uw droombadkamer met vakmanschap en oog voor detail.",
    introText:
      "Een badkamerrenovatie is een investering in uw wooncomfort. Bij NexStuc nemen we het volledige traject uit handen – van het eerste ontwerp tot de uiteindelijke oplevering. Onze specialisten combineren stucwerk, beton ciré en andere afwerkingstechnieken om een badkamer te creëren die er niet alleen prachtig uitziet, maar ook functioneel en duurzaam is.",
    benefits: [
      "Volledig ontzorgd van A tot Z",
      "Persoonlijk ontwerp en advies",
      "Vakkundige uitvoering",
      "Combinatie van technieken (stuc, beton ciré, tegels)",
      "Waterdicht en duurzaam resultaat",
      "Strakke planning en communicatie",
    ],
    applications: [
      "Complete badkamerverbouwing",
      "Douche- en badruimten",
      "Toiletruimten",
      "Wasruimten",
      "Wellness-ruimten",
    ],
    faq: [
      {
        question: "Hoe lang duurt een badkamerrenovatie?",
        answer:
          "Een gemiddelde badkamerrenovatie duurt 2-3 weken, afhankelijk van de omvang en de gekozen materialen. Wij stellen vooraf een duidelijke planning op.",
      },
      {
        question: "Verzorgen jullie ook het loodgieterswerk?",
        answer:
          "Wij werken samen met betrouwbare loodgieters en installateurs. Zo kunnen wij het volledige traject coördineren en bent u volledig ontzorgd.",
      },
      {
        question: "Wat kost een badkamerrenovatie?",
        answer:
          "De kosten variëren sterk per project, afhankelijk van de grootte, materialen en wensen. Gemiddeld ligt een badkamerrenovatie tussen €5.000 en €15.000. Vraag een vrijblijvende offerte aan voor een exacte prijsopgave.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};
