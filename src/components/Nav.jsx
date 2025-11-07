import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold tracking-wide">KA</a>
        <button className="sm:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <ul className="hidden items-center gap-6 sm:flex">
          <li><a className="text-sm text-white/80 hover:text-white" href="#about">About</a></li>
          <li><a className="text-sm text-white/80 hover:text-white" href="#projects">Projects</a></li>
          <li><a className="text-sm text-white/80 hover:text-white" href="#contact">Contact</a></li>
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden">
          <ul className="space-y-2 border-t border-white/10 bg-black/80 px-6 py-3 text-white">
            <li><a onClick={() => setOpen(false)} className="block py-1 text-sm text-white/80 hover:text-white" href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} className="block py-1 text-sm text-white/80 hover:text-white" href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} className="block py-1 text-sm text-white/80 hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
