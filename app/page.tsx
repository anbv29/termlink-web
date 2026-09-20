import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";
import { MeshField } from "@/components/MeshField";
import { PromiseGrid } from "@/components/PromiseGrid";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavBar />
      <main id="main-content">
        <section className="section hero" id="top" aria-labelledby="hero-title">
          <MeshField />
          <div className="shell heroContent">
            <p className="eyebrow"><span aria-hidden="true" /> Private messaging, off the grid</p>
            <h1 id="hero-title">Chat that never<br />touches the internet.</h1>
            <p className="heroLead">
              End-to-end encrypted terminal chat over Bluetooth Low Energy. No Wi-Fi, no server,
              no accounts—and nothing left behind.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#download">
                Download for Windows <span aria-hidden="true">↓</span>
              </a>
              <a className="textLink" href="#how-it-works">See how it works <span aria-hidden="true">→</span></a>
            </div>
            <p className="heroNote">Free and open source · Windows 10/11 · Portable</p>
          </div>
        </section>
        <section className="section promiseSection" id="promise" aria-labelledby="promise-title">
          <div className="shell">
            <div className="sectionIntro">
              <p className="kicker">The core promise</p>
              <h2 id="promise-title">Private by design.<br />Temporary on purpose.</h2>
              <p>TermLink removes the infrastructure that usually stands between two people.</p>
            </div>
            <PromiseGrid />
          </div>
        </section>
        <section className="section" id="features" aria-labelledby="features-title"><div className="shell"><h2 id="features-title">Features</h2></div></section>
        <section className="section" id="how-it-works" aria-labelledby="workflow-title"><div className="shell"><h2 id="workflow-title">How it works</h2></div></section>
        <section className="section" id="download" aria-labelledby="download-title"><div className="shell"><h2 id="download-title">Download</h2></div></section>
      </main>
      <footer className="siteFooter"><div className="shell footerShell"><Logo /><span>Offline by design.</span></div></footer>
    </>
  );
}
