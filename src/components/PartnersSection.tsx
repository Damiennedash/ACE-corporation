const partners = [
  { name: "Google Cloud", logo: <span className="text-xl font-bold text-gray-600 tracking-tight">Google <span className="text-[#2563EB]">Cloud</span></span> },
  { name: "Microsoft Azure", logo: <span className="text-xl font-bold text-gray-600">Microsoft</span> },
  { name: "Amazon AWS", logo: <span className="text-xl font-bold text-gray-600 tracking-wider">AWS</span> },
  { name: "IBM", logo: <span className="text-2xl font-black text-gray-600 tracking-widest">IBM</span> },
  { name: "Deloitte", logo: <span className="text-xl font-bold text-gray-600">Deloitte<span className="text-[#2563EB]">.</span></span> },
];

export default function PartnersSection() {
  return (
    <section className="bg-[#f5f4ef] py-14 px-6 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-[#2563EB] mb-10">
          Partenaires technologiques
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <div key={p.name} className="opacity-50 hover:opacity-100 transition-opacity duration-200">
              {p.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
