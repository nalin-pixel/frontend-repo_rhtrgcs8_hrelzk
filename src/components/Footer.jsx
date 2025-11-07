export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-black">Let’s connect</h3>
            <p className="mt-1 text-sm text-gray-600">
              Open to mentorship, internships, and collaborations.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:hello@khrisna.dev"
              className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Khrisna Al Akbar. Built with care and curiosity.</p>
      </div>
    </footer>
  );
}
