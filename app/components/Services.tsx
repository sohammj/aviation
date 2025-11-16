const SERVICES = [
  {
    title: "Flight Operations Control",
    desc: "Live fleet status, delay codes, disruption management and operational dashboards.",
  },
  {
    title: "Crew Scheduling & Duty",
    desc: "Pairing, rostering and duty-time compliance with configurable fatigue rules.",
  },
  {
    title: "Maintenance & Tech Logs",
    desc: "Digital defect logging, MEL/CDL workflows and aircraft reliability tracking.",
  },
  {
    title: "Training & Compliance",
    desc: "Currency, checks, recurrent training and regulatory reporting in one place.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Aviation software suite.
        </h2>
        <p className="text-white/65 max-w-2xl text-sm md:text-base">
          Modular systems that can be deployed individually or as a connected
          platform, aligned with your operations and existing tools.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/3 px-6 py-6 backdrop-blur-md hover:border-white/25 hover:bg-white/8 transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
