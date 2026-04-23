"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Approche", href: "#approach" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f5f4ef]/95 backdrop-blur-sm border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#2563EB] rounded-sm flex items-center justify-center text-white font-bold text-sm tracking-tight">
            ACE
          </div>
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#1a1a2e] hidden sm:block">
            Ahonzo Consulting Experts
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-xs font-medium tracking-widest uppercase text-gray-500 hover:text-[#1a1a2e] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-xs font-semibold border border-[#2563EB] text-[#1a1a2e] px-5 py-2 rounded-full hover:bg-[#2563EB] hover:text-white transition-all duration-200 tracking-wide">
            Nous contacter
          </a>
        </div>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f5f4ef] border-t border-gray-200/60 px-6 pb-5 pt-3 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-sm text-gray-600 py-1" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button className="mt-2 text-xs font-semibold border border-[#2563EB] text-[#1a1a2e] px-5 py-2.5 rounded-full w-fit">
            Nous contacter
          </button>
        </div>
      )}
    </nav>
  );
}
