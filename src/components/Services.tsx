import { Layers, Cloud, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { icon: Layers, title: "Full-Stack Web Development", desc: "End-to-end apps with Next.js, TypeScript and Node — from schema to pixel.", color: "text-accent-violet", chip: "bg-accent-violet/[0.12]" },
  { icon: Cloud, title: "Cloud & DevOps Deployment", desc: "Dockerized deployments to AWS with NGINX and automated CI/CD pipelines.", color: "text-accent-cyan", chip: "bg-accent-cyan/[0.12]" },
  { icon: ShieldCheck, title: "Software Quality Assurance & Testing", desc: "Manual + automated testing to ship with confidence and fewer regressions.", color: "text-accent-violet", chip: "bg-accent-violet/[0.12]" },
  { icon: Sparkles, title: "AI Integration & Automation", desc: "LLM features, semantic search and vector databases wired into real products.", color: "text-accent-cyan", chip: "bg-accent-cyan/[0.12]" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto my-8 max-w-[1200px] rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-11 md:py-20"
    >
      <Reveal>
        <div className="mb-3.5 font-mono text-[13px] tracking-[0.14em] text-accent-violet">
          05 — SERVICES
        </div>
        <h2 className="mb-10 font-heading text-[clamp(30px,4.4vw,46px)] font-bold leading-tight tracking-[-0.02em] text-text-primary">
          What I can do for you
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map(({ icon: Icon, title, desc, color, chip }, i) => (
          <Reveal key={title} delay={(i % 2) * 0.1}>
            <div className="group h-full rounded-[18px] border border-white/12 bg-surface/50 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,255,0.5)]">
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${chip} ${color}`}>
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 font-heading text-[19px] font-semibold text-text-primary">
                {title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-text-muted">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}