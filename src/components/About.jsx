import { motion, useInView, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const builds = [
  "Flutter mobile apps",
  "Windows desktop software",
  "Web applications",
  "POS systems",
  "Inventory management",
  "Delivery management",
  "Self-ordering platforms",
  "Billing software",
  "ERP modules",
  "REST APIs",
  "Admin dashboards",
  "Business automation",
  "AI-assisted tools",
];

const stats = [
  { end: 2, suffix: "+", label: "Years experience" },
  { end: 5, suffix: "+", label: "Production systems" },
  { end: 3, suffix: "", label: "Platforms shipped" },
];

function Counter({ end, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 80, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(end);
  }, [inView, end, mv]);

  useMotionValueEvent(spring, "change", (v) => setDisplay(Math.round(v)));

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="atmosphere relative section-pad overflow-hidden">
      <div className="orb w-72 h-72 bg-tide-500/10 -top-10 right-10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="section-label">About</p>
            <h2 className="section-title">Software that earns its place in the workday.</h2>
            <div className="accent-line" />

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-ink-800/10 bg-white/70 backdrop-blur-sm p-3 sm:p-4 lift-panel"
                >
                  <p className="font-display text-2xl sm:text-3xl font-700 text-tide-700">
                    <Counter end={s.end} suffix={s.suffix} />
                  </p>
                  <p className="text-[11px] sm:text-xs text-ink-700/60 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5 text-ink-700/85 text-base sm:text-lg leading-relaxed"
          >
            <p>
              I&apos;m Vallatharasu — a Junior Full Stack Developer with over two years of experience
              building business applications across Flutter, Laravel, PHP, SQL, and modern web stacks.
            </p>
            <p>
              I care less about polishing screens for their own sake and more about solving operational
              problems: billing, inventory, delivery, payments, and the quiet automation that keeps a
              business moving. That work has spanned mobile, Windows desktop, web apps, REST APIs,
              and production support.
            </p>
            <p>
              At SofTurn Technologies I contribute to enterprise business software end to end —
              feature development, API design, database work, debugging production issues, deployment,
              and performance. I start with the real workflow, then write the code that fits it.
            </p>
            <p>
              Outside shipping apps, I research Artificial Intelligence and Large Language Models —
              looking for practical ways AI can improve business workflows and developer productivity.
            </p>

            <div className="pt-6">
              <h3 className="font-display text-xl font-700 text-ink-900 mb-4">What I build</h3>
              <ul className="flex flex-wrap gap-2">
                {builds.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.35 }}
                    className="skill-chip"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
