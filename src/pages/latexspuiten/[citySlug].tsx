import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "@/data/locations";
import SEOHead from "@/components/SEOHead";
import ServiceLocationTemplate from "@/templates/ServiceLocationTemplate";
import Content from "@/components/serviceBlocks/latexspuiten/Content";
import FAQ from "@/components/serviceBlocks/latexspuiten/FAQ";
import CTA from "@/components/serviceBlocks/latexspuiten/CTA";
import Breadcrumbs from "@/components/serviceBlocks/latexspuiten/Breadcrumbs";
import Schema from "@/components/serviceBlocks/latexspuiten/Schema";

const Page = () => {
  const { citySlug } = useParams();
  const location = LOCATIONS.find(loc => loc.slug === citySlug);

  if (!location) {
    return <div>Not Found</div>;
  }

  const serviceName = "Latexspuiten";
  const city = location.city;

  const metaTitle = `${serviceName} in ${city}`;
  const metaDescription = `NexStuc verzorgt professioneel ${serviceName.toLowerCase()} in ${city} en omgeving.`;

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.nexstuc.nl/latexspuiten/${location.slug}`}
      />

      <ServiceLocationTemplate
        serviceName={serviceName}
        city={city}
        content={<Content serviceName={serviceName} city={city} />}
        faq={<FAQ serviceName={serviceName} city={city} />}
        cta={<CTA serviceName={serviceName} city={city} />}
        breadcrumbs={<Breadcrumbs serviceName={serviceName} city={city} slug="latexspuiten" />}
        schema={<Schema serviceName={serviceName} city={city} slug="latexspuiten" />}
      />
    </>
  );
};

export default Page;
