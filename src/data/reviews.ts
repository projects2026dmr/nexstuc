// Customer review data for NexStuc
export interface Review {
  name: string;
  city: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Mark de Vries",
    city: "Utrecht",
    rating: 5,
    text: "Uitstekend werk geleverd! Onze hele woning is gestuct en het resultaat is werkelijk prachtig. De mannen werkten netjes, snel en waren heel vriendelijk. Absoluut een aanrader voor iedereen die op zoek is naar een goede stukadoor.",
  },
  {
    name: "Sandra Jansen",
    city: "Amsterdam",
    rating: 5,
    text: "NexStuc heeft onze badkamer volledig gerenoveerd met beton ciré. Het ziet er fantastisch uit! Van het eerste contact tot de oplevering verliep alles vlekkeloos. Duidelijke communicatie en een prachtig eindresultaat.",
  },
  {
    name: "Peter Bakker",
    city: "Rotterdam",
    rating: 5,
    text: "Wij hebben NexStuc ingeschakeld voor het latexspuiten van ons nieuwe appartement. In twee dagen was alles klaar – strak, egaal en precies de kleur die we wilden. Top service en eerlijke prijs.",
  },
  {
    name: "Lisa van den Berg",
    city: "Eindhoven",
    rating: 5,
    text: "Zeer tevreden over het stucwerk in onze woonkamer en hal. De opname was grondig, de offerte helder en het werk is perfect uitgevoerd. NexStuc is een bedrijf dat zijn beloftes nakomt.",
  },
  {
    name: "Jan Hendriks",
    city: "Groningen",
    rating: 4,
    text: "Goed schilderwerk geleverd voor ons kantoor. Alles netjes afgedekt en opgeruimd achtergelaten. Het resultaat mag er zijn. Zou NexStuc zeker aanbevelen aan collega-ondernemers.",
  },
];
