import React from "react";

const Schema = ({ serviceName, city, slug }: { serviceName: string; city: string; slug: string }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: `${serviceName} in ${city}`, description: `Professioneel ${serviceName.toLowerCase()} in ${city} door NexStuc. Streeploos, snel en perfect egaal.`, provider: { "@type": "LocalBusiness", name: "NexStuc", url: "https://www.nexstuc.nl", telephone: "+31123456789", email: "info@nexstuc.nl" }, areaServed: { "@type": "City", name: city }, url: `https://www.nexstuc.nl/${slug}/${citySlug}` };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: `Is ${serviceName.toLowerCase()} beter dan rollen?`, acceptedAnswer: { "@type": "Answer", text: "Ja, latexspuiten levert een veel strakker, egaler en sneller resultaat op dan traditioneel rollen." } },
    { "@type": "Question", name: `Kan ${serviceName.toLowerCase()} op nieuw stucwerk?`, acceptedAnswer: { "@type": "Answer", text: "Ja, mits het stucwerk voldoende is gedroogd en de juiste voorbehandeling wordt toegepast." } },
    { "@type": "Question", name: `Is een offerte voor ${serviceName.toLowerCase()} in ${city} gratis?`, acceptedAnswer: { "@type": "Answer", text: "Ja, wij bieden altijd een volledig vrijblijvende offerte aan." } },
  ] };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nexstuc.nl/" },
    { "@type": "ListItem", position: 2, name: serviceName, item: `https://www.nexstuc.nl/${slug}` },
    { "@type": "ListItem", position: 3, name: `${serviceName} in ${city}`, item: `https://www.nexstuc.nl/${slug}/${citySlug}` },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
};

export default Schema;
