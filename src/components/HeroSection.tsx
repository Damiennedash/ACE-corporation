"use client";

import { useEffect, useRef, useState } from "react";

const tags = ["Strategy", "Data Science", "Cloud", "Machine Learning", "IoT", "Cybersécurité"];

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

function AnimatedBar({ pct, duration = 1200 }: { pct: number; duration?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf.current);
      if (entry.isIntersecting) {
        setWidth(0);
        const begin = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - begin) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setWidth(Math.floor(eased * pct));
          if (p < 1) raf.current = requestAnimationFrame(tick);
          else setWidth(pct);
        };
        raf.current = requestAnimationFrame(tick);
      } else {
        setWidth(0);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(raf.current); };
  }, [pct, duration]);

  return (
    <div ref={ref} className="h-1 bg-gray-100 rounded-full">
      <div className="h-1 bg-[#2563EB] rounded-full transition-none" style={{ width: `${width}%` }} />
    </div>
  );
}

function DataVisual() {
  return (
    <div className="relative w-full max-w-[500px] h-[460px] flex items-center justify-center mx-auto">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] opacity-90" />
      <div className="absolute w-[420px] h-[420px] rounded-full" style={{ border: "1.5px dashed rgba(37,99,235,0.4)" }} />

      {/* Stats card - top left */}
      <div className="absolute top-10 left-6 bg-white rounded-2xl shadow-lg p-4 w-44 z-20">
        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">Performance</p>
        <div className="flex flex-col gap-2">
          {([["Data & IA", 92], ["Cloud", 78], ["Conseil", 85]] as [string, number][]).map(([label, val]) => (
            <div key={label}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[9px] text-gray-500">{label}</span>
                <span className="text-[9px] font-bold text-gray-700"><CountUp to={val} suffix="%" /></span>
              </div>
              <AnimatedBar pct={val} />
            </div>
          ))}
        </div>
      </div>

      {/* Main dark dashboard card - center */}
      <div className="absolute z-10" style={{ top: "20%", left: "50%", transform: "translateX(-50%) rotate(-5deg)" }}>
        <div className="w-64 bg-gradient-to-br from-[#1a2535] to-[#0d1a26] rounded-2xl p-5 shadow-2xl">
          <div className="flex justify-between items-start mb-3">
            <div className="w-8 h-8 bg-[#2563EB] rounded-sm flex items-center justify-center text-white text-xs font-bold">ACE</div>
            <span className="text-white/40 text-xs">Tableau de bord</span>
          </div>
          <p className="text-white/50 text-[10px] tracking-widest uppercase mb-1">Domaines couverts</p>
          <p className="text-white text-3xl font-bold tracking-tight"><CountUp to={18} suffix="+" /></p>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {([{ n: 11, sfx: "+", l: "Experts" }, { n: 360, sfx: "°", l: "Vision" }, { n: 100, sfx: "%", l: "Qualité" }]).map(({ n, sfx, l }) => (
              <div key={l} className="bg-white/5 rounded-lg p-2 text-center">
                <p className="text-white text-sm font-bold leading-none"><CountUp to={n} suffix={sfx} duration={n === 360 ? 1800 : 1400} /></p>
                <p className="text-white/40 text-[8px] mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue accent card - bottom */}
      <div className="absolute z-20" style={{ bottom: "8%", left: "54%", transform: "translateX(-38%) rotate(4deg)" }}>
        <div className="w-52 bg-gradient-to-br from-[#60A5FA] via-[#2563EB] to-[#1E40AF] rounded-2xl p-4 shadow-2xl">
          <p className="text-white/70 text-[10px] font-medium uppercase tracking-wider">Abidjan, Côte d&apos;Ivoire</p>
          <p className="text-white font-bold text-base mt-1">ace-corporate.com</p>
          <p className="text-white/60 text-xs mt-2">Services & Conseil en informatique</p>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute top-1/3 -right-2 bg-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 z-30">
        <div className="w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">↑</span>
        </div>
        <span className="text-sm font-semibold text-gray-800">Data-driven</span>
      </div>

      {/* IA badge */}
      <div className="absolute bottom-14 right-6 bg-[#1a1a2e] rounded-full px-3 py-1.5 shadow-lg z-30">
        <span className="text-[#2563EB] text-xs font-bold tracking-wide">IA & ML</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-[#f5f4ef] pt-16 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] uppercase text-[#2563EB] mb-8">
            <span className="w-8 h-px bg-[#2563EB]" />
            Consulting · Analytics · Innovation
          </p>

          <h1 className="text-[3rem] leading-[1.05] font-bold text-[#1a1a2e] tracking-tight">
            Vos <span className="text-[#2563EB] italic font-light" style={{ fontFamily: "Georgia, serif" }}>données,</span><br />
            votre<br />
            <span className="text-[#2563EB]">avantage.</span>
          </h1>

          <p className="mt-6 text-gray-500 leading-relaxed max-w-sm text-[15px]">
            ACE transforme la complexité des données d&apos;entreprise en décisions
            stratégiques — pour PME et grands comptes, dans tous les secteurs.
          </p>

          <div className="mt-8 flex items-center gap-5 flex-wrap">
            <a href="#services"
              className="bg-[#2563EB] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#1D4ED8] transition-colors shadow-md shadow-[#2563EB]/30 inline-flex items-center gap-2">
              Nos services <span>→</span>
            </a>
            <a href="#about"
              className="text-sm font-medium text-gray-600 border-b border-gray-300 pb-0.5 hover:text-[#1a1a2e] hover:border-[#1a1a2e] transition-colors">
              Notre histoire
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600 shadow-sm hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] cursor-pointer transition-all duration-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DataVisual />
        </div>
      </div>
    </section>
  );
}
