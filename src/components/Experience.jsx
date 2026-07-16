import { motion } from "framer-motion";

const roles = [
  {
    company: "SofTurn Technologies",
    title: "Junior Full Stack Developer",
    period: "2024 – Present",
    summary:
      "Building and maintaining business software for Android, Windows, and the web — from Flutter clients to Laravel APIs and production support.",
    highlights: [
      "Flutter application development",
      "Laravel backend APIs",
      "SQL database design",
      "POS & business modules",
      "Payment gateway integration",
      "Thermal printer workflows",
      "Performance & deployment support",
      "Client collaboration",
    ],
  },
  {
    company: "Kenstack Technologies",
    title: "Full Stack Developer",
    period: "Alongside M.Tech",
    summary:
      "Delivered PHP projects remotely while mentoring students. Owned hosting, deployment, domains, and day-to-day server management.",
    highlights: [
      "Multi-project PHP delivery",
      "Student mentoring",
      "Hosting & server ops",
      "Domain & deployment management",
    ],
  },
  {
    company: "Propel Soft",
    title: "Full Stack Developer Intern",
    period: "Career start",
    summary:
      "First professional role focused on frontend development, UI design, PHP applications, and database architecture in a live business setting.",
    highlights: [
      "Frontend & UI development",
      "PHP applications",
      "Database architecture",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-ink-900 text-white section-pad overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(61,184,176,0.25), transparent 60%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(196,111,61,0.15), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label text-tide-400">Experience</p>
          <h2 className="section-title text-white">Where the craft got real.</h2>
          <p className="section-lead text-white/60">
            From internship foundations to production business systems — always learning by shipping.
          </p>
        </motion.div>

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="timeline-spine" aria-hidden="true" />

          <div className="space-y-8">
            {roles.map((role, index) => (
              <motion.article
                key={role.company}
                initial={{ opacity: 0, x: 28, rotateY: -6 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid lg:grid-cols-12 gap-5 lg:gap-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute -left-8 sm:-left-10 top-2 flex items-start">
                  <span className="timeline-node" />
                </div>

                <div className="lg:col-span-4">
                  <p className="text-tide-400 text-sm font-semibold tracking-wide">{role.period}</p>
                  <h3 className="font-display text-2xl font-700 mt-2">{role.company}</h3>
                  <p className="text-white/55 mt-1">{role.title}</p>
                </div>

                <div className="lg:col-span-8 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] hover:border-tide-400/30 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-white/75 leading-relaxed text-base sm:text-lg">{role.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {role.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm px-3 py-1.5 rounded-md border border-white/15 text-white/70 bg-white/5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
