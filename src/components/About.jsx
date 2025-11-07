export default function About() {
  return (
    <section id="about" className="relative bg-white text-gray-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">About</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            I'm Khrisna Al Akbar, an 8th Grade student at MTsN 1 Trenggalek in the Digital Class. I love exploring technology—from coding and electronics to product design. My goal is to grow into a Multi‑Talent Engineer who blends software, hardware, and creativity to solve real problems.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            I focus on building small, fast, and meaningful projects, learning from every iteration. Quality over quantity—always.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-1">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white text-center">
              <div className="p-6">
                <p className="text-sm font-medium tracking-wide text-gray-500">Focus</p>
                <h3 className="mt-2 text-2xl font-semibold">Code • Circuits • Design</h3>
                <p className="mt-2 text-sm text-gray-500">Learning every day to build things that feel thoughtful and useful.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
