export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-6 text-xs text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 md:flex-row">
        <p>AeroSoft Systems © {new Date().getFullYear()}</p>
        <p>Built for aviation operators, fleets and training organizations.</p>
      </div>
    </footer>
  );
}
