import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-[#0B0B10] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B10]/60 via-[#0B0B10]/70 to-[#0B0B10] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
          Human‑tuned AI • Privacy‑first
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: 'Sora, Inter, sans-serif' }}>
          Your content, engineered for virality.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Vyouuz reads rhythm, reactions, and emotion to help you grow smarter.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#pricing" className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium shadow-xl shadow-[#7C3AED]/30 transition">Start free</a>
          <a href="#product" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10 transition">See how it works</a>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/70">
          <Stat label="Avg. Engagement Lift" value="+28%" />
          <Stat label="Retention Boost" value="+17%" />
          <Stat label="Time Saved / wk" value="9.2h" />
          <Stat label="Teams onboarded" value="2.4k" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-xl font-semibold text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{value}</div>
    </div>
  );
}
