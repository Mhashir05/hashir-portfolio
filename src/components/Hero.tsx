import { Mail } from "lucide-react";

const floatingTags = [
  { label: "Next.js", pos: "top-[8%] left-[2%]", delay: "0s" },
  { label: "TypeScript", pos: "top-[20%] right-[4%]", delay: "1.2s" },
  { label: "AWS", pos: "bottom-[18%] left-[6%]", delay: "2.1s" },
  { label: "Docker", pos: "bottom-[8%] right-[8%]", delay: "0.6s" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.45),transparent_65%)] blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.32),transparent_65%)] blur-3xl animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent-cyan/25 bg-accent-cyan/[0.08] px-3.5 py-1.5 text-sm font-medium text-accent-cyan">
              <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_10px_#22D3EE] animate-blink" />
              Available for work
            </div>

            <h1 className="font-heading text-[clamp(40px,7vw,76px)] font-bold leading-[1.02] tracking-[-0.03em] text-text-primary">
              Muhammad
              <br />
              Hashir
            </h1>

            <div className="mt-4 mb-5 bg-gradient-to-br from-accent-violet to-accent-cyan bg-clip-text font-heading text-[clamp(18px,2.6vw,26px)] font-semibold leading-tight text-transparent">
              Cloud Native Full-Stack Developer
            </div>

            <p className="max-w-lg text-[clamp(15px,1.7vw,18px)] leading-relaxed text-text-muted">
              I build and ship end-to-end products — from Next.js frontends to Node
              &amp; Python backends, deployed to AWS with Docker and CI/CD.
              Security-first, quality-first, by habit.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              
               <a href="#projects"
                className="rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan px-6 py-3.5 font-semibold text-background shadow-[0_12px_30px_-10px_rgba(124,92,255,0.8)]"
              >
                View Projects
              </a>
              
               <a href="/resume.pdf"
                className="rounded-xl border border-white/15 bg-surface/50 px-6 py-3.5 font-semibold text-text-primary backdrop-blur-md"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-7 flex gap-3">
              
               <a href="https://github.com/Mhashir05"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-surface/50 font-heading text-[13px] font-semibold text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md"
              >
                GH
              </a>
              
               <a href="https://linkedin.com/in/muhammad-hashir-9b7a162a5"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-surface/50 font-heading text-[13px] font-semibold text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md"
              >
                in
              </a>
              
               <a href="mailto:hashirn77@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-surface/50 text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md"
              >
                <Mail size={19} strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[340px] items-center justify-center md:min-h-[460px]">
            <div className="absolute aspect-square w-[min(340px,80%)] rounded-full bg-[conic-gradient(from_0deg,#7C5CFF,#22D3EE,#7C5CFF)] opacity-85 blur-[6px] animate-spin-slow" />
            <div className="absolute aspect-square w-[min(300px,72%)] rounded-full bg-[radial-gradient(circle_at_35%_30%,#1a1a24,#0A0A0F_72%)] shadow-[inset_0_0_60px_rgba(124,92,255,0.35)]" />
            <div className="relative z-10 text-center">
              <div className="font-heading text-[clamp(30px,5vw,46px)] font-bold tracking-tight text-text-primary">
                &lt;/&gt;
              </div>
              <div className="mt-1.5 font-mono text-xs text-text-muted">
                build · ship · scale
              </div>
            </div>

            {floatingTags.map((tag) => (
              <span
                key={tag.label}
                style={{ animationDelay: tag.delay }}
                className={`absolute ${tag.pos} rounded-full border border-accent-violet/40 bg-surface/55 px-3.5 py-2 text-sm font-medium text-text-primary shadow-[0_8px_24px_-10px_rgba(124,92,255,0.7)] backdrop-blur-md animate-floaty`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}