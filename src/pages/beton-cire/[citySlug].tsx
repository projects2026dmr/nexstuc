import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "@/data/locations";
import SEOHead from "@/components/SEOHead";
import ServiceLocationTemplate from "@/templates/ServiceLocationTemplate";
import Content from "@/components/serviceBlocks/beton-cire/Content";
import FAQ from "@/components/serviceBlocks/beton-cire/FAQ";
import CTA from "@/components/serviceBlocks/beton-cire/CTA";
import Breadcrumbs from "@/components/serviceBlocks/beton-cire/Breadcrumbs";
import Schema from "@/components/serviceBlocks/beton-cire/Schema";

const Page = () => {
  const { citySlug } = useParams();
  const location = LOCATIONS.find(loc => loc.slug === citySlug);

  if (!location) {
    return <div>Not Found</div>;
  }

  const serviceName = "Beton ciré";
  const city = location.city;

  const metaTitle = `${serviceName} in ${city}`;
  const metaDescription = `NexStuc verzorgt professioneel ${serviceName.toLowerCase()} in ${city} en omgeving.`;

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.nexstuc.nl/beton-cire/${location.slug}`}
      />

      <ServiceLocationTemplate
        serviceName={serviceName}
        city={city}
        content={<Content serviceName={serviceName} city={city} />}
        faq={<FAQ serviceName={serviceName} city={city} />}
        cta={<CTA serviceName={serviceName} city={city} />}
        breadcrumbs={<Breadcrumbs serviceName={serviceName} city={city} slug="beton-cire" />}
        schema={<Schema serviceName={serviceName} city={city} slug="beton-cire" />}
      />
    </>
  );
};

export default Page;
