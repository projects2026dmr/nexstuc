import React from "react";

const Schema = ({ serviceName, city, slug }: { serviceName: string; city: string; slug: string }) => {
  const cs = city.toLowerCase().replace(/\s+/g, "-");
  const s = { "@context": "https://schema.org", "@type": "Service", name: `${serviceName} in ${city}`, description: `Complete ${serviceName.toLowerCase()} in ${city} door NexStuc. Van ontwerp tot oplevering, volledig ontzorgd.`, provider: { "@type": "LocalBusiness", name: "NexStuc", url: "https://www.nexstuc.nl", telephone: "+31123456789", email: "info@nexstuc.nl" }, areaServed: { "@type": "City", name: city }, url: `https://www.nexstuc.nl/${slug}/${cs}` };
  const f = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: `Hoe lang duurt een ${serviceName.toLowerCase()}?`, acceptedAnswer: { "@type": "Answer", text: "Een gemiddelde badkamerrenovatie duurt 1-3 weken, afhankelijk van de omvang." } },
    { "@type": "Question", name: `Is beton ciré geschikt voor badkamers?`, acceptedAnswer: { "@type": "Answer", text: "Ja, beton ciré is volledig waterdicht en ideaal voor douches en badkamers." } },
    { "@type": "Question", name: `Is een offerte gratis?`, acceptedAnswer: { "@type": "Answer", text: "Ja, volledig vrijblijvend." } },
  ] };
  const b = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nexstuc.nl/" },
    { "@type": "ListItem", position: 2, name: serviceName, item: `https://www.nexstuc.nl/${slug}` },
    { "@type": "ListItem", position: 3, name: `${serviceName} in ${city}`, item: `https://www.nexstuc.nl/${slug}/${cs}` },
  ] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(f) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} /></>);
};

export default Schema;
