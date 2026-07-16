import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 ${
          scrolled
            ? "max-w-6xl mt-3 px-4 sm:px-5 h-14 rounded-2xl border border-white/10 bg-ink-900/70 backdrop-blur-2xl shadow-lg shadow-ink-950/30"
            : "max-w-7xl mt-0 px-5 sm:px-8 h-16 sm:h-[4.5rem] border border-transparent"
        }`}
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 shrink-0"
          aria-label="Vallatharasu Katturaja — home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-tide-500 to-tide-700 font-display text-sm font-700 text-white shadow-md shadow-tide-500/30">
            VK
          </span>
          <span className="hidden sm:block font-display text-base font-700 tracking-tight text-white">
            Vallatharasu<span className="text-tide-400">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-tide-500/90 shadow-md shadow-tide-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <a
          href="/Vallatharasu_Katturaja_Resume.pdf"
          className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold pl-4 pr-3 py-2 rounded-full bg-white text-ink-900 hover:bg-tide-400 hover:text-white transition-colors group shrink-0"
        >
          Resume
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-900/10 group-hover:bg-white/20 transition-colors">
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px] -rotate-45 group-hover:rotate-0 transition-transform" />
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl bg-ink-900/95 backdrop-blur-2xl border border-white/10 px-4 py-3 shadow-xl shadow-ink-950/40"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 font-medium transition-colors ${
                      active === link.id
                        ? "bg-tide-500/15 text-tide-300"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active === link.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-tide-400" />
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/Vallatharasu_Katturaja_Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold bg-white text-ink-900"
                >
                  Download Resume
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
