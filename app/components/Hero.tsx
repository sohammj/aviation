export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">

      {/* Video Background */}
      <video
        src="/video/cockpit-landing.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-semibold leading-tight">
          Aviation systems built for <br /> precision and performance.
        </h1>

        <p className="mt-4 text-white/60 text-lg">
          Enterprise-grade platforms for operators, crew, charter fleets & aviation academies.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <a href="#services" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            View Services
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
