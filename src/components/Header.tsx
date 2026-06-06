"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "./icons";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
];

const spring = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 pt-safe">
        <div className="section-padding">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={spring}
            className={`mx-auto flex max-w-3xl items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ease-spring sm:px-5 ${
              scrolled || menuOpen
                ? "glass-nav shadow-glass-lg"
                : "border border-white/50 bg-white/40 backdrop-blur-md"
            }`}
            style={{ marginTop: "max(0.75rem, var(--safe-top))" }}
          >
            <a href="#hero" className="flex items-center gap-2 pl-1">
              <span className="font-display text-lg font-extrabold tracking-tight text-navy-700 sm:text-xl">
                SKIN<span className="text-aqua-500">1004</span>
              </span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-xs font-semibold text-navy-500 transition-all duration-500 ease-spring hover:bg-aqua-50 hover:text-navy-700"
                >
                  {item.label}
                </a>
              ))}
              <a href="#buy" className="btn-primary !min-h-[40px] !px-5 !py-2 !text-xs group">
                Shop Now
                <span className="btn-icon-wrap">
                  <IconArrowRight />
                </span>
              </a>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ease-spring hover:bg-aqua-50 active:scale-[0.95] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-5 w-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-white/90 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-1 flex-col justify-center px-8 pt-24">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: i * 0.08 }}
                  className="border-b border-aqua-100 py-5 font-display text-3xl font-bold text-navy-700"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#buy"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.32 }}
                className="btn-primary mt-8 w-full group"
              >
                Shop Now
                <span className="btn-icon-wrap">
                  <IconArrowRight />
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
