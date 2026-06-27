import { services } from "../data/services";

// LocalBusiness structured data (placeholder data)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NexStuc",
  description:
    "Professioneel stukadoorsbedrijf actief in heel Nederland. Stucwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en badkamerrenovatie.",
  url: "https://nexstuc.nl",
  telephone: "+31123456789",
  email: "info@nexstuc.nl",
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  slogan: "Strak vakmanschap voor heel Nederland",
  priceRange: "€€",
  image: "https://nexstuc.nl/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
    addressRegion: "Nederland",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
};

// Service schemas for all 6 services
const serviceSchemas = services
  .filter((s) => s.slug !== "stukadoor")
  .map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "NexStuc",
      url: "https://nexstuc.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    url: `https://nexstuc.nl/${service.slug}`,
  }));

export function HomeStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}

export function PillarPageStructuredData({
  serviceName,
  serviceDescription,
  serviceSlug,
}: {
  serviceName: string;
  serviceDescription: string;
  serviceSlug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "NexStuc",
      url: "https://nexstuc.nl",
      telephone: "+31123456789",
      email: "info@nexstuc.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    url: `https://nexstuc.nl/${serviceSlug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
