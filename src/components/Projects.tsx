"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const filters = ["All", "Web", "Cloud/DevOps", "AI"];
const luxTech = ["Next.js 14", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "Next-Auth", "Docker", "AWS EC2", "NGINX", "GitHub Actions"];
const allProjects = [
  {
    title: "NIT-MMF Landing Page",
    cats: ["Web"],
    catLabel: "WEB",
    tagBg: "rgba(124,92,255,0.14)",
    tagColor: "#7C5CFF",
    desc: "Marketing landing page for National Investment Trust's Money Market Fund — built for speed, clarity and conversion.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    live: "",
    github: "https://github.com/Mhashir05",
  },
  {
    title: "EventBridge AI",
    cats: ["AI"],
    catLabel: "AI",
    tagBg: "rgba(34,211,238,0.14)",
    tagColor: "#22D3EE",
    desc: "Final year project: an AI-powered event discovery platform with semantic search and personalized recommendations.",
    tech: ["Laravel", "PHP", "Python", "Django", "MySQL", "Qdrant", "LangChain"],
    live: "https://eventbridgeai.com",
    github: "https://github.com/Mhashir05",
  },
  {
    title: "AI Vehicle Classification System",
    cats: ["AI"],
    catLabel: "AI",
    tagBg: "rgba(34,211,238,0.14)",
    tagColor: "#22D3EE",
    desc: "A machine-learning model that classifies vehicle types from images, with a clean training and inference pipeline.",
    tech: ["Python", "Machine Learning"],
    live: "",
    github: "https://github.com/Mhashir05",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filterKey = active === "Cloud/DevOps" ? "Cloud" : active;
  const luxCats = ["Web", "Cloud"];
  const showFeatured = active === "All" || luxCats.includes(filterKey);
  const visibleProjects =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.cats.includes(filterKey));

  return (
    <section
      id="projects"
      className="mx-auto my-8 max-w-[1200px] rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-11 md:py-20"
    >
      <Reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="mb-3.5 font-mono text-[13px] tracking-[0.14em] text-accent-violet">
              03 — PROJECTS
            </div>
            <h2 className="font-heading text-[clamp(30px,4.4vw,46px)] font-bold leading-tight tracking-[-0.02em] text-text-primary">
              Selected work
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 rounded-full border border-white/12 bg-surface/50 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  active === filter
                    ? "bg-gradient-to-br from-accent-violet to-accent-cyan text-background"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {showFeatured && (
        <Reveal delay={0.1}>
          <div className="rounded-[22px] border border-accent-violet/30 bg-gradient-to-br from-accent-violet/10 to-accent-cyan/[0.06] p-[1px] shadow-[0_30px_60px_-30px_rgba(124,92,255,0.5)]">
            <div className="grid gap-6 rounded-[21px] bg-surface/50 p-6 backdrop-blur-md md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:p-8">
              <div className="flex flex-col items-start">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent-violet/35 bg-accent-violet/15 px-3 py-1.5 text-xs font-semibold text-accent-violet">
                  ★ Featured
                </div>
                <h3 className="mb-3 font-heading text-[clamp(22px,3vw,30px)] font-bold leading-tight tracking-tight text-text-primary">
                  Lux Resin — E-Commerce Catalogue Platform
                </h3>
                <p className="mb-5 max-w-[52ch] text-[15px] leading-relaxed text-text-muted">
                  A full end-to-end e-commerce catalogue — authentication, product
                  management, and a polished storefront — containerized with Docker
                  and shipped to AWS EC2 behind NGINX with automated GitHub Actions
                  CI/CD.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {luxTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[13px] font-medium text-text-muted backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a  href="https://lux-resin-impression.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[10px] bg-gradient-to-br from-accent-violet to-accent-cyan px-5 py-2.5 text-sm font-semibold text-background"
                >
                  Live ↗
                </a>
              </div>

              <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(124,92,255,0.15),transparent_70%)]">
                <span className="font-heading text-2xl font-bold text-text-primary/80">
                  Lux Resin
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.1}>
            <div className="group flex h-full flex-col rounded-[18px] border border-white/12 bg-surface/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,255,0.5)]">
              <span
                className="mb-4 inline-flex w-fit rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide"
                style={{ background: project.tagBg, color: project.tagColor }}
              >
                {project.catLabel}
              </span>
              <h3 className="mb-2.5 font-heading text-[19px] font-semibold leading-snug text-text-primary">
                {project.title}
              </h3>
              <p className="mb-5 flex-1 text-[14px] leading-relaxed text-text-muted">
                {project.desc}
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[12px] font-medium text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                
                 <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-text-primary transition-colors hover:text-accent-violet"
                >
                  GitHub ↗
                </a>
                {project.live && (
                  
                  <a  href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-accent-cyan transition-colors hover:text-text-primary"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}