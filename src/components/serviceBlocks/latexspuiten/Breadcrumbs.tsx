import React from "react";

const Breadcrumbs = ({ serviceName, city, slug }: { serviceName: string; city: string; slug: string }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-dark-700">
      <ol className="flex flex-wrap items-center gap-1">
        <li><a href="#/" className="hover:text-brand-500 transition-colors">Home</a></li>
        <li className="text-dark-700/40">/</li>
        <li><a href={`#/${slug}`} className="hover:text-brand-500 transition-colors">{serviceName}</a></li>
        <li className="text-dark-700/40">/</li>
        <li className="font-medium text-dark-900">{city}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
