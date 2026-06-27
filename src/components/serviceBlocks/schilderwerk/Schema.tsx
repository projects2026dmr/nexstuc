import React from "react";

const Schema = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSlug = "schilderwerk";
  const baseUrl = "https://nexstuc.vercel.app";

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professioneel ${serviceName.toLowerCase()} in ${city}. Strak, duurzaam en uitgevoerd met premium verfmerken zoals Sigma, Sikkens en Flexa.`,
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
        name: `Welke verfmerken gebruiken jullie voor ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wij werken met premium merken zoals Sigma, Sikkens en Flexa."
        }
      },
      {
        "@type": "Question",
        name: "Hoe bereiden jullie de ondergrond voor voordat jullie beginnen met schilderen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wij reinigen, schuren, plamuren en gronderen elke ondergrond zorgvuldig voor optimale hechting."
        }
      },
      {
        "@type": "Question",
        name: "Doen jullie ook schilderwerk aan kozijnen, deuren en houtwerk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wij schilderen kozijnen, deuren, plinten, trappen en houten panelen met duurzame lakken."
        }
      },
      {
        "@type": "Question",
        name: `Hoe lang duurt ${serviceName.toLowerCase()} in een woning in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een gemiddelde woning is binnen 3–5 werkdagen volledig geschilderd."
        }
      },
      {
        "@type": "Question",
        name: `Geven jullie ook kleuradvies voor schilderwerk in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wij geven vrijblijvend kleuradvies op maat."
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
