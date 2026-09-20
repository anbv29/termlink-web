"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`siteHeader${scrolled ? " isScrolled" : ""}`}>
      <nav className="shell navShell" aria-label="Primary navigation">
        <a className="brand" href="#top"><Logo /></a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#download">Download</a>
        </div>
        <a className="navSource" href="https://github.com/anbv29/termlink" target="_blank" rel="noreferrer">
          Source <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
