import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f4ef] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <span className="inline-block bg-[#1a1a2e] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase w-fit">
            Contact
          </span>
          <p className="text-sm text-gray-500 sm:text-right">
            Parlons de votre projet. Nous répondons sous 24h.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-snug mb-14 max-w-lg">
          Travaillons ensemble sur{" "}
          <span className="text-[#2563EB]">votre transformation.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[420px] relative">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-4.0567%2C5.3064%2C-3.9567%2C5.3964&layer=mapnik&marker=5.3564%2C-4.0167"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
              loading="lazy"
              title="Abidjan, Côte d'Ivoire"
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={14} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a1a2e]">Abidjan, Côte d&apos;Ivoire</p>
                <p className="text-[10px] text-gray-400">Le Plateau — District Financier</p>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-5">
            {/* DG Card */}
            <div className="bg-[#1a1a2e] rounded-3xl p-7 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  AA
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Aristide AHONZO</p>
                  <p className="text-[#2563EB] text-xs font-semibold tracking-wide uppercase mt-0.5">Directeur Général — ACE</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a href="tel:+22509039090"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-2xl px-4 py-3.5 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wide">Téléphone direct</p>
                    <p className="text-white font-semibold text-sm">+225 09 03 90 90</p>
                  </div>
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ace-corporate.com&su=Prise+de+contact+%E2%80%94+ACE+Corporate" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-2xl px-4 py-3.5 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wide">Email</p>
                    <p className="text-white font-semibold text-sm">contact@ace-corporate.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/company/acecorporate/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-2xl px-4 py-3.5 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#2563EB]">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wide">LinkedIn</p>
                    <p className="text-white font-semibold text-sm">ACE Corporate</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ace-corporate.com&su=Prise+de+contact+%E2%80%94+ACE+Corporate" target="_blank" rel="noopener noreferrer"
              className="bg-[#2563EB] text-white rounded-3xl p-6 flex items-center justify-between hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-[#2563EB]/20 group">
              <div>
                <p className="font-bold text-base">Démarrer une conversation</p>
                <p className="text-white/60 text-sm mt-0.5">Réponse garantie sous 24h</p>
              </div>
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <span className="text-white font-bold text-lg">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
