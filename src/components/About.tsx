import { Cloud, Layers, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  { icon: Layers, title: "Full-Stack", sub: "Next.js / TypeScript / Node", color: "text-accent-violet", chip: "bg-accent-violet/[0.12]" },
  { icon: Cloud, title: "Cloud & DevOps", sub: "AWS, Docker, CI/CD", color: "text-accent-cyan", chip: "bg-accent-cyan/[0.12]" },
  { icon: ShieldCheck, title: "Security & Quality", sub: "SQA + IT Audit", color: "text-accent-violet", chip: "bg-accent-violet/[0.12]" },
  { icon: Sparkles, title: "AI Integration", sub: "LangChain, Vector DB", color: "text-accent-cyan", chip: "bg-accent-cyan/[0.12]" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto my-8 max-w-[1200px] rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-11 md:py-20"
    >
      <Reveal>
        <div className="mb-3.5 font-mono text-[13px] tracking-[0.14em] text-accent-violet">
          01 — ABOUT
        </div>
        <h2 className="max-w-[14ch] font-heading text-[clamp(30px,4.4vw,46px)] font-bold leading-tight tracking-[-0.02em] text-text-primary">
          A developer who ships the whole stack.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-14">
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-5 rounded-[18px] border border-white/12 bg-surface/60 p-7 text-base leading-relaxed text-[#C4C4CE] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md">
            <p>
              I&apos;m a Software Engineering graduate based in Karachi, building and
              deploying end-to-end applications — Next.js / TypeScript on the front,
              Node.js and Python on the back — shipped to AWS on Linux with Docker
              and CI/CD pipelines.
            </p>
            <p>
              My background in Software Quality Assurance and IT audit gives me a
              security-first, quality-first edge: I care about what happens after the
              code merges. I&apos;m open to junior Full-Stack, Cloud, or DevOps roles.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, sub, color, chip }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/12 bg-surface/50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent-violet/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,255,0.5)]">
                <div className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-[10px] ${chip} ${color}`}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div className="mb-1.5 font-heading text-base font-semibold text-text-primary">
                  {title}
                </div>
                <div className="text-[13px] leading-snug text-text-muted">
                  {sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}