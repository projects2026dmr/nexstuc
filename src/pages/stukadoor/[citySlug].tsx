import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "@/data/locations";
import SEOHead from "@/components/SEOHead";
import ServiceLocationTemplate from "@/templates/ServiceLocationTemplate";
import Content from "@/components/serviceBlocks/stukadoor/Content";
import FAQ from "@/components/serviceBlocks/stukadoor/FAQ";
import CTA from "@/components/serviceBlocks/stukadoor/CTA";
import Breadcrumbs from "@/components/serviceBlocks/stukadoor/Breadcrumbs";
import Schema from "@/components/serviceBlocks/stukadoor/Schema";

const Page = () => {
  const { citySlug } = useParams();
  const location = LOCATIONS.find(loc => loc.slug === citySlug);

  if (!location) {
    return <div>Not Found</div>;
  }

  const serviceName = "Stukadoor";
  const city = location.city;

  const metaTitle = `Stukadoor in ${city}`;
  const metaDescription = `NexStuc verzorgt professioneel stukadoorswerk in ${city} en omgeving.`;

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.nexstuc.nl/stukadoor/${location.slug}`}
      />

      <ServiceLocationTemplate
        serviceName={serviceName}
        city={city}
        content={<Content serviceName={serviceName} city={city} />}
        faq={<FAQ serviceName={serviceName} city={city} />}
        cta={<CTA serviceName={serviceName} city={city} />}
        breadcrumbs={<Breadcrumbs serviceName={serviceName} city={city} slug="stukadoor" />}
        schema={<Schema serviceName={serviceName} city={city} slug="stukadoor" />}
      />
    </>
  );
};

export default Page;
