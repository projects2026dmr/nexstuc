import React from "react";

const Schema = ({ serviceName, city, slug }: { serviceName: string; city: string; slug: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description: `Professionele ${serviceName.toLowerCase()} in ${city} door NexStuc. Strak vakmanschap voor stucwerk, latexspuiten, spackspuiten en meer.`,
    provider: {
      "@type": "LocalBusiness",
      name: "NexStuc",
      url: "https://www.nexstuc.nl",
      telephone: "+31123456789",
      email: "info@nexstuc.nl",
    },
    areaServed: { "@type": "City", name: city },
    url: `https://www.nexstuc.nl/${slug}/${citySlug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `Welke diensten biedt NexStuc als ${serviceName.toLowerCase()} in ${city}?`, acceptedAnswer: { "@type": "Answer", text: `Wij bieden stucwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en badkamerrenovaties aan in ${city}.` } },
      { "@type": "Question", name: `Hoe lang duurt een stukadoorsklus in ${city}?`, acceptedAnswer: { "@type": "Answer", text: "Een gemiddelde woonkamer is binnen 1-2 dagen gestuct. Een volledige woning duurt doorgaans 3-5 werkdagen." } },
      { "@type": "Question", name: `Is een offerte gratis?`, acceptedAnswer: { "@type": "Answer", text: "Ja, wij bieden altijd een volledig vrijblijvende offerte aan." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nexstuc.nl/" },
      { "@type": "ListItem", position: 2, name: serviceName, item: `https://www.nexstuc.nl/${slug}` },
      { "@type": "ListItem", position: 3, name: `${serviceName} in ${city}`, item: `https://www.nexstuc.nl/${slug}/${citySlug}` },
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
