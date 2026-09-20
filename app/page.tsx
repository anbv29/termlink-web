import { NavBar } from "@/components/NavBar";
import { MeshField } from "@/components/MeshField";
import { PromiseGrid } from "@/components/PromiseGrid";
import { FeatureGrid } from "@/components/FeatureGrid";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { NetworkDiagram } from "@/components/NetworkDiagram";
import { DownloadPanel } from "@/components/DownloadPanel";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { CursorTrail } from "@/components/CursorTrail";
import { HeroProtocol } from "@/components/HeroProtocol";
import { SpotlightPointer } from "@/components/SpotlightPointer";
import { TerminalPreview } from "@/components/TerminalPreview";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <CursorTrail />
      <SpotlightPointer />
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
          <div className="shell heroProtocolWrap"><HeroProtocol /></div>
        </section>
        <section className="section promiseSection" id="promise" aria-labelledby="promise-title">
          <div className="shell">
            <div className="sectionIntro" data-reveal>
              <p className="kicker">The core promise</p>
              <h2 id="promise-title">Private by design.<br />Temporary on purpose.</h2>
              <p>TermLink removes the infrastructure that usually stands between two people.</p>
            </div>
            <PromiseGrid />
          </div>
        </section>
        <section className="section demoSection" id="demo" aria-labelledby="demo-title">
          <div className="shell">
            <div className="sectionIntro demoIntro" data-reveal>
              <p className="kicker">Inside a live session</p>
              <h2 id="demo-title">A terminal that<br />leaves no trail.</h2>
              <p>Verify the person, talk directly, then close the window. The conversation exists only for the session.</p>
            </div>
            <TerminalPreview />
          </div>
        </section>
        <section className="section featureSection" id="features" aria-labelledby="features-title">
          <div className="shell">
            <div className="sectionIntro" data-reveal>
              <p className="kicker">Built for the radio silence</p>
              <h2 id="features-title">Small footprint.<br />Serious protocol.</h2>
              <p>A local-first tool can still be careful about identity, delivery, and unreliable connections.</p>
            </div>
            <FeatureGrid />
          </div>
        </section>
        <section className="section workflowSection" id="how-it-works" aria-labelledby="workflow-title">
          <div className="shell workflowLayout">
            <div className="sectionIntro workflowIntro" data-reveal>
              <p className="kicker">How it works</p>
              <h2 id="workflow-title">Four steps.<br />No middleman.</h2>
              <p>Everything needed for the conversation exists only while the two terminals are talking.</p>
            </div>
            <WorkflowSteps />
            <div className="workflowDiagram" data-reveal><NetworkDiagram /></div>
          </div>
        </section>
        <section className="section downloadSection" id="download" aria-labelledby="download-title">
          <div className="shell" data-reveal><DownloadPanel /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
