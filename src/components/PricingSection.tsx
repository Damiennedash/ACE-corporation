import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Sur devis",
    period: "",
    desc: "Pour les PME souhaitant démarrer leur transformation digitale.",
    features: [
      "Audit de maturité digitale",
      "Conseil stratégique (5 jours)",
      "Rapport de recommandations",
      "Support par email",
    ],
    cta: "Demander un devis",
    mail: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@ace-corporate.com&su=Demande+de+devis+%E2%80%94+Pack+Starter",
    highlight: false,
  },
  {
    name: "Croissance",
    price: "Forfait",
    period: "mensuel",
    desc: "Pour les entreprises prêtes à accélérer leur croissance data.",
    features: [
      "Tout le pack Starter",
      "Data Science & IA sur mesure",
      "Tableau de bord analytique",
      "Infrastructure cloud dédiée",
      "Accompagnement continu",
    ],
    cta: "Démarrer le projet",
    mail: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@ace-corporate.com&su=D%C3%A9marrer+un+projet+%E2%80%94+Pack+Croissance",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    period: "",
    desc: "Pour les grands comptes avec des besoins complexes.",
    features: [
      "Tout le pack Croissance",
      "Équipe dédiée multi-experts",
      "Cybersécurité & conformité",
      "Intégrations systèmes",
      "Manager de compte dédié",
    ],
    cta: "Contacter les experts",
    mail: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@ace-corporate.com&su=Contact+experts+%E2%80%94+Pack+Enterprise",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="expertise" className="bg-[#f5f4ef] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <span className="inline-block bg-[#1a1a2e] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase w-fit">
            Nos offres
          </span>
          <p className="text-sm text-gray-500 sm:text-right">
            Chaque projet est unique. Nous adaptons notre approche.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-snug mb-14 max-w-lg">
          Des solutions adaptées à{" "}
          <span className="text-[#2563EB]">chaque ambition.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name}
              className={`rounded-3xl p-8 flex flex-col gap-6 ${plan.highlight ? "bg-[#1a1a2e] text-white" : "bg-white border border-gray-200"}`}>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${plan.highlight ? "text-[#2563EB]" : "text-gray-400"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-2">
                  <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-[#1a1a2e]"}`}>{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm mb-1 ${plan.highlight ? "text-white/50" : "text-gray-400"}`}>{plan.period}</span>
                  )}
                </div>
                <p className={`text-sm mt-2 ${plan.highlight ? "text-white/60" : "text-gray-500"}`}>{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? "bg-[#2563EB]" : "bg-[#2563EB]/15"}`}>
                      <Check size={11} className={plan.highlight ? "text-white" : "text-[#2563EB]"} strokeWidth={3} />
                    </span>
                    <span className={plan.highlight ? "text-white/80" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href={plan.mail} target="_blank" rel="noopener noreferrer"
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 text-center block ${
                  plan.highlight
                    ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/25"
                    : "border border-[#2563EB] text-[#1a1a2e] hover:bg-[#2563EB] hover:text-white"
                }`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
