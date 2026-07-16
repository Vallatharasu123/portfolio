import { motion } from "framer-motion";
import TiltSurface from "./TiltSurface";

const projects = [
  {
    name: "POS Management System",
    blurb:
      "End-to-end point of sale covering billing, inventory, customers, thermal printing, payments, and sales reporting.",
    tags: ["Flutter", "Laravel", "Payments", "Hardware"],
    accent: "from-tide-500/15 to-transparent",
  },
  {
    name: "Inventory Management System",
    blurb:
      "Product, purchase, stock transfer, supplier, and warehouse flows with sales analytics for clearer stock decisions.",
    tags: ["SQL", "Business logic", "Analytics"],
    accent: "from-copper-500/15 to-transparent",
  },
  {
    name: "Delivery Management System",
    blurb:
      "Order assignment, live status tracking, and workflow automation so teams move deliveries with less friction.",
    tags: ["Workflow", "Tracking", "Automation"],
    accent: "from-tide-500/15 to-transparent",
  },
  {
    name: "Self-Ordering Platform",
    blurb:
      "QR-based ordering that lets customers browse and place orders without waiting on staff.",
    tags: ["QR", "UX", "Web"],
    accent: "from-copper-500/12 to-transparent",
  },
  {
    name: "Business Automation Tools",
    blurb:
      "Internal utilities that cut repetitive work and tighten operational efficiency across daily processes.",
    tags: ["Automation", "Internal tools"],
    accent: "from-tide-500/12 to-transparent",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-mist-100 section-pad relative overflow-hidden">
      <div className="orb w-80 h-80 bg-tide-500/10 -top-20 right-0" />
      <div className="orb w-64 h-64 bg-copper-500/10 bottom-10 left-0" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Featured work</p>
          <h2 className="section-title">Projects shaped by real operations.</h2>
          <div className="accent-line" />
          <p className="section-lead">
            Systems built for billing floors, warehouses, delivery teams, and customers — not demos
            that only look good in a screenshot.
          </p>
        </motion.div>

        <div className="mt-10 perspective-stage space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <TiltSurface className="rounded-2xl group">
                <article
                  className={`relative overflow-hidden rounded-2xl border border-ink-800/10 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-[0_18px_40px_-28px_rgba(15,28,31,0.35)] bg-gradient-to-br ${project.accent}`}
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="grid sm:grid-cols-12 gap-4 sm:gap-8 items-start">
                    <div className="sm:col-span-1 font-display text-tide-600 text-sm font-semibold pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="sm:col-span-4">
                      <h3 className="font-display text-2xl sm:text-3xl font-700 text-ink-900">
                        {project.name}
                      </h3>
                    </div>
                    <div className="sm:col-span-7">
                      <p className="text-ink-700/80 leading-relaxed">{project.blurb}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li key={tag} className="skill-chip text-xs">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </TiltSurface>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
