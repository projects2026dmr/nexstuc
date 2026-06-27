import React from "react";

const Schema = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSlug = "stucwerk";
  const baseUrl = "https://nexstuc.vercel.app";

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professioneel ${serviceName.toLowerCase()} in ${city}. Glad pleisterwerk, raapwerk, sierpleister en cementgebonden stucwerk met strakke, duurzame afwerking.`,
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
        name: `Hoe lang duurt ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een gemiddelde woonkamer is binnen 1–2 dagen volledig gestuct. Een volledige woning duurt doorgaans 3–5 werkdagen."
        }
      },
      {
        "@type": "Question",
        name: `Welke soorten stucwerk bieden jullie aan in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glad pleisterwerk, behangklaar stucwerk, raapwerk, cementgebonden stucwerk en sierpleister."
        }
      },
      {
        "@type": "Question",
        name: `Is ${serviceName.toLowerCase()} geschikt voor badkamers?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, cementgebonden stucwerk en beton ciré zijn perfect geschikt voor vochtige ruimtes."
        }
      },
      {
        "@type": "Question",
        name: "Wanneer kan ik schilderen na het stucwerk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stucwerk moet 3–7 dagen drogen voordat u kunt schilderen. Volledige uitharding duurt circa 4 weken."
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
