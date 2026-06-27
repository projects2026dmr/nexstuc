import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  serviceSlug: string;
  serviceName: string;
  city: string;
}

export default function Breadcrumbs({ serviceSlug, serviceName, city }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:underline text-brand-600">
            Home
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link to={`/${serviceSlug}`} className="hover:underline text-brand-600">
            {serviceName}
          </Link>
        </li>

        <li>/</li>

        <li className="text-gray-800 font-medium">
          {city}
        </li>
      </ol>
    </nav>
  );
}
