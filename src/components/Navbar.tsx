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
    const t = setTimeout(() => setExpanded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.div
        initial={{ width: "auto", opacity: 0 }}
        animate={{ width: expanded ? "100%" : "auto", opacity: 1 }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          width: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
        }}
        className="flex max-w-[1100px] items-center justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-background/60 px-6 py-3.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      >
        
         <a href="#home"
          className="whitespace-nowrap font-heading text-lg font-bold"
        >
          <span className="text-accent-violet">Muhammad Hashir</span>
        </a>

        <motion.div
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
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
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="hidden rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan px-5 py-2 text-sm font-semibold text-background md:inline-block"
        >
          Contact
        </motion.a>
      </motion.div>
    </nav>
  );
}