export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-[#05070B] text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Get in touch.
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-8 max-w-2xl">
          Share a brief outline of your operation and current systems. We&apos;ll
          follow up with a structured discovery call and a clear next step.
        </p>

        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
              placeholder="Name"
            />
            <input
              className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
              placeholder="Work email"
            />
          </div>

          <input
            className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
            placeholder="Organization"
          />

          <textarea
            className="w-full h-32 rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
            placeholder="Briefly describe your use case or project."
          />

          <button
            type="submit"
            className="mt-4 w-full md:w-auto rounded-full border border-white/25 bg-white/10 px-8 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
          >
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
