import React from "react";

const Schema = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSlug = "badkamerrenovatie";
  const baseUrl = "https://nexstuc.vercel.app";

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Complete ${serviceName.toLowerCase()} in ${city} door NexStuc. Van ontwerp tot oplevering, volledig ontzorgd.`,
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

  // FAQ SCHEMA (7 SORU)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Hoe lang duurt een ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een gemiddelde badkamerrenovatie duurt 1–3 weken, afhankelijk van omvang, materiaalkeuze en eventuele maatwerkopties."
        }
      },
      {
        "@type": "Question",
        name: `Wat kost een ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "De kosten hangen af van afmetingen, materiaalkeuze, sanitair en afwerking. Wij maken altijd een vrijblijvende offerte op maat."
        }
      },
      {
        "@type": "Question",
        name: "Is beton ciré geschikt voor badkamers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, beton ciré is volledig waterdicht en ideaal voor douches, wanden en vloeren."
        }
      },
      {
        "@type": "Question",
        name: "Renoveren jullie ook kleine badkamers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wij zijn gespecialiseerd in slimme indelingen en ruimtebesparende oplossingen."
        }
      },
      {
        "@type": "Question",
        name: "Verzorgen jullie ook loodgieterswerk en elektriciteit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wij coördineren het volledige traject inclusief loodgieterswerk, elektriciteit, ventilatie en verlichting."
        }
      },
      {
        "@type": "Question",
        name: `Werken jullie ook in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, NexStuc is actief in ${city} en de volledige regio.`
        }
      },
      {
        "@type": "Question",
        name: "Is een offerte gratis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, onze offertes zijn volledig vrijblijvend."
        }
      }
    ]
  };

  // BREADCRUMB SCHEMA
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
