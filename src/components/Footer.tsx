const footerLinks = {
  Services: ["Data Science & IA", "Cloud & Infrastructure", "Stratégie & Conseil", "Cybersécurité", "Business Analytics", "Mobile & Digital"],
  Entreprise: ["À propos", "Notre équipe", "Carrières", "Actualités"],
  Légal: ["Politique de confidentialité", "CGU", "Mentions légales"],
  Contact: ["Nous écrire", "ace-corporate.com", "Abidjan, Côte d'Ivoire"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#2563EB] rounded-sm flex items-center justify-center text-white font-bold text-sm">ACE</div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
              Ahonzo Consulting Experts — votre partenaire en stratégie et analytique business.
            </p>
            <p className="text-white/30 text-xs mt-4 tracking-wide">Abidjan, Côte d&apos;Ivoire</p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{group}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">© 2025 Ahonzo Consulting Experts. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            {["LinkedIn", "ace-corporate.com", "Confidentialité"].map((link) => (
              <a key={link} href="#" className="text-white/40 hover:text-white text-xs transition-colors tracking-wide">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
