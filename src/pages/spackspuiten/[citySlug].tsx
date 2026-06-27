import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "@/data/locations";
import SEOHead from "@/components/SEOHead";
import ServiceLocationTemplate from "@/templates/ServiceLocationTemplate";
import Content from "@/components/serviceBlocks/spackspuiten/Content";
import FAQ from "@/components/serviceBlocks/spackspuiten/FAQ";
import CTA from "@/components/serviceBlocks/spackspuiten/CTA";
import Breadcrumbs from "@/components/serviceBlocks/spackspuiten/Breadcrumbs";
import Schema from "@/components/serviceBlocks/spackspuiten/Schema";

const Page = () => {
  const { citySlug } = useParams();
  const location = LOCATIONS.find(loc => loc.slug === citySlug);

  if (!location) {
    return <div>Not Found</div>;
  }

  const serviceName = "Spackspuiten";
  const city = location.city;

  const metaTitle = `${serviceName} in ${city}`;
  const metaDescription = `NexStuc verzorgt professioneel ${serviceName.toLowerCase()} in ${city} en omgeving.`;

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.nexstuc.nl/spackspuiten/${location.slug}`}
      />

      <ServiceLocationTemplate
        serviceName={serviceName}
        city={city}
        content={<Content serviceName={serviceName} city={city} />}
        faq={<FAQ serviceName={serviceName} city={city} />}
        cta={<CTA serviceName={serviceName} city={city} />}
        breadcrumbs={<Breadcrumbs serviceName={serviceName} city={city} slug="spackspuiten" />}
        schema={<Schema serviceName={serviceName} city={city} slug="spackspuiten" />}
      />
    </>
  );
};

export default Page;
