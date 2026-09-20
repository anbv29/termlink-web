"use client";

import { useEffect, useState } from "react";

export function PageUtilities() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const returnToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button className={`backToTop${visible ? " isVisible" : ""}`} type="button" onClick={returnToTop} aria-label="Back to top">
      <span aria-hidden="true">↑</span>
    </button>
  );
}
