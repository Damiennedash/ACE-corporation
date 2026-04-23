const expertises = [
  "Strategy", "Business Analytics", "Big Data", "Cloud Computing",
  "Mobile Applications", "Cybersecurity", "Research & Development",
  "Internet of Things (IoT)", "Technology Support", "Industry Solutions",
  "Systems Services", "IT Infrastructure", "Business Software",
  "Design & Developer Tools", "Data Science", "Machine Learning",
  "Deep Learning", "Consulting",
];

const bars = [
  { label: "Data & Intelligence Artificielle", w: "92%" },
  { label: "Cloud & Infrastructure", w: "78%" },
  { label: "Stratégie & Conseil", w: "85%" },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise">
      <div className="lbl" data-n="03">Nos spécialisations</div>
      <h2>Notre <em>expertise</em><br />en détail</h2>
      <div className="exp-layout">
        <ul className="exp-list">
          {expertises.map((item, i) => (
            <li key={item} className={`exp-li rv${i % 4 > 0 ? ` d${i % 4}` : ""}`}>
              <span>{item}</span>
              <div className="edot" />
            </li>
          ))}
        </ul>
        <div className="exp-panel rv d2">
          <div>
            <div className="ep-label">Chiffre clé</div>
            <div className="ep-big"><em>18</em></div>
            <div className="ep-sub">domaines de spécialisation</div>
          </div>
          <div className="ep-bars">
            {bars.map((bar) => (
              <div key={bar.label} className="ep-bar">
                <div className="ep-bar-lbl">{bar.label}</div>
                <div className="ep-track">
                  <div className="ep-fill" data-w={bar.w} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
