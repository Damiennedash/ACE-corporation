"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Search size={18} className="text-white" />,
    title: "Découverte",
    desc: "Analyse approfondie de votre contexte et audit de maturité digitale.",
  },
  {
    icon: <Map size={18} className="text-white" />,
    title: "Stratégie",
    desc: "Co-construction d'une roadmap sur mesure alignée à vos objectifs business.",
  },
  {
    icon: <Rocket size={18} className="text-white" />,
    title: "Implémentation",
    desc: "Déploiement agile avec livraisons itératives et transparence totale.",
  },
  {
    icon: <TrendingUp size={18} className="text-white" />,
    title: "Impact",
    desc: "Mesure rigoureuse des résultats et transfert de compétences vers vos équipes.",
  },
];

function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf.current);
      if (entry.isIntersecting) {
        setCount(0);
        const begin = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - begin) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(eased * to));
          if (p < 1) raf.current = requestAnimationFrame(tick);
          else setCount(to);
        };
        raf.current = requestAnimationFrame(tick);
      } else {
        setCount(0);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(raf.current); };
  }, [to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function AboutMockup() {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      <div className="bg-[#0f1e2a] rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2563EB] rounded-sm flex items-center justify-center text-white text-xs font-bold">ACE</div>
            <span className="text-white text-sm font-medium">Dashboard</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-xs">◎</div>
        </div>

        <p className="text-white/40 text-xs mb-1 tracking-wide uppercase">Consultants actifs</p>
        <p className="text-white text-3xl font-bold tracking-tight">
          <CountUp to={11} /> <span className="text-[#2563EB]">experts</span>
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="bg-white/5 rounded-xl p-3">
            <p className="text-white font-bold text-lg leading-none"><CountUp to={18} suffix="+" /></p>
            <p className="text-white/40 text-[10px] mt-1">Domaines</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <p className="text-white font-bold text-lg leading-none"><CountUp to={360} suffix="°" duration={1800} /></p>
            <p className="text-white/40 text-[10px] mt-1">Vision</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <p className="text-white font-bold text-lg leading-none"><CountUp to={100} suffix="%" /></p>
            <p className="text-white/40 text-[10px] mt-1">Qualité</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <p className="text-white font-bold text-lg leading-none">∞</p>
            <p className="text-white/40 text-[10px] mt-1">Potentiel</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-5">
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 text-white text-xs py-2.5 rounded-full">
            <span>📍</span> Abidjan, CI
          </button>
          <a href="#contact"
            className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg hover:bg-[#1D4ED8] transition-colors">→</a>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="approach" className="bg-[#2563EB] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AboutMockup />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-10">
            Notre approche en<br />4 étapes clés
          </h2>
          <div className="flex flex-col gap-7">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 shadow-md">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
