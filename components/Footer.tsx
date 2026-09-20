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
          <div><span>Project</span><a href="https://github.com/anbv29/termlink" target="_blank" rel="noreferrer">Source code</a><a href="#features">Features</a></div>
          <div><span>Details</span><a href="https://github.com/anbv29/termlink-web/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT license</a><a href="https://github.com/anbv29/termlink/issues" target="_blank" rel="noreferrer">Contact</a></div>
        </div>
      </div>
      <div className="shell footerBottom"><span>© 2026 TermLink</span><span>Made in Rust. Presented in Next.js.</span></div>
    </footer>
  );
}
