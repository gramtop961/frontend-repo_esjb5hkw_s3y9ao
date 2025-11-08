import { useState } from 'react';
import { Rocket, LogIn } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B10]/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#00E5FF] to-[#F59E0B] shadow-[0_0_24px_rgba(124,58,237,0.6)]" />
            <span className="text-white text-lg font-semibold tracking-tight" style={{ fontFamily: 'Sora, Inter, sans-serif' }}>Vyouuz</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-white/80 hover:text-white transition">Product</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
            <a href="#use-cases" className="text-white/80 hover:text-white transition">Use Cases</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:text-white transition">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </a>
            <a href="#get-started" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-[#7C3AED]/30 transition">
              <Rocket className="h-4 w-4" />
              <span>Get Started</span>
            </a>
          </div>

          <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#product" className="block px-3 py-2 rounded-lg bg-white/5 text-white/90">Product</a>
            <a href="#pricing" className="block px-3 py-2 rounded-lg bg-white/5 text-white/90">Pricing</a>
            <a href="#use-cases" className="block px-3 py-2 rounded-lg bg-white/5 text-white/90">Use Cases</a>
            <a href="#about" className="block px-3 py-2 rounded-lg bg-white/5 text-white/90">About</a>
            <div className="flex gap-2 pt-2">
              <a href="#login" className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-white/90 text-center">Login</a>
              <a href="#get-started" className="flex-1 px-3 py-2 rounded-lg bg-[#7C3AED] text-white text-center">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
