"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setExpanded(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -70, width: 20, height: 20, opacity: 0 }}
        animate={{
          y: 0,
          width: expanded ? "100%" : 20,
          height: expanded ? "auto" : 20,
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 0.4, ease: "easeOut" },
          y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          width: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
          height: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
        }}
        // transition={{
        //   opacity: { duration: 0.2, ease: "easeOut" },
        //   width: { duration: 0.4, ease: [0.22, 1, 0.20, 1], delay: 0.1 },
        // }}
        className="flex max-w-[1100px] items-center justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] px-6 py-3.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="whitespace-nowrap font-heading text-lg font-bold"
        >
          <span className="text-accent-violet">Muhammad Hashir</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 1.05 }}
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            
             <a key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: expanded ? 1 : 0 }}
         transition={{ duration: 0.4, delay: 1.15 }}
          className="hidden rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan px-5 py-2 text-sm font-semibold text-background md:inline-block"
        >
          Contact
        </motion.a>
      </motion.div>
    </nav>
  );
}