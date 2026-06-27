import React from "react";

const Schema = ({ serviceName, city, slug }: { serviceName: string; city: string; slug: string }) => {
  const cs = city.toLowerCase().replace(/\s+/g, "-");
  const s = { "@context": "https://schema.org", "@type": "Service", name: `${serviceName} in ${city}`, description: `Professioneel ${serviceName.toLowerCase()} in ${city} door NexStuc. Luxe, naadloos en waterdicht.`, provider: { "@type": "LocalBusiness", name: "NexStuc", url: "https://www.nexstuc.nl", telephone: "+31123456789", email: "info@nexstuc.nl" }, areaServed: { "@type": "City", name: city }, url: `https://www.nexstuc.nl/${slug}/${cs}` };
  const f = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: `Is ${serviceName.toLowerCase()} waterdicht?`, acceptedAnswer: { "@type": "Answer", text: "Ja, dankzij de speciale seallaag is beton ciré volledig waterdicht." } },
    { "@type": "Question", name: `Kan ${serviceName.toLowerCase()} over tegels?`, acceptedAnswer: { "@type": "Answer", text: "Ja, in veel gevallen kan beton ciré direct over bestaande tegels worden aangebracht." } },
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
