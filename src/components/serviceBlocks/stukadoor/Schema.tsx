import React from "react";

const Schema = ({ serviceName, city }: { serviceName: string; city: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSlug = "stukadoor";
  const baseUrl = "https://nexstuc.vercel.app";

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professioneel ${serviceName.toLowerCase()} in ${city}. Stucwerk, glad pleisterwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en badkamerrenovaties met strakke, duurzame afwerking.`,
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
        name: `Welke diensten biedt NexStuc als ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Wij bieden stucwerk, glad pleisterwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en volledige badkamerrenovaties aan in ${city}.`
        }
      },
      {
        "@type": "Question",
        name: `Hoe lang duurt een stukadoorsklus in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een gemiddelde woonkamer is binnen 1–2 dagen volledig gestuct. Een volledige woning duurt doorgaans 3–5 werkdagen."
        }
      },
      {
        "@type": "Question",
        name: `Komen jullie ook langs voor een opname in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, wij komen vrijblijvend bij u langs in ${city} voor een opname, technisch advies en een offerte op maat.`
        }
      },
      {
        "@type": "Question",
        name: `Werken jullie voor particulieren én bedrijven in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, wij werken voor particulieren, bedrijven, aannemers en projectontwikkelaars in ${city} en omgeving.`
        }
      },
      {
        "@type": "Question",
        name: `Is stucwerk geschikt voor badkamers en vochtige ruimtes?`,
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
        name: `Waarom NexStuc kiezen als ${serviceName.toLowerCase()} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `NexStuc staat voor strak vakmanschap, moderne technieken, hoogwaardige materialen en duidelijke communicatie.`
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
