export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-br from-brand-950 via-brand-900 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-wider">
            Neem contact op
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-xl mx-auto">
            Bent u geïnteresseerd in onze diensten of wilt u een vrijblijvende
            offerte aanvragen? Neem direct contact met ons op via telefoon,
            e-mail of WhatsApp. Wij reageren doorgaans binnen 24 uur.
          </p>

          {/* Contact Methods */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href="tel:123456789"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-brand-400/50 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-white font-semibold text-lg">Bel ons</h3>
              <p className="mt-2 text-brand-300 font-medium">123 456 789</p>
              <p className="mt-1 text-white/50 text-sm">
                Ma–Vr: 08:00 – 18:00
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@nexstuc.nl"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-brand-400/50 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-white font-semibold text-lg">E-mail</h3>
              <p className="mt-2 text-brand-300 font-medium">
                info@nexstuc.nl
              </p>
              <p className="mt-1 text-white/50 text-sm">
                Reactie binnen 24 uur
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-brand-400/50 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-white font-semibold text-lg">WhatsApp</h3>
              <p className="mt-2 text-brand-300 font-medium">Stuur bericht</p>
              <p className="mt-1 text-white/50 text-sm">
                Direct antwoord
              </p>
            </a>
          </div>

          {/* Extra trust line */}
          <p className="mt-10 text-white/40 text-sm">
            ✦ Vrijblijvend advies &nbsp;•&nbsp; Gratis offerte &nbsp;•&nbsp;
            Geen verplichtingen
          </p>
        </div>
      </div>
    </section>
  );
}
