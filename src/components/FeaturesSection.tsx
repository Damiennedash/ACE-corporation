import { BarChart2, Cloud, Lightbulb, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <BarChart2 size={22} className="text-white" />,
    title: "Data Science & IA",
    desc: "Modélisation prédictive, machine learning et deep learning au service de vos décisions stratégiques.",
  },
  {
    icon: <Cloud size={22} className="text-white" />,
    title: "Cloud & Infrastructure",
    desc: "Migration cloud, architecture IT et sécurisation des systèmes d'information évolutifs.",
  },
  {
    icon: <Lightbulb size={22} className="text-white" />,
    title: "Stratégie & Conseil",
    desc: "Feuilles de route, transformation organisationnelle et optimisation des performances business.",
  },
  {
    icon: <ShieldCheck size={22} className="text-white" />,
    title: "Cybersécurité",
    desc: "Audit de sécurité, protection des données et mise en conformité réglementaire.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="services" className="bg-[#f5f4ef] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <span className="inline-block bg-[#1a1a2e] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase w-fit">
            Services
          </span>
          <p className="text-sm text-gray-500 sm:text-right max-w-xs">
            Des solutions complètes, de la stratégie à l&apos;implémentation.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-snug max-w-3xl mb-16">
          Atteignez la{" "}
          <span className="text-[#2563EB]">clarté analytique</span>{" "}
          et transformez vos données en{" "}
          <span className="text-[#60A5FA]">avantage concurrentiel</span>{" "}
          — sur une plateforme sécurisée.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <div key={svc.title}
              className="rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] p-6 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                {svc.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-snug mb-2">{svc.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
