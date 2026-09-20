"use client";

import { useEffect } from "react";

export function SpotlightPointer() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    let latest: PointerEvent | null = null;
    const paint = () => {
      if (!latest) return;
      const card = (latest.target as Element | null)?.closest<HTMLElement>("[data-spotlight]");
      if (card) {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${latest.clientX - bounds.left}px`);
        card.style.setProperty("--spot-y", `${latest.clientY - bounds.top}px`);
      }
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      latest = event;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    document.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move);
    };
  }, []);

  return null;
}
