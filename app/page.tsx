import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";
import { MeshField } from "@/components/MeshField";
import { PromiseGrid } from "@/components/PromiseGrid";
import { FeatureGrid } from "@/components/FeatureGrid";
import { WorkflowSteps } from "@/components/WorkflowSteps";

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
        <section className="section featureSection" id="features" aria-labelledby="features-title">
          <div className="shell">
            <div className="sectionIntro">
              <p className="kicker">Built for the radio silence</p>
              <h2 id="features-title">Small footprint.<br />Serious protocol.</h2>
              <p>A local-first tool can still be careful about identity, delivery, and unreliable connections.</p>
            </div>
            <FeatureGrid />
          </div>
        </section>
        <section className="section workflowSection" id="how-it-works" aria-labelledby="workflow-title">
          <div className="shell workflowLayout">
            <div className="sectionIntro workflowIntro">
              <p className="kicker">How it works</p>
              <h2 id="workflow-title">Four steps.<br />No middleman.</h2>
              <p>Everything needed for the conversation exists only while the two terminals are talking.</p>
            </div>
            <WorkflowSteps />
          </div>
        </section>
        <section className="section" id="download" aria-labelledby="download-title"><div className="shell"><h2 id="download-title">Download</h2></div></section>
      </main>
      <footer className="siteFooter"><div className="shell footerShell"><Logo /><span>Offline by design.</span></div></footer>
    </>
  );
}
