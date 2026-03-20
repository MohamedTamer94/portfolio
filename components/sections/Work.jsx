"use client";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 14v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.29 9.43 7.86 10.96.57.11.78-.25.78-.55v-2.02c-3.2.71-3.88-1.58-3.88-1.58-.53-1.37-1.29-1.73-1.29-1.73-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.72-1.58-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.44-2.33 1.17-3.16-.12-.3-.51-1.5.11-3.12 0 0 .96-.31 3.14 1.2a10.6 10.6 0 0 1 5.72 0c2.18-1.51 3.14-1.2 3.14-1.2.62 1.62.23 2.82.11 3.12.73.83 1.17 1.88 1.17 3.16 0 4.49-2.69 5.48-5.25 5.77.41.36.78 1.08.78 2.17v3.22c0 .3.21.66.79.55A11.28 11.28 0 0 0 23.25 12C23.25 5.6 18.27.5 12 .5z" />
    </svg>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs sm:text-sm text-black/70">
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-black/10 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function ProjectActions({ links }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links?.demo ? (
        <a
          href={links.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        >
          Live Demo <ExternalLinkIcon className="h-4 w-4" />
        </a>
      ) : null}

      {links?.github ? (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black/[0.06] focus:outline-none focus:ring-2 focus:ring-black/10"
        >
          GitHub <GithubIcon className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}

function FeaturedProject({ p, isVisible }) {
  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div className="p-7 sm:p-9">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
              Featured
            </span>
            {p.hasCaseStudy && (
              <>
                <span className="text-xs text-black/50">•</span>
                <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Case Study
                </span>
              </>
            )}
          </div>

          <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-black">
            {p.title}
          </h3>

          <p className="mt-3 text-black/70 text-base sm:text-lg leading-relaxed">
            {p.description}
          </p>

          {p.highlights?.length ? (
            <ul className="mt-5 space-y-2 text-black/70">
              {p.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span className="text-sm sm:text-base leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack?.slice(0, 6).map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>

          <ProjectActions links={p.links} />
        </div>

        {/* Right "preview" panel */}
        <div className="relative border-t border-black/10 md:border-t-0 md:border-l border-black/10 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.14),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.10),transparent_55%)]">
          <div className="p-7 sm:p-9 h-full flex items-center justify-center">
            {p.images && p.images.length > 0 ? (
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-black/10">
                <Image
                  src={p.images[0].url}
                  alt={p.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-5 w-full">
                <p className="text-sm font-semibold text-black/80">Key Highlights</p>
                <div className="mt-3 space-y-3">
                  {p.highlights?.length ? (
                    p.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-black/70 leading-relaxed">{highlight}</span>
                      </div>
                    ))
                  ) : (
                    [
                      "System design & tradeoffs",
                      "Real-world reliability thinking",
                      "Performance + maintainability",
                    ].map((x) => (
                      <div key={x} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                        <span className="text-sm text-black/70">{x}</span>
                      </div>
                    ))
                  )}
                </div>
                {p.hasCaseStudy && (
                  <Link
                    href={`/projects/${p.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
                  >
                    View Case Study →
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Work() {
  const homeProjects = projects.filter((p) => p.showOnHome);
  const featured = homeProjects.filter((p) => p.featured);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="w-full bg-white py-16" id="work" ref={ref}>
      <Container className="flex flex-col justify-center">
        <SectionTitle className={isVisible ? "animate-fade-in-up" : "opacity-0"}>Work</SectionTitle>

        <p className={`mx-auto mt-4 max-w-3xl text-center text-black/70 text-base sm:text-lg leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          A selection of projects focused on reliability, scalable backend systems,
          and practical AI tooling.
        </p>

        <div className="mt-12 space-y-8">
          {featured.map((p) => (
            <FeaturedProject key={p.slug} p={p} isVisible={isVisible} />
          ))}
        </div>

       <Link
            href="/projects"
            className={`mx-auto mt-10 inline-flex items-center justify-center rounded-lg border border-black/10 bg-black/[0.03] px-5 py-3 text-sm font-medium text-black/80 transition hover:bg-black/[0.06] ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            >
            View all projects →
        </Link>
      </Container>
    </section>
  );
}