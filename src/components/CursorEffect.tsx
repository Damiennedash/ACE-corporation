"use client";

import { useEffect } from "react";

const HOVER_SELECTOR = "a,button,.svc,.proc,.sc,.exp-li,.ci";

export default function CursorEffect() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onEnter = () => {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      ring.style.transform = "translate(-50%,-50%) scale(1.7)";
      ring.style.opacity = ".25";
    };
    const onLeave = () => {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.opacity = ".6";
    };

    const hoverEls = document.querySelectorAll(HOVER_SELECTOR);
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
