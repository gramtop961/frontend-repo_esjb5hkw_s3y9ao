import { Check, Sparkles, Play, Users, Shield, Gauge } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    { icon: Play, title: 'Upload video', text: 'Drop in a clip or connect your library.' },
    { icon: Gauge, title: 'AI analyzes', text: 'Detects rhythm, emotion, hooks, and sentiment.' },
    { icon: Sparkles, title: 'Get insights', text: 'Actionable edits to lift engagement and retention.' },
  ];

  return (
    <section id="product" className="py-20 bg-[#0B0B10]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Sora, Inter, sans-serif' }}>How it works</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Three steps from upload to insights.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF] flex items-center justify-center text-white shadow-lg">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KeyFeatures() {
  const features = [
    { title: 'Engagement Scoring', text: 'Predictive score blending watch-time, tap-rate, and sentiment.' },
    { title: 'Hook Heatmap', text: 'Frame-by-frame attention map to sharpen your opening.' },
    { title: 'Caption Coach', text: 'Tighten language and pacing with tone-aware prompts.' },
    { title: 'Trend Alignment', text: 'Detect trending audio, formats, and cadence in your niche.' },
    { title: 'Team Workspaces', text: 'Roles, comments, and versioning for fast iteration.' },
    { title: 'Privacy-first', text: 'Your data is encrypted and never sold. Ever.' },
  ];

  return (
    <section className="py-20 bg-[#0B0B10]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Sora, Inter, sans-serif' }}>Key features</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur">
              <div className="flex items-center gap-2 text-[#00E5FF]">
                <Check className="h-5 w-5" />
                <span className="text-sm">Feature</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  const tabs = [
    { id: 'creators', label: 'Creators', content: 'Find your rhythm. Sharpen hooks. Ship faster.' },
    { id: 'agencies', label: 'Agencies', content: 'Guide clients with data-backed creative coaching.' },
    { id: 'brands', label: 'Brands', content: 'Improve retention and cut production guesswork.' },
  ];

  return (
    <section id="use-cases" className="py-20 bg-[#0B0B10]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Sora, Inter, sans-serif' }}>Use cases</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 flex lg:flex-col gap-2 overflow-auto">
            {tabs.map(t => (
              <a key={t.id} href={`#tab-${t.id}`} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition">
                {t.label}
              </a>
            ))}
          </div>
          <div className="lg:col-span-2 space-y-6">
            {tabs.map(t => (
              <div key={t.id} id={`tab-${t.id}`} className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/80">
                <h3 className="text-xl text-white font-semibold">{t.label}</h3>
                <p className="mt-2">{t.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    { name: 'Starter', price: 'Free', features: ['3 videos / month', 'Basic insights', 'Community support'], highlight: false },
    { name: 'Pro', price: '$29', suffix: '/mo', features: ['30 videos / month', 'Advanced analytics', 'Caption Coach', 'Priority support'], highlight: true },
    { name: 'Team', price: '$99', suffix: '/mo', features: ['Unlimited projects', 'Team workspaces', 'Shared libraries', 'SSO + Roles'], highlight: false },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0B0B10]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Sora, Inter, sans-serif' }}>Pricing</h2>
        <p className="mt-2 text-white/70">Simple plans that scale with you.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border backdrop-blur ${p.highlight ? 'bg-[#7C3AED]/10 border-[#7C3AED]/40 shadow-[0_0_40px_rgba(124,58,237,0.25)]' : 'bg-white/5 border-white/10'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                {p.highlight && <span className="text-xs px-2 py-1 rounded bg-[#7C3AED] text-white">Popular</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-1 text-white">
                <span className="text-3xl font-bold" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{p.price}</span>
                {p.suffix && <span className="text-white/60">{p.suffix}</span>}
              </div>
              <ul className="mt-4 space-y-2">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-white/80">
                    <Check className="h-4 w-4 text-[#00E5FF]" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-6 block text-center px-4 py-2 rounded-xl transition ${p.highlight ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white' : 'bg-white/10 hover:bg-white/15 text-white'}`}>Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-20 bg-[#0B0B10]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Sora, Inter, sans-serif' }}>Create your next viral iteration.</h2>
        <p className="mt-3 text-white/70">Precise insights. Human decisions. Better results.</p>
        <div className="mt-6 inline-flex p-1 rounded-2xl bg-white/10 border border-white/10">
          <a href="#get-started" className="px-6 py-3 rounded-xl bg-[#7C3AED] text-white font-medium hover:bg-[#6D28D9] transition">Get started</a>
          <a href="#contact" className="px-6 py-3 rounded-xl text-white/90 hover:text-white">Talk to sales</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="about" className="bg-[#0B0B10] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#00E5FF] to-[#F59E0B]" />
          <p className="mt-4 text-white/70">Vyouuz helps creators engineer content for real engagement.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#product" className="hover:text-white">How it works</a></li>
            <li><a href="#use-cases" className="hover:text-white">Use cases</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="text-white font-semibold">Stay in the loop</h4>
          <form className="mt-3 flex gap-2">
            <input type="email" required placeholder="Email address" className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/40" />
            <button className="px-4 py-3 rounded-xl bg-[#00E5FF] text-black font-medium hover:bg-[#00D1EA]">Join</button>
          </form>
          <p className="mt-2 text-xs text-white/50">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} Vyouuz. All rights reserved.</div>
    </footer>
  );
}
