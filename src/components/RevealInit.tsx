"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

    document.querySelectorAll("#hero .rv").forEach((el, i) => {
      timers.push(setTimeout(() => el.classList.add("in"), 300 + i * 130));
    });

    const bObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".ep-fill").forEach((b, i) => {
              const w = b.dataset.w ?? "0";
              b.style.width = "0";
              timers.push(setTimeout(() => { b.style.width = w; }, 200 + i * 150));
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".exp-panel").forEach((el) => bObs.observe(el));

    return () => {
      obs.disconnect();
      bObs.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
