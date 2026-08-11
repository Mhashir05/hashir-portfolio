const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Docker",
  "Kubernetes", "AWS", "PostgreSQL", "MongoDB", "Tailwind", "Linux",
  "GitHub Actions", "LangChain", "Prisma", "NGINX", "Selenium", "Django",
];

export default function Marquee() {
  return (
    <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-4">
        {[...techStack, ...techStack].map((tech, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-medium text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}