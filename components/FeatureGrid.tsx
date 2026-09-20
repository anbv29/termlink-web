const features = [
  ["BL", "Bluetooth-native", "Chat directly over Bluetooth Low Energy, even when every nearby network is unavailable."],
  ["00", "Zero infrastructure", "No internet, Wi-Fi, server, MySQL database, or third-party service sits in the path."],
  ["NP", "No Windows pairing", "TermLink discovers compatible peers without adding them to Windows' paired-device list."],
  ["E2", "End-to-end encrypted", "Fresh temporary keys protect each conversation from the sender's terminal to the receiver's."],
  ["#", "Verified connection", "Compare a short pairing code before chatting so you know you reached the right person."],
  ["RAM", "Memory only", "Messages, keys, peer names, and active sessions never need to touch permanent storage."],
  ["ESC", "Gone on exit", "Close the process and its temporary conversation state is discarded with it."],
  ["12", "Human context", "Local timestamps and temporary friend names keep a live conversation easy to follow."],
  ["✓", "Confirmed delivery", "Authenticated acknowledgements tell you that the intended session received a message."],
  ["1:N", "Nearby peers", "Discover and hold separate sessions with multiple TermLink users in Bluetooth range."],
  ["↗", "Bounded relays", "Other TermLink computers can relay packets across a small mesh with strict hop limits."],
  ["∞", "Resilient transport", "Duplicate filtering, rate limits, retries, and session expiry keep the mesh controlled."],
  ["EXE", "Truly portable", "Share one Windows executable—your friend needs neither Rust nor Cargo installed."],
] as const;

export function FeatureGrid() {
  return (
    <div className="featureGrid">
      {features.map(([symbol, title, copy], index) => (
        <article className={`featureCard${index === 0 || index === 12 ? " featureWide" : ""}`} data-reveal key={title}>
          <span className="featureSymbol" aria-hidden="true">{symbol}</span>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
