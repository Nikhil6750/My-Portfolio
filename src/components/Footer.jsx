export function Footer() {
  return (
    <footer className="border-t border-border py-7 px-6 md:px-14 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 bg-transparent relative z-10">
      <span className="font-mono text-[clamp(0.82rem,0.8vw,0.95rem)] tracking-[0.06em] text-muted">
        © 2026 <span className="text-orange">Kotla Nikhil Reddy</span>
      </span>
      <span className="font-mono text-[clamp(0.82rem,0.8vw,0.95rem)] tracking-[0.06em] text-muted">
        Built with intent
      </span>
    </footer>
  );
}
