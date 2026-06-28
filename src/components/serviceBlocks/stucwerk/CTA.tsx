import React from "react";

const CTA = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-dark-900 rounded-2xl p-8 sm:p-12 text-center">

      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Klaar voor strak {serviceName.toLowerCase()} in {city}?
      </h2>

      <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
        NexStuc levert professioneel stucwerk met strakke afwerking, duurzame materialen 
        en vakmanschap. Vraag een vrijblijvende offerte aan voor uw project in {city}.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://nexstuc.vercel.app/"
          className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-md"
        >
          Offerte aanvragen
        </a>

        <a
          href="https://wa.me/123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200"
        >
          💬 WhatsApp advies
        </a>
      </div>

      <p className="mt-6 text-white/40 text-sm">
        Binnen 24 uur reactie • Gratis & vrijblijvend • Specialist in stucwerk
      </p>
    </div>
  );
};

export default CTA;
