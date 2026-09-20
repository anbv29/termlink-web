export function NetworkDiagram() {
  return (
    <figure className="networkDiagram glassCard" aria-labelledby="diagram-caption">
      <div className="diagramStage" aria-hidden="true">
        <div className="peer peerAlice"><span className="statusDot" />YOU<small>Terminal A</small></div>
        <div className="peer peerRelay"><span className="relayRings" />RELAY<small>hop 1 of 3</small></div>
        <div className="peer peerFriend"><span className="statusDot" />FRIEND<small>Terminal B</small></div>
        <span className="connection connectionOne"><i /></span>
        <span className="connection connectionTwo"><i /></span>
        <span className="packet packetOne">encrypted</span>
        <span className="packet packetTwo">verified</span>
      </div>
      <figcaption id="diagram-caption">
        <span>BLE mesh route</span>
        <span>Keys stay at the endpoints</span>
      </figcaption>
    </figure>
  );
}
