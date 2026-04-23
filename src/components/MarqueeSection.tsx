const items = [
  "Strategy", "Business Analytics", "Cloud Computing", "Machine Learning",
  "Deep Learning", "Data Science", "IoT", "Cybersecurity",
  "IT Infrastructure", "Mobile Solutions", "Big Data", "Research",
];

export default function MarqueeSection() {
  return (
    <div className="mq">
      <div className="mq-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="mq-item">{item}</div>
        ))}
      </div>
    </div>
  );
}
