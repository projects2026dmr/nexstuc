import React from "react";
import { LOCATIONS } from "@/data/locations";

const StukadoorPage = () => {
  const serviceName = "Stukadoor";

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mt-10 mb-4">Stukadoor in alle steden</h2>
      <p className="mb-4 text-dark-700">
        NexStuc is actief als stukadoor in heel Nederland. Bekijk onze diensten per stad:
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        {LOCATIONS.map((location) => (
          <li key={location.slug}>
            <a
              href={`/stukadoor/${location.slug}`}
              className="text-brand-600 hover:text-brand-800 underline transition-colors"
            >
              {serviceName} in {location.city}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StukadoorPage;
