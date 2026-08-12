"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);
  };

  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-5 py-20 sm:px-10 md:py-28">
      <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-gradient-to-br from-accent-violet/10 to-accent-cyan/[0.05] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl sm:p-12 md:p-14">
        <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.25),transparent_65%)] blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="mb-3.5 font-mono text-[13px] tracking-[0.14em] text-accent-cyan">
              06 — CONTACT
            </div>
            <h2 className="mb-4 font-heading text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-text-primary">
              Let&apos;s build something together.
            </h2>
            <p className="mb-8 max-w-[42ch] text-base leading-relaxed text-text-muted">
              Got a role, a project, or an idea? I&apos;m open to Full-Stack,
              Cloud, and DevOps opportunities. Always happy to talk shop.
            </p>

            
             <a href="mailto:hashirn77@gmail.com"
              className="mb-7 inline-flex items-center gap-3 font-heading text-lg font-semibold text-text-primary transition-colors hover:text-accent-cyan"
            >
              <Mail size={20} strokeWidth={1.7} className="text-accent-cyan" />
              hashirn77@gmail.com
            </a>

            <div className="flex gap-3">
              
               <a href="https://github.com/Mhashir05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/14 bg-white/[0.06] font-heading text-[13px] font-semibold text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-violet/40"
              >
                GH
              </a>
              
               <a href="https://linkedin.com/in/muhammad-hashir-9b7a162a5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/14 bg-white/[0.06] font-heading text-[13px] font-semibold text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-violet/40"
              >
                in
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-[18px] border border-white/12 bg-surface/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md sm:p-8"
            >
              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-muted">
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-[11px] border border-white/14 bg-surface/50 px-4 py-3 text-[15px] text-text-primary outline-none backdrop-blur-md transition-colors focus:border-accent-violet/60"
                />
              </label>

              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-muted">
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="rounded-[11px] border border-white/14 bg-surface/50 px-4 py-3 text-[15px] text-text-primary outline-none backdrop-blur-md transition-colors focus:border-accent-violet/60"
                />
              </label>

              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-muted">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about it…"
                  required
                  className="resize-none rounded-[11px] border border-white/14 bg-surface/50 px-4 py-3 text-[15px] text-text-primary outline-none backdrop-blur-md transition-colors focus:border-accent-violet/60"
                />
              </label>

              <button
                type="submit"
                className="mt-2 rounded-[11px] bg-gradient-to-br from-accent-violet to-accent-cyan px-6 py-3.5 font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(124,92,255,0.6)]"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}