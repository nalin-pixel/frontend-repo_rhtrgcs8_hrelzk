import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wider text-white/80 backdrop-blur">
            MTsN 1 Trenggalek • 8th Grade Digital Class
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Khrisna Al Akbar
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Aspiring Multi‑Talent Engineer exploring code, electronics, and design. I build small things that feel thoughtful, fast, and alive.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#7a5c3a] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#694f32] focus:outline-none focus:ring-2 focus:ring-[#7a5c3a]/40"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="mailto:hello@khrisna.dev"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
