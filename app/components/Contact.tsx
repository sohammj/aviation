export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">Get in touch.</h2>

        <p className="text-white/60 max-w-2xl mb-10">
          Share a brief outline of your operation and current systems.  
          We'll follow up with a structured discovery call and a clear next step.
        </p>

        {/* Contact Info */}
        <div className="mb-12 space-y-2 text-white/80 text-lg">
          <p><span className="text-white/50">Email:</span> contact@aerosoftsystems.com</p>
          <p><span className="text-white/50">Phone:</span> +1 (202) 555-0147</p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <input
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white"
            placeholder="Name"
          />

          {/* Organization */}
          <input
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white"
            placeholder="Organization"
          />

          {/* Project Description */}
          <textarea
            className="w-full px-4 py-3 h-36 bg-black/40 border border-white/10 rounded-lg text-white"
            placeholder="Briefly describe your use case or project."
          />

          {/* Button */}
          <button className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition">
            Send enquiry
          </button>

        </form>

      </div>
    </section>
  );
}
