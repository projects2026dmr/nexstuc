import React from "react";

const CTA = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 mt-12 text-center">
      <h2 className="text-3xl font-semibold text-dark-900 mb-4">
        Klaar voor uw {serviceName.toLowerCase()} in {city}?
      </h2>

      <p className="text-dark-700 mb-6 max-w-2xl mx-auto leading-relaxed">
        NexStuc verzorgt complete badkamerrenovaties met hoogwaardige materialen,
        strakke planning en vakmanschap. Vraag een vrijblijvende offerte aan en
        ontdek wat wij voor uw badkamer in {city} kunnen betekenen.
      </p>

      <a
        href="https://nexstuc.vercel.app/"
        className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-md"
      >
        Vrijblijvende offerte aanvragen
      </a>

      <p className="text-sm text-dark-500 mt-3">
        Binnen 24 uur reactie • Gratis & vrijblijvend
      </p>
    </div>
  );
};

export default CTA;
