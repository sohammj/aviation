const items = [
  {
    title: "Flight Operations Control",
    desc: "Fleet tracking, operational dashboards, delay analytics."
  },
  {
    title: "Crew Scheduling & Duty",
    desc: "Automated rosters with fatigue & duty-time rules."
  },
  {
    title: "Maintenance & Tech Logs",
    desc: "Digital defect tracking, reliability & MEL/CDL compliance."
  },
  {
    title: "Training & Compliance",
    desc: "Crew currency, checks & regulatory oversight."
  }
];

export default function Services() {
  return (
    <section id="services" className="section bg-black">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold mb-12">Aviation Software Suite</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur">
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="text-white/60 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
