import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "@/data/locations";
import SEOHead from "@/components/SEOHead";
import ServiceLocationTemplate from "@/templates/ServiceLocationTemplate";
import Content from "@/components/serviceBlocks/schilderwerk/Content";
import FAQ from "@/components/serviceBlocks/schilderwerk/FAQ";
import CTA from "@/components/serviceBlocks/schilderwerk/CTA";
import Breadcrumbs from "@/components/serviceBlocks/schilderwerk/Breadcrumbs";
import Schema from "@/components/serviceBlocks/schilderwerk/Schema";

const Page = () => {
  const { citySlug } = useParams();
  const location = LOCATIONS.find(loc => loc.slug === citySlug);

  if (!location) {
    return <div>Not Found</div>;
  }

  const serviceName = "Schilderwerk";
  const city = location.city;

  const metaTitle = `${serviceName} in ${city}`;
  const metaDescription = `NexStuc verzorgt professioneel ${serviceName.toLowerCase()} in ${city} en omgeving.`;

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.nexstuc.nl/schilderwerk/${location.slug}`}
      />

      <ServiceLocationTemplate
        serviceName={serviceName}
        city={city}
        content={<Content serviceName={serviceName} city={city} />}
        faq={<FAQ serviceName={serviceName} city={city} />}
        cta={<CTA serviceName={serviceName} city={city} />}
        breadcrumbs={<Breadcrumbs serviceName={serviceName} city={city} slug="schilderwerk" />}
        schema={<Schema serviceName={serviceName} city={city} slug="schilderwerk" />}
      />
    </>
  );
};

export default Page;
