import Reveal from "./Reveal";

const timeline = [
  { kind: "EXPERIENCE", role: "Technology Audit Intern", org: "Bank Alfalah", period: "Aug–Oct 2025", dot: "#7C5CFF", tagBg: "rgba(124,92,255,0.14)", tagColor: "#7C5CFF", cert: "/certificates/bank-alfalah-internship.pdf" },
  { kind: "EXPERIENCE", role: "Web Development Intern", org: "Code Alpha", period: "Aug–Nov 2024", dot: "#7C5CFF", tagBg: "rgba(124,92,255,0.14)", tagColor: "#7C5CFF", cert: "/certificates/codealpha-internship.pdf" },
  { kind: "EDUCATION", role: "BS Software Engineering", org: "Sir Syed University of Engineering & Technology (SSUET)", period: "2022–2026", dot: "#22D3EE", tagBg: "rgba(34,211,238,0.14)", tagColor: "#22D3EE" },
  { kind: "EDUCATION", role: "Pre-Engineering — Grade A", org: "Govt Degree College SRE Majeed", period: "2020–2022", dot: "#22D3EE", tagBg: "rgba(34,211,238,0.14)", tagColor: "#22D3EE" },
];
const certs = [
  { label: "Cloud Computing — NED UET · PITP", file: "/certificates/ned-cloud-computing.pdf" },
  { label: "Web Development — Saylani · SMIT", file: "" },
  { label: "Office Automation — Aptech", file: "" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto my-8 max-w-[1000px] rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-11 md:py-20"
    >
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="mb-3.5 font-mono text-[13px] tracking-[0.14em] text-accent-cyan">
              04 — EXPERIENCE &amp; EDUCATION
            </div>
            <h2 className="font-heading text-[clamp(30px,4.4vw,46px)] font-bold leading-tight tracking-[-0.02em] text-text-primary">
              The journey
            </h2>
          </div>

          
           <a href="/resume.pdf"
            className="rounded-[11px] border border-white/14 bg-surface/50 px-5 py-3 text-sm font-semibold text-text-primary backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-violet/40"
          >
            ↓ Download Resume
          </a>
        </div>
      </Reveal>

      <div className="relative pl-9">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-violet to-accent-cyan" />
        <div className="flex flex-col gap-5">
          {timeline.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1}>
              <div className="relative">
                <span
                  className="absolute -left-[35px] top-2 h-4 w-4 rounded-full border-2 border-background"
                  style={{ background: item.dot, boxShadow: `0 0 10px ${item.dot}` }}
                />
                <div className="rounded-[16px] border border-white/12 bg-surface/50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-[0_16px_40px_-16px_rgba(124,92,255,0.5)]">
                  <span
                    className="mb-2.5 inline-flex rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide"
                    style={{ background: item.tagBg, color: item.tagColor }}
                  >
                    {item.kind}
                  </span>
                  <h3 className="font-heading text-[18px] font-semibold text-text-primary">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-sm text-text-muted">
                    {item.org} · {item.period}
                  </div>
                  {item.cert && (
                    
                    <a  href={item.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-cyan transition-colors hover:text-text-primary"
                    >
                      View Certificate ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12">
          <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-accent-violet">
            CERTIFICATIONS
          </div>
          <div className="flex flex-wrap gap-3">
            {certs.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-3 rounded-xl border border-white/12 bg-surface/50 px-4 py-2.5 text-[13px] font-medium text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md"
              >
                <span>{cert.label}</span>
                {cert.file && (
                  
                   <a href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent-cyan transition-colors hover:text-text-primary"
                  >
                    View ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}