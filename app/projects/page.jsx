import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import Header from "@/components/ui/Header";
import Link from "next/link";
import Image from "next/image";

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

function ProjectCard({ p }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Preview */}
      {p.images && p.images.length > 0 && (
        <div className="relative w-full h-64 bg-black/5 border-b border-black/10">
          <Image
            src={p.images[0].url}
            alt={p.images[0].alt}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold tracking-tight text-black">{p.title}</h3>
              {p.hasCaseStudy && (
                <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  Case Study
                </span>
              )}
            </div>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              {p.description}
            </p>
          </div>
          <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/70 capitalize whitespace-nowrap">
            {p.category}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack?.slice(0, 8).map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {p.links?.demo ? (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Live Demo <ExternalLinkIcon className="h-4 w-4" />
            </a>
          ) : null}

          {p.links?.github ? (
            <a
              href={p.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black/[0.06]"
            >
              GitHub <GithubIcon className="h-4 w-4" />
            </a>
          ) : null}

          {p.hasCaseStudy ? (
            <Link
              href={`/projects/${p.slug}`}
              className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black/[0.06]"
            >
              Read Case Study
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  // Optional: order featured first
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <main className="min-h-screen bg-white py-16">
      <Header variant="light" />
      <Container>
        <SectionTitle className="text-black">Projects</SectionTitle>
        <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 text-base sm:text-lg leading-relaxed">
          Everything I've built — products, tools, and experiments. Selected projects include detailed case studies.
        </p>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6">
          {sorted.map((p) => (
            <div key={p.slug} className="break-inside-avoid mb-6">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}