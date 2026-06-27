import React from "react";

const Schema = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSlug = "latexspuiten";
  const baseUrl = "https://nexstuc.vercel.app";

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professioneel ${serviceName.toLowerCase()} in ${city}. Streeploos, egaal, snel en perfect afgewerkt met airless spuitapparatuur.`,
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
        name: `Is ${serviceName.toLowerCase()} beter dan rollen in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Airless latexspuiten levert een veel strakker, egaler en sneller resultaat op dan traditioneel rollen."
        }
      },
      {
        "@type": "Question",
        name: `Kan ${serviceName.toLowerCase()} op nieuw stucwerk worden aangebracht?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, mits het stucwerk voldoende is gedroogd en correct wordt voorbehandeld."
        }
      },
      {
        "@type": "Question",
        name: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een gemiddelde woning kan binnen 1–2 dagen volledig worden gelatexspoten."
        }
      },
      {
        "@type": "Question",
        name: `Moet de ruimte leeg zijn bij ${serviceName.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wij dekken alles zorgvuldig af met professionele folie om overspray te voorkomen."
        }
      },
      {
        "@type": "Question",
        name: `Welke voorbereidingen zijn nodig voor ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wij verzorgen afplakken, afdekken, ondergrondcontrole en reparaties waar nodig."
        }
      },
      {
        "@type": "Question",
        name: `Is latexspuiten geschikt voor plafonds in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Latexspuiten geeft plafonds een volledig egaal en streeploos resultaat zonder rolbanen."
        }
      },
      {
        "@type": "Question",
        name: `Werken jullie ook in ${city} en omgeving?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, NexStuc is actief in ${city} en de volledige regio.`
        }
      },
      {
        "@type": "Question",
        name: `Is een offerte voor ${serviceName.toLowerCase()} in ${city} gratis?`,
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
