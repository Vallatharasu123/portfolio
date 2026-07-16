import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["PHP", "JavaScript", "Dart", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    items: ["Flutter", "React", "Bootstrap", "Tailwind CSS", "jQuery", "Responsive design"],
  },
  {
    title: "Backend",
    items: ["Laravel", "Node.js", "Express.js", "REST APIs", "Authentication", "Business logic"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQLite", "Microsoft SQL Server", "Schema design", "Query tuning"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "FileZilla", "XAMPP", "VS Code", "Android Studio", "Visual Studio"],
  },
  {
    title: "Focus areas",
    items: [
      "Cross-platform apps",
      "Mobile & desktop",
      "Payment gateways",
      "Thermal printers",
      "Business software",
      "Performance",
      "AI research",
      "Prompt engineering",
      "Automation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="atmosphere section-pad relative overflow-hidden">
      <div className="orb w-72 h-72 bg-tide-500/10 top-10 right-10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">A toolbox built for shipping business systems.</h2>
          <div className="accent-line" />
          <p className="section-lead">
            Comfortable across the stack — from Flutter clients and Laravel APIs to databases,
            integrations, and the operational details that keep production software healthy.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 perspective-stage">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="lift-panel rounded-2xl border border-ink-800/10 bg-white/75 backdrop-blur-sm p-5 sm:p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="font-display text-lg font-700 text-ink-900 mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-copper-500 shadow-[0_0_0_4px_rgba(196,111,61,0.15)]" />
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="skill-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
