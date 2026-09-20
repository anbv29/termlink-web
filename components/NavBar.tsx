"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 32);
        setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
        frame = 0;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -56%", threshold: [0, 0.2, 0.6] },
    );
    document.querySelectorAll<HTMLElement>("main > section[id]").forEach((section) => observer.observe(section));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <header className={`siteHeader${scrolled ? " isScrolled" : ""}`}>
      <nav className="shell navShell" aria-label="Primary navigation">
        <a className="brand" href="#top"><Logo /></a>
        <div className="navLinks">
          <a className={activeSection === "features" ? "isActive" : ""} aria-current={activeSection === "features" ? "location" : undefined} href="#features">Features</a>
          <a className={activeSection === "how-it-works" ? "isActive" : ""} aria-current={activeSection === "how-it-works" ? "location" : undefined} href="#how-it-works">How it works</a>
          <a className={activeSection === "download" ? "isActive" : ""} aria-current={activeSection === "download" ? "location" : undefined} href="#download">Download</a>
        </div>
        <a className="navSource" href="https://github.com/anbv29/termlink" target="_blank" rel="noreferrer">
          Source <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <span className="scrollProgress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
