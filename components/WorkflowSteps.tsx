const steps = [
  { number: "01", title: "Verify the code", copy: "TermLink finds a nearby peer. Both people compare the same short code before accepting." },
  { number: "02", title: "Negotiate in memory", copy: "A temporary encrypted session is created in RAM. The keys are never written to disk." },
  { number: "03", title: "Chat over the mesh", copy: "Packets move directly over BLE, or through nearby TermLink relay nodes when needed." },
  { number: "04", title: "Exit and erase", copy: "End the session and every message, key, friend name, and route disappears with the process." },
];

export function WorkflowSteps() {
  return (
    <ol className="workflowSteps">
      {steps.map((step) => (
        <li data-reveal key={step.number}>
          <span className="stepNumber">{step.number}</span>
          <div><h3>{step.title}</h3><p>{step.copy}</p></div>
        </li>
      ))}
    </ol>
  );
}
