export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      {/* Background video */}
      <video
        src="/video/cockpit-landing.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-[0.35]"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black" />

      {/* Content */}
      <div className="relative max-w-3xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white">
          Aviation systems built for{" "}
          <span className="block">precision and performance.</span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-white/70">
          Enterprise-grade platforms for operators, crew, charter fleets and
          aviation academies.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <a
            href="#services"
            className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-white/15 transition-colors"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-medium text-white/85 hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
