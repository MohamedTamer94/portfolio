"use client";
import { projects } from "@/data/projects";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { use, useState } from 'react'
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

export default function CaseStudyPage({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!project || !project.hasCaseStudy) {
    return (
      <main className="min-h-screen bg-white">
        <Header variant="light" />
        <Container className="pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">Case Study Not Found</h1>
            <p className="mt-4 text-black/70">This project doesn't have a case study available.</p>
            <Link
              href="/projects"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Back to Projects
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const cs = project.case_study;

  return (
    <main className="min-h-screen bg-white">
      <Header variant="light" />
      <Container className="pt-32 pb-16">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition mb-8"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Case Study
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-black">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-black/70 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Stack */}
        <div className="mb-12 pb-12 border-b border-black/10">
          <h3 className="text-sm font-semibold text-black/60 mb-3">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack?.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mb-12 pb-12 border-b border-black/10">
          <h3 className="text-sm font-semibold text-black/60 mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-3">
            {project.links?.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Live Demo <ExternalLinkIcon className="h-4 w-4" />
              </a>
            ) : null}
            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/[0.06] transition"
              >
                GitHub <GithubIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12 pb-12 border-b border-black/10">
            <h3 className="text-sm font-semibold text-black/60 mb-6">Screenshots</h3>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="w-full bg-black/5 rounded-2xl overflow-hidden border border-black/10 flex justify-center">
                <Image
                  src={project.images[selectedImageIndex].url}
                  alt={project.images[selectedImageIndex].alt}
                  width={1200}
                  height={800}
                  className="h-auto w-auto max-h-[500px] object-contain"
                  priority={selectedImageIndex === 0}
                />
              </div>
              {/* Thumbnail Navigation */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`flex-shrink-0 relative h-20 w-32 rounded-lg overflow-hidden border-2 transition ${idx === selectedImageIndex
                          ? "border-blue-600"
                          : "border-black/10 hover:border-black/20"
                        }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Case Study Content */}
        <div className="grid gap-12">
          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>
            <p className="text-base text-black/70 leading-relaxed max-w-3xl">
              {cs.challenge}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>
            <p className="text-base text-black/70 leading-relaxed max-w-3xl">
              {cs.solution}
            </p>
          </section>

          {/* Metrics */}
          {cs.metrics && cs.metrics.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Results & Metrics</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {cs.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-black/10 bg-white/50 p-6"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                      {metric.value}
                    </div>
                    <h3 className="font-semibold text-black text-sm mb-2">{metric.label}</h3>
                    <p className="text-sm text-black/60">{metric.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Architecture */}
          {cs.architecture && (
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Architecture</h2>
              <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <p className="text-base text-black/70 leading-relaxed">
                  {cs.architecture}
                </p>
              </div>
            </section>
          )}

          {/* Impact */}
          {cs.impact && (
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Business Impact</h2>
              <p className="text-base text-black/70 leading-relaxed max-w-3xl">
                {cs.impact}
              </p>
            </section>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-12 border-t border-black/10 text-center">
          <p className="text-black/70 mb-6">Interested in similar work?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </main>
  );
}
