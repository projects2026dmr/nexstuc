import React from "react";

interface ServiceLocationTemplateProps {
  serviceName: string;        // e.g. "Stucwerk"
  city: string;               // e.g. "Amsterdam"
  content: React.ReactNode;   // service-specific content block
  faq: React.ReactNode;       // FAQ block
  cta: React.ReactNode;       // CTA block
  breadcrumbs: React.ReactNode; // breadcrumb block
  schema: React.ReactNode;    // JSON-LD schema block
}

const ServiceLocationTemplate: React.FC<ServiceLocationTemplateProps> = ({
  serviceName,
  city,
  content,
  faq,
  cta,
  breadcrumbs,
  schema
}) => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {breadcrumbs}

      <h1 className="text-4xl font-bold mb-6">
        {serviceName} in {city}
      </h1>

      <section className="mb-10">
        {content}
      </section>

      <section className="mb-10">
        {faq}
      </section>

      <section className="mb-10">
        {cta}
      </section>

      {schema}
    </main>
  );
};

export default ServiceLocationTemplate;
