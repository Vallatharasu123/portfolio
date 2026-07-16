import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="bg-mist-100 section-pad relative overflow-hidden">
      <div className="orb w-80 h-80 bg-tide-500/10 -right-20 top-10" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lift-panel rounded-2xl border border-ink-800/10 bg-white/80 backdrop-blur-sm p-7 sm:p-9"
        >
          <p className="section-label">Philosophy</p>
          <h2 className="section-title">Make work easier — not more complicated.</h2>
          <div className="accent-line" />
          <div className="space-y-4 text-ink-700/85 text-base sm:text-lg leading-relaxed">
            <p>
              Every project starts with the real problem, not the first commit. Clean architecture,
              maintainable code, and scalable structure matter more than stacking features that
              nobody needed.
            </p>
            <p>
              Tools change constantly. The durable skills are problem-solving, adaptation, and the
              discipline to keep learning.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lift-panel rounded-2xl border border-ink-800/10 bg-gradient-to-br from-ink-900 to-ink-800 text-white p-7 sm:p-9 shadow-[0_24px_60px_-30px_rgba(15,28,31,0.55)]"
        >
          <p className="section-label text-tide-400">Open to work</p>
          <h2 className="font-display text-2xl sm:text-3xl font-700 mt-3 mb-5 leading-tight">
            Developer roles where I can build and ship real software.
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            I&apos;m looking for hands-on developer roles — Flutter, full stack, and Laravel
            work where I get to write code, solve real problems, and ship features that people
            actually use. I do my best work on teams that value clean code, learning, and
            well-built software.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Flutter Developer",
              "Full Stack Developer",
              "Laravel Developer",
              "Backend Developer",
              "Mobile App Developer",
              "AI-assisted apps",
            ].map((item) => (
              <li
                key={item}
                className="text-sm px-3 py-1.5 rounded-md border border-white/15 text-white/75 bg-white/5"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
