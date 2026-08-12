import Marquee from "./Marquee";
import Reveal from "./Reveal";

const skillGroups = [
  { title: "Frontend", color: "#7C5CFF", glow: "rgba(124,92,255,0.25)", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML5", "CSS3", "JavaScript"] },
  { title: "Backend & DB", color: "#22D3EE", glow: "rgba(34,211,238,0.22)", items: ["Node.js", "Prisma", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "REST APIs"] },
  { title: "Cloud & DevOps", color: "#7C5CFF", glow: "rgba(124,92,255,0.25)", items: ["Docker", "Kubernetes", "AWS EC2", "NGINX", "GitHub Actions", "Linux", "OpenStack"] },
  { title: "Testing & SQA", color: "#22D3EE", glow: "rgba(34,211,238,0.22)", items: ["Manual Testing", "Selenium", "JIRA", "Unit Testing"] },
  { title: "AI & Python", color: "#7C5CFF", glow: "rgba(124,92,255,0.25)", items: ["Python", "LangChain", "Qdrant", "Embeddings", "Django"] },
  { title: "Cybersecurity", color: "#22D3EE", glow: "rgba(34,211,238,0.22)", items: ["Ethical Hacking", "IT Governance", "IT Risk Assessment", "E-Audit"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden mx-auto my-8 max-w-[1200px] rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-11 md:py-20">
      <Reveal>
        <div className="mb-3.5 font-mono text-[13px] tracking-[0.14em] text-accent-cyan">
          02 — SKILLS
        </div>
        <h2 className="font-heading text-[clamp(30px,4.4vw,46px)] font-bold leading-tight tracking-[-0.02em] text-text-primary">
          The toolkit
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-[18px] border border-white/12 bg-surface/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,255,0.5)]">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-50 blur-2xl"
                style={{ background: group.glow }}
              />
              <div className="relative mb-4 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 10px ${group.color}` }}
                />
                <span className="font-heading text-[17px] font-semibold text-text-primary">
                  {group.title}
                </span>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[13px] font-medium text-text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    <Marquee />
    </section>
  );
}