// Portfolio project data for NexStuc
export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const projects: Project[] = [
  {
    title: "Renovatie woning – Utrecht",
    description:
      "Volledige stucwerk renovatie van een jaren '30 woning. Alle wanden en plafonds zijn voorzien van glad pleisterwerk, gevolgd door latexspuiten in een warme tint.",
    image:
      "https://images.pexels.com/photos/6473982/pexels-photo-6473982.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Stucwerk renovatie woning Utrecht - glad pleisterwerk wanden",
  },
  {
    title: "Nieuwbouw appartementen – Amsterdam",
    description:
      "Spackspuiten en latexspuiten van 24 nieuwbouw appartementen. Strakke afwerking binnen strak tijdschema, opgeleverd naar volle tevredenheid van de opdrachtgever.",
    image:
      "https://images.pexels.com/photos/6474192/pexels-photo-6474192.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Spackspuiten nieuwbouw appartementen Amsterdam - professionele afwerking",
  },
  {
    title: "Beton ciré badkamer – Rotterdam",
    description:
      "Luxe badkamerrenovatie met beton ciré op wanden en vloer. Naadloze, waterdichte afwerking voor een moderne, industriële uitstraling.",
    image:
      "https://images.pexels.com/photos/8143706/pexels-photo-8143706.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Beton ciré badkamer Rotterdam - naadloze luxe afwerking",
  },
  {
    title: "Kantoorpand stucwerk – Den Haag",
    description:
      "Professioneel stucwerk en schilderwerk voor een representatief kantoorpand. Gladde wanden en perfect afgewerkte plafonds voor een zakelijke uitstraling.",
    image:
      "https://images.pexels.com/photos/6473966/pexels-photo-6473966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Stucwerk kantoorpand Den Haag - gladde professionele afwerking",
  },
  {
    title: "Woonkamer latexspuiten – Eindhoven",
    description:
      "Na het stucen van de woonkamer hebben wij de muren en het plafond voorzien van een egale laag latex. Het resultaat: een strakke, moderne woonruimte.",
    image:
      "https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Latexspuiten woonkamer Eindhoven - egale afwerking muren en plafond",
  },
  {
    title: "Wellness badkamer – Haarlem",
    description:
      "Complete badkamerrenovatie met beton ciré douchewand en stucwerk wanden. Een wellness-ervaring in eigen huis, vakkundig gerealiseerd door NexStuc.",
    image:
      "https://images.pexels.com/photos/7587860/pexels-photo-7587860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Badkamerrenovatie Haarlem - beton ciré en stucwerk wellness badkamer",
  },
];
