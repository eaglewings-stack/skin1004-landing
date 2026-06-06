"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "./icons";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 md:hidden"
          style={{ paddingBottom: "var(--safe-bottom)" }}
        >
          <div className="border-t border-white/70 bg-white/80 px-4 py-3 backdrop-blur-xl">
            <a
              href="#buy"
              className="group flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent-yellow px-6 py-3 text-sm font-bold text-navy-800 shadow-glow-yellow transition-all duration-500 ease-spring active:scale-[0.98]"
            >
              Shop Now
              <span className="btn-icon-wrap">
                <IconArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
