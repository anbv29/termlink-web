import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerShell">
        <div className="footerBrand">
          <a className="brand" href="#top"><Logo /></a>
          <p>Private, temporary communication for the moments when the network is not an option.</p>
        </div>
        <div className="footerLinks" aria-label="Project links">
          <div><span>Explore</span><a href="#demo">Demo</a><a href="#features">Features</a></div>
          <div><span>TermLink</span><a href="#how-it-works">How it works</a><a href="#download">Download</a></div>
        </div>
      </div>
      <div className="shell footerBottom"><span>© 2026 TermLink</span><span>Built in Rust by Anubhav</span></div>
    </footer>
  );
}
