import React from "react";

const Schema = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSlug = "spackspuiten";
  const baseUrl = "https://nexstuc.vercel.app";

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professioneel ${serviceName.toLowerCase()} in ${city}. Snel, strak, betaalbaar en uitgevoerd met moderne spuitapparatuur.`,
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

  // FAQ SCHEMA — güçlendirilmiş FAQ.tsx ile birebir uyumlu
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is ${serviceName.toLowerCase()} geschikt voor elke woning in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, spackspuiten is geschikt voor zowel nieuwbouw als renovatie en toepasbaar op vrijwel elke ondergrond."
        }
      },
      {
        "@type": "Question",
        name: `Welke structuren bieden jullie aan bij ${serviceName.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wij bieden fijne, middelfijne en grove structuren aan, afhankelijk van uw voorkeur en het type ruimte."
        }
      },
      {
        "@type": "Question",
        name: "Kan spackwerk later worden overschilderd?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, spackwerk kan na droging worden overgeschilderd of gelatexspoten voor een nog strakker resultaat."
        }
      },
      {
        "@type": "Question",
        name: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een gemiddelde woning kan binnen 1–2 dagen volledig worden gespackspoten."
        }
      },
      {
        "@type": "Question",
        name: `Werken jullie ook in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, NexStuc is actief in ${city} en de volledige regio.`
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
