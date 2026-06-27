import React from "react";

const Schema = ({ serviceName, city, slug }: { serviceName: string; city: string; slug: string }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professioneel ${serviceName.toLowerCase()} in ${city} door NexStuc. Strak, duurzaam en vakkundig uitgevoerd.`,
    provider: {
      "@type": "LocalBusiness",
      name: "NexStuc",
      url: "https://www.nexstuc.nl",
      telephone: "+31123456789",
      email: "info@nexstuc.nl",
    },
    areaServed: { "@type": "City", name: city },
    url: `https://www.nexstuc.nl/${slug}/${city.toLowerCase().replace(/\s+/g, "-")}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `Hoe lang duurt ${serviceName.toLowerCase()} in ${city}?`, acceptedAnswer: { "@type": "Answer", text: "Een gemiddelde woonkamer is binnen 1-2 dagen gestuct. Een volledige woning duurt doorgaans 3-5 werkdagen." } },
      { "@type": "Question", name: `Welke soorten stucwerk bieden jullie aan in ${city}?`, acceptedAnswer: { "@type": "Answer", text: `Wij bieden glad pleisterwerk, behangklaar stucwerk, raapwerk, cementgebonden stucwerk en sierpleister aan in ${city}.` } },
      { "@type": "Question", name: `Is een offerte voor ${serviceName.toLowerCase()} in ${city} gratis?`, acceptedAnswer: { "@type": "Answer", text: "Ja, wij bieden altijd een volledig vrijblijvende offerte aan." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nexstuc.nl/" },
      { "@type": "ListItem", position: 2, name: serviceName, item: `https://www.nexstuc.nl/${slug}` },
      { "@type": "ListItem", position: 3, name: `${serviceName} in ${city}`, item: `https://www.nexstuc.nl/${slug}/${city.toLowerCase().replace(/\s+/g, "-")}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
};

export default Schema;
