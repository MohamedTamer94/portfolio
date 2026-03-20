"use client";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="w-full bg-black text-white py-20" ref={ref}>
      <Container>
        <SectionTitle className={`text-white after:bg-blue-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          Get In Touch
        </SectionTitle>

        <div className={`mt-10 mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            I’m open to backend engineering roles, AI systems work, and
            technically challenging projects. If you’re building something
            interesting or want to collaborate — let’s talk.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:mohamedtamerahmed123@email.com"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-tamer-b62012203/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/MohamedTamer94"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}