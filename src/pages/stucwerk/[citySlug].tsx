import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "@/data/locations";

import SEOHead from "@/components/SEOHead";
import ServiceLocationTemplate from "@/templates/ServiceLocationTemplate";

import Content from "@/components/serviceBlocks/stucwerk/Content";
import FAQ from "@/components/serviceBlocks/stucwerk/FAQ";
import CTA from "@/components/serviceBlocks/stucwerk/CTA";
import Schema from "@/components/serviceBlocks/stucwerk/Schema";

import Breadcrumbs from "@/components/Breadcrumbs";

const Page = () => {
  const { citySlug } = useParams();
  const location = LOCATIONS.find((loc) => loc.slug === citySlug);

  if (!location) {
    return <div>Not Found</div>;
  }

  const serviceName = "Stucwerk";
  const serviceSlug = "stucwerk";
  const city = location.city;

  const metaTitle = `${serviceName} in ${city}`;
  const metaDescription = `NexStuc verzorgt professioneel ${serviceName.toLowerCase()} in ${city} en omgeving.`;

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.nexstuc.nl/${serviceSlug}/${location.slug}`}
      />

      <ServiceLocationTemplate
        serviceName={serviceName}
        city={city}
        breadcrumbs={
          <Breadcrumbs
            serviceSlug={serviceSlug}
            serviceName={serviceName}
            city={city}
          />
        }
        content={<Content serviceName={serviceName} city={city} />}
        faq={<FAQ serviceName={serviceName} city={city} />}
        cta={<CTA serviceName={serviceName} city={city} />}
        schema={<Schema serviceName={serviceName} city={city} />}
      />
    </>
  );
};

export default Page;
