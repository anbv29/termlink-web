const promises = [
  { number: "01", title: "No internet", copy: "TermLink talks directly over Bluetooth Low Energy. No Wi-Fi, cellular data, or cloud route." },
  { number: "02", title: "Encrypted end to end", copy: "Temporary session keys encrypt the conversation before it ever leaves your terminal." },
  { number: "03", title: "Nothing is saved", copy: "Messages, names, and keys stay in memory only. Close TermLink and they disappear." },
  { number: "04", title: "Nothing to install", copy: "Send one portable Windows file. Your friend does not need Rust, Cargo, or an account." },
];

export function PromiseGrid() {
  return (
    <div className="promiseGrid">
      {promises.map((item) => (
        <article className="glassCard promiseCard" data-reveal key={item.number}>
          <span className="cardNumber">{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  );
}
