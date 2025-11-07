import { Cpu, Gamepad2, ExternalLink } from 'lucide-react';

function ProjectCard({ icon: Icon, title, desc, tags, link }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-100 p-2 text-gray-800">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-semibold text-black">{title}</h3>
        </div>
        {link && (
          <a href={link} className="text-gray-400 transition hover:text-gray-700" aria-label="Open">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      <p className="mt-3 text-sm text-gray-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-[#7a5c3a]/10 px-3 py-1 text-xs font-medium text-[#7a5c3a]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">Selected Projects</h2>
            <p className="mt-2 text-sm text-gray-600">A small collection of practical builds and experiments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProjectCard
            icon={Cpu}
            title="Automatic Trash Can"
            desc="Motion‑activated trash bin using ultrasonic sensors and microcontrollers for a hygienic, hands‑free experience."
            tags={["Arduino", "Ultrasonic", "Automation", "Hardware"]}
          />

          <ProjectCard
            icon={Gamepad2}
            title="ESP‑Games"
            desc="Simple multiplayer games over Wi‑Fi using ESP microcontrollers, focusing on real‑time communication and fun logic."
            tags={["ESP8266", "Wi‑Fi", "Real‑time", "Microcontrollers"]}
          />
        </div>
      </div>
    </section>
  );
}
