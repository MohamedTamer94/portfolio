import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 text-zinc-500">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-zinc-400">
          © {new Date().getFullYear()} Mohamed Tamer. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <Link
            href="/#about"
            className="text-zinc-400 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/#work"
            className="text-zinc-400 hover:text-white transition"
          >
            Work
          </Link>
          <Link
            href="/projects"
            className="text-zinc-400 hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-zinc-400 hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}