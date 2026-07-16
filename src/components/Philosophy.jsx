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
          <p className="section-label text-tide-400">Looking for</p>
          <h2 className="font-display text-2xl sm:text-3xl font-700 mt-3 mb-5 leading-tight">
            Roles where craft meets business impact.
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Open to opportunities in Flutter development, full stack / Laravel work, business and
            enterprise software, AI-powered products, and product engineering. I do my best work
            with teams that value learning, clean code, and software that creates measurable
            outcomes.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Flutter",
              "Full Stack",
              "Laravel",
              "Business software",
              "Enterprise apps",
              "AI solutions",
              "Product engineering",
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
