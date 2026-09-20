import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavBar />
      <main id="main-content">
        <section className="section hero" id="top" aria-labelledby="hero-title"><div className="shell"><h1 id="hero-title">TermLink</h1></div></section>
        <section className="section" id="promise" aria-labelledby="promise-title"><div className="shell"><h2 id="promise-title">Private by design.</h2></div></section>
        <section className="section" id="features" aria-labelledby="features-title"><div className="shell"><h2 id="features-title">Features</h2></div></section>
        <section className="section" id="how-it-works" aria-labelledby="workflow-title"><div className="shell"><h2 id="workflow-title">How it works</h2></div></section>
        <section className="section" id="download" aria-labelledby="download-title"><div className="shell"><h2 id="download-title">Download</h2></div></section>
      </main>
      <footer className="siteFooter"><div className="shell footerShell"><Logo /><span>Offline by design.</span></div></footer>
    </>
  );
}
