"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
        className="relative flex max-w-[1100px] flex-col rounded-2xl border border-white/[0.12] bg-white/[0.06] px-6 py-3.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
      >
        <div className="flex w-full items-center justify-between overflow-hidden">
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

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 1.05 }}
            className="flex items-center justify-center text-text-primary md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1 overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-1 border-t border-white/[0.08] pt-4">
                {navLinks.map((link) => (
                  
                   <a key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-white/5 hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                
                 <a href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan px-5 py-2.5 text-center text-sm font-semibold text-background"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}