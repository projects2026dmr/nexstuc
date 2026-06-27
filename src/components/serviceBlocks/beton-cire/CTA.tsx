import React from "react";

const CTA = ({ serviceName, city }: { serviceName: string; city: string }) => {
  return (
    <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-dark-900 rounded-2xl p-8 sm:p-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{serviceName} nodig in {city}?</h2>
      <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-8">Vraag een vrijblijvende offerte aan voor luxe {serviceName.toLowerCase()} in {city}. Naadloos, waterdicht en vakkundig aangebracht.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="tel:123456789" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200">📞 Bel ons direct</a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200">💬 WhatsApp</a>
      </div>
      <p className="mt-6 text-white/40 text-sm">✦ Vrijblijvend advies • Gratis offerte • Geen verplichtingen</p>
    </div>
  );
};

export default CTA;
