export function HeroProtocol() {
  return (
    <aside className="heroProtocol" aria-label="TermLink protocol profile">
      <div className="protocolSignal" aria-hidden="true"><i /><i /><i /></div>
      <div><span>Transport</span><strong>Bluetooth LE</strong></div>
      <div><span>Storage</span><strong>Memory only</strong></div>
      <div><span>Cloud hops</span><strong>Zero</strong></div>
      <div><span>Session keys</span><strong>Temporary</strong></div>
    </aside>
  );
}
