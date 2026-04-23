const services = [
  { num: "01", icon: "🚀", title: "Stratégie & Conseil", desc: "Feuilles de route, transformation organisationnelle et optimisation des performances business." },
  { num: "02", icon: "🧠", title: "Data Science & IA", desc: "Modélisation prédictive, machine learning et deep learning au service de vos décisions." },
  { num: "03", icon: "☁️", title: "Cloud & Infrastructure", desc: "Migration cloud, architecture IT et sécurisation des systèmes d'information évolutifs." },
  { num: "04", icon: "📱", title: "Mobile & Digital", desc: "Applications mobiles, solutions IoT et transformation digitale pour l'ère numérique." },
  { num: "05", icon: "🔐", title: "Cybersécurité", desc: "Audit de sécurité, protection des données et mise en conformité réglementaire." },
  { num: "06", icon: "📊", title: "Business Analytics", desc: "Tableaux de bord, Big Data et visualisation pour piloter votre performance avec précision." },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="svc-head">
        <div>
          <div className="lbl" data-n="02">Nos services</div>
          <h2>Ce que nous<br /><em>faisons</em></h2>
        </div>
        <p>Des solutions complètes, de la stratégie à l&apos;implémentation, pour transformer votre entreprise.</p>
      </div>
      <div className="svc-grid">
        {services.map((svc, i) => (
          <div key={svc.num} className={`svc rv${i % 3 > 0 ? ` d${i % 3}` : ""}`}>
            <div className="svc-overlay" />
            <div className="svc-num">Service — {svc.num}</div>
            <div className="svc-ico">{svc.icon}</div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
            <div className="svc-arr">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
