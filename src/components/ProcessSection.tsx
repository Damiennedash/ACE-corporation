const steps = [
  {
    num: "01",
    title: "Découverte",
    desc: "Analyse approfondie de votre contexte, audit de maturité digitale et identification précise de vos besoins stratégiques.",
  },
  {
    num: "02",
    title: "Stratégie",
    desc: "Co-construction d'une roadmap sur mesure alignée à vos objectifs business, vos ressources et vos contraintes.",
  },
  {
    num: "03",
    title: "Implémentation",
    desc: "Déploiement agile avec suivi continu, livraisons itératives et transparence totale tout au long du projet.",
  },
  {
    num: "04",
    title: "Impact",
    desc: "Mesure rigoureuse des résultats, optimisation continue et transfert de compétences vers vos équipes internes.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process">
      <div className="lbl" data-n="04">Notre approche</div>
      <h2>Comment nous<br /><em>travaillons</em></h2>
      <div className="proc-grid">
        {steps.map((step, i) => (
          <div key={step.num} className={`proc rv${i > 0 ? ` d${i}` : ""}`}>
            <div className="proc-step">Étape — {step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <div className="proc-bg">{step.num}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
