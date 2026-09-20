export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="TermLink home">
            <span className="brand-mark" aria-hidden="true">T</span>
            <span>TermLink</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#download">Download</a>
          </div>
        </nav>
      </header>
      <main id="main-content">
        <section className="section" id="top" aria-labelledby="hero-title"><h1 id="hero-title">TermLink</h1></section>
        <section className="section" id="features" aria-labelledby="features-title"><h2 id="features-title">Features</h2></section>
        <section className="section" id="how-it-works" aria-labelledby="workflow-title"><h2 id="workflow-title">How it works</h2></section>
        <section className="section" id="download" aria-labelledby="download-title"><h2 id="download-title">Download</h2></section>
      </main>
      <footer className="site-footer"><div className="footer-shell"><span>TermLink</span><span>Offline by design.</span></div></footer>
    </>
  );
}
