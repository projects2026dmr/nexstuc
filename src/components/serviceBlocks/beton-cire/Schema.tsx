import React from "react";

const Schema = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSlug = "beton-cire";
  const baseUrl = "https://nexstuc.vercel.app";

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professioneel aangebracht ${serviceName.toLowerCase()} in ${city}. Luxe, naadloos, waterdicht en duurzaam. Ideaal voor badkamers, keukens, wanden, vloeren en maatwerk.`,
    provider: {
      "@type": "LocalBusiness",
      name: "NexStuc",
      url: baseUrl,
      telephone: "+31123456789",
      email: "info@nexstuc.nl",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NL"
      }
    },
    areaServed: {
      "@type": "City",
      name: city
    },
    url: `${baseUrl}/${serviceSlug}/${citySlug}`
  };

  // FAQ SCHEMA — 8 SORU (FAQ.tsx ile birebir uyumlu)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is ${serviceName.toLowerCase()} volledig waterdicht?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Dankzij een hoogwaardige seallaag en professionele applicatie is beton ciré volledig waterdicht en schimmelbestendig."
        }
      },
      {
        "@type": "Question",
        name: `Kan ${serviceName.toLowerCase()} over bestaande tegels worden aangebracht in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "In veel gevallen wel. Beton ciré kan direct over bestaande tegels worden aangebracht, mits de ondergrond stabiel en goed voorbereid is."
        }
      },
      {
        "@type": "Question",
        name: `Hoe onderhoud je ${serviceName.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Beton ciré is onderhoudsvriendelijk. Reinigen met een mild, pH‑neutraal middel is voldoende. Een jaarlijkse wasbehandeling wordt aanbevolen."
        }
      },
      {
        "@type": "Question",
        name: `Welke kleuren en structuren zijn beschikbaar voor ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Er is een breed kleurenpalet beschikbaar, van lichte betonkleuren tot diepe industriële tinten. Structuren variëren van fijn tot robuust."
        }
      },
      {
        "@type": "Question",
        name: `Is beton ciré geschikt voor vloeren in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Beton ciré is slijtvast, duurzaam en geschikt voor intensief gebruik. Ideaal voor woonkamers, keukens en commerciële ruimtes."
        }
      },
      {
        "@type": "Question",
        name: `Hoe lang gaat ${serviceName.toLowerCase()} mee?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bij professionele applicatie gaat beton ciré jarenlang mee. Het blijft waterdicht, kleurvast en slijtvast."
        }
      },
      {
        "@type": "Question",
        name: `Werken jullie ook in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, NexStuc is actief in ${city} en de volledige regio. Wij komen vrijblijvend langs voor advies.`
        }
      },
      {
        "@type": "Question",
        name: "Is een offerte gratis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, onze offertes zijn volledig gratis en vrijblijvend."
        }
      }
    ]
  };

  // BREADCRUMB SCHEMA — lokasyon sayfasına uygun
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: serviceName,
        item: `${baseUrl}/${serviceSlug}`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${serviceName} in ${city}`,
        item: `${baseUrl}/${serviceSlug}/${citySlug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default Schema;
