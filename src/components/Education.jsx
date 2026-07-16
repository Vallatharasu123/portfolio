import { motion } from "framer-motion";

const education = [
  {
    title: "Master of Technology",
    detail: "Computer Science and Engineering",
    place: "Bharathidasan University",
  },
];

const certifications = [
  {
    title: "Fundamentals of Web Development",
    place: "Pirple Platform",
  },
];

const achievements = [
  "First Place — Web Design Competition",
  "NCC B Certificate",
  "NCC C Certificate",
];

export default function Education() {
  return (
    <section id="education" className="atmosphere section-pad overflow-hidden">
      <div className="orb w-64 h-64 bg-copper-500/10 top-20 left-10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">Education, credentials & milestones.</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-3 gap-5 lg:gap-6 perspective-stage">
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lift-panel rounded-2xl border border-ink-800/10 bg-white/75 backdrop-blur-sm p-6"
          >
            <h3 className="font-body text-xs tracking-[0.18em] uppercase text-copper-600 font-semibold mb-5">
              Education
            </h3>
            {education.map((item) => (
              <div key={item.title} className="border-l-2 border-tide-500 pl-5">
                <p className="font-display text-xl font-700 text-ink-900">{item.title}</p>
                <p className="text-ink-700 mt-1">{item.detail}</p>
                <p className="text-ink-700/60 mt-1 text-sm">{item.place}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lift-panel rounded-2xl border border-ink-800/10 bg-white/75 backdrop-blur-sm p-6"
          >
            <h3 className="font-body text-xs tracking-[0.18em] uppercase text-copper-600 font-semibold mb-5">
              Certifications
            </h3>
            {certifications.map((item) => (
              <div key={item.title} className="border-l-2 border-tide-500 pl-5">
                <p className="font-display text-xl font-700 text-ink-900">{item.title}</p>
                <p className="text-ink-700/60 mt-1 text-sm">{item.place}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="lift-panel rounded-2xl border border-ink-800/10 bg-white/75 backdrop-blur-sm p-6"
          >
            <h3 className="font-body text-xs tracking-[0.18em] uppercase text-copper-600 font-semibold mb-5">
              Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-ink-800">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tide-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
