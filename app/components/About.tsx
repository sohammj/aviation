export default function About() {
  return (
    <section
      id="about"
      className="section bg-black text-white border-t border-b border-white/5"
    >
      <div className="mx-auto max-w-4xl px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Aviation-first engineering.
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          AeroSoft Systems designs and delivers modern aviation-grade platforms
          for operators, charter fleets, dispatch teams and training
          organizations. We combine operational know-how with robust software
          architecture to build systems that are reliable in the air and on the
          ground.
        </p>

        <div className="mt-8 grid gap-6 text-sm text-white/60 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Focus
            </p>
            <p className="mt-1">Flight operations, crew, training &amp; MRO</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Approach
            </p>
            <p className="mt-1">Cloud-native, safety-driven, interoperable</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Delivery
            </p>
            <p className="mt-1">From discovery and PoC to full rollout</p>
          </div>
        </div>
      </div>
    </section>
  );
}
