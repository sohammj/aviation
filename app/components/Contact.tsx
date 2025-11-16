export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0A0F14] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12">Get in touch</h2>

        <form className="space-y-6">
          <input className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white" placeholder="Name" />
          <input className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white" placeholder="Email" />
          <textarea className="w-full px-4 py-3 h-32 bg-black/40 border border-white/10 rounded-lg text-white" placeholder="Message" />

          <button className="w-full py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
