import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "@/data/locations";

import SEOHead from "@/components/SEOHead";
import ServiceLocationTemplate from "@/templates/ServiceLocationTemplate";

import Content from "@/components/serviceBlocks/beton-cire/Content";
import FAQ from "@/components/serviceBlocks/beton-cire/FAQ";
import CTA from "@/components/serviceBlocks/beton-cire/CTA";
import Schema from "@/components/serviceBlocks/beton-cire/Schema";

import Breadcrumbs from "@/components/Breadcrumbs";

const Page = () => {
  const { citySlug } = useParams();
  const location = LOCATIONS.find((loc) => loc.slug === citySlug);

  if (!location) {
    return <div>Not Found</div>;
  }

  const serviceName = "Beton ciré";
  const serviceSlug = "beton-cire";
  const city = location.city;

  const metaTitle = `Modern ${serviceName.toLowerCase()} in ${city} | NexStuc beton ciré specialist`;
  const metaDescription = `Professionele ${serviceName.toLowerCase()} in ${city} door NexStuc. Strakke betonlook afwerking, duurzame materialen en garantie. Vraag een vrijblijvende offerte aan in ${city}.`;

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
