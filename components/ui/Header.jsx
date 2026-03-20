"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header({ variant = "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isProjectsPage = pathname.startsWith("/projects");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = variant === "light";

  // Render navigation items based on current page
  const renderNavItems = () => {
    if (isHomePage) {
      return (
        <>
          <a href="#about" className="hover:opacity-100 transition opacity-80">
            About
          </a>
          <a href="#work" className="hover:opacity-100 transition opacity-80">
            Work
          </a>
          <Link href="/projects" className="hover:opacity-100 transition opacity-80">
            Projects
          </Link>
          <a href="#contact" className="hover:opacity-100 transition opacity-80">
            Contact
          </a>
        </>
      );
    }
    
    if (isProjectsPage) {
      return (
        <>
        <Link href="/" className="hover:opacity-100 transition opacity-80">
            Home
          </Link>
          <Link href="/#about" className="hover:opacity-100 transition opacity-80">
            About
          </Link>
          <Link href="/#contact" className="hover:opacity-100 transition opacity-80">
            Contact
          </Link>
        </>
      );
    }

    return (
      <>
        <Link href="/#about" className="hover:opacity-100 transition opacity-80">
          About
        </Link>
        <Link href="/#work" className="hover:opacity-100 transition opacity-80">
          Work
        </Link>
        <Link href="/projects" className="hover:opacity-100 transition opacity-80">
          Projects
        </Link>
        <Link href="/#contact" className="hover:opacity-100 transition opacity-80">
          Contact
        </Link>
      </>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? isLight
            ? "bg-white/90 backdrop-blur-md border-black/10"
            : "bg-black/70 backdrop-blur-md border-white/10"
          : isLight
            ? "bg-transparent border-transparent"
            : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 h-16 flex items-center justify-between ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        <Link href="/" className="font-semibold tracking-tight text-lg hover:opacity-80 transition">
          Mohamed Tamer
        </Link>

        <nav
          className={`hidden sm:flex items-center gap-8 text-sm ${
            isLight ? "text-black/70" : "text-zinc-300"
          }`}
        >
          {renderNavItems()}
        </nav>
      </div>
    </header>
  );
}