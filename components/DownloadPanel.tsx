const checksum = "2E8F98F680861373959440B08C8C7D845D46EE833EB970317D1A20EF40417A24";

export function DownloadPanel() {
  return (
    <div className="downloadPanel glassCard">
      <div className="downloadCopy">
        <p className="kicker">Ready when you are</p>
        <h2 id="download-title">Take TermLink<br />off the grid.</h2>
        <p>One portable file. Run it from PowerShell or Windows Terminal—no installer and no account.</p>
      </div>
      <div className="downloadAction">
        <a className="button buttonPrimary downloadButton" href="/downloads/TermLink-Windows.zip" download>
          <span><b>Download for Windows</b><small>TermLink-Windows.zip</small></span>
          <span className="downloadArrow" aria-hidden="true">↓</span>
        </a>
        <dl className="fileFacts">
          <div><dt>Version</dt><dd>0.1.0</dd></div>
          <div><dt>Platform</dt><dd>Windows x64</dd></div>
          <div><dt>Size</dt><dd>687 KB</dd></div>
        </dl>
        <a className="githubButton" href="https://github.com/anbv29/termlink" target="_blank" rel="noreferrer">
          <span className="githubMark" aria-hidden="true">&lt;/&gt;</span>
          View source on GitHub <span aria-hidden="true">↗</span>
        </a>
        <details className="checksum">
          <summary>SHA-256 checksum</summary>
          <code>{checksum}</code>
        </details>
      </div>
    </div>
  );
}
