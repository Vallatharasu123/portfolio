import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MagneticButton from "./MagneticButton";

const socials = [
  {
    href: "https://www.linkedin.com/in/vallatharasu-katturaja-20753322a/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Vallatharasu123",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/vallatharasu_katturaja/",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://wa.me/7094376344?text=Hi%20Vallatharasu",
    icon: faWhatsapp,
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(42,157,150,0.22), transparent 65%)",
        }}
      />
      <div className="orb w-80 h-80 bg-copper-500/10 -left-20 bottom-0" />

      <div className="relative mx-auto max-w-7xl section-pad pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="section-label text-tide-400">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 leading-[1.1] tracking-tight text-balance">
            Let&apos;s build something useful together.
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-xl leading-relaxed">
            Whether it&apos;s a Flutter product, a Laravel backend, or an AI-assisted business tool —
            I&apos;d like to hear what you&apos;re working on.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              href="tel:+917094376344"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-tide-500 hover:bg-tide-400 transition-colors font-semibold shadow-lg shadow-tide-500/25"
            >
              <FontAwesomeIcon icon={faPhone} />
              +91 70943 76344
            </MagneticButton>
            <MagneticButton
              href="/Vallatharasu_Katturaja_Resume.pdf"
              download="Vallatharasu_Katturaja_Resume.pdf"
              aria-label="Download Vallatharasu Katturaja resume PDF"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-white/20 hover:bg-white/10 transition-colors font-semibold"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Download resume
            </MagneticButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {socials.map((item) => (
              <li key={item.label}>
                <MagneticButton
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-white/15 text-white/80 hover:text-tide-400 hover:border-tide-400/50 transition-colors"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </MagneticButton>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-white/40">
          <p>© {new Date().getFullYear()} Vallatharasu Katturaja</p>
          <p>Junior Full Stack Developer · Flutter · Laravel · AI Research</p>
        </div>
      </div>
    </footer>
  );
}
