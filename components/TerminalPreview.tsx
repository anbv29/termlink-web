export function TerminalPreview() {
  return (
    <div className="terminalShowcase glassCard" data-spotlight data-reveal>
      <div className="terminalChrome">
        <span className="terminalLights" aria-hidden="true"><i /><i /><i /></span>
        <span>termlink.exe · encrypted session</span>
        <span className="memoryBadge"><i aria-hidden="true" /> RAM only</span>
      </div>
      <div className="terminalBody">
        <div className="terminalTranscript" aria-label="Example TermLink conversation">
          <p className="terminalSystem"><span>12:42:08</span> Nearby peer discovered: NOVA</p>
          <div className="verifyRow"><span>Verify on both screens</span><strong>472&nbsp; 915</strong><small>Matched</small></div>
          <div className="chatLine chatSent"><span>You · 12:42</span><p>No signal here. Still with me?</p></div>
          <div className="chatLine chatReceived"><span>Nova · 12:42</span><p>Loud and clear—over Bluetooth.</p></div>
          <p className="deliveryLine"><span aria-hidden="true">✓✓</span> authenticated delivery</p>
          <div className="terminalPrompt"><span aria-hidden="true">›</span><span className="promptText">Message Nova</span><i aria-hidden="true" /></div>
        </div>
        <aside className="sessionFacts" aria-label="Example session facts">
          <div><span>Route</span><strong>Direct</strong><small>1 BLE hop</small></div>
          <div><span>Disk writes</span><strong>0 bytes</strong><small>session stays in RAM</small></div>
          <div><span>On exit</span><strong>Discarded</strong><small>messages + keys</small></div>
        </aside>
      </div>
    </div>
  );
}
