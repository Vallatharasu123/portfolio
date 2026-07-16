import { motion } from "framer-motion";

const topics = [
  { title: "Large Language Models", blurb: "Applied exploration of model capabilities for business tasks." },
  { title: "Prompt engineering", blurb: "Structured prompting for reliable, repeatable outputs." },
  { title: "Local AI models", blurb: "Privacy-aware experimentation beyond cloud-only setups." },
  { title: "Workflow automation", blurb: "Removing repetitive steps from everyday operations." },
  { title: "Business assistants", blurb: "Helpers that sit inside real software, not side demos." },
];

export default function AIResearch() {
  return (
    <section id="ai" className="relative overflow-hidden section-pad bg-ink-800 text-white">
      <div className="orb w-[28rem] h-[28rem] bg-tide-500/20 -right-24 top-1/2 -translate-y-1/2" />
      <div className="orb w-64 h-64 bg-copper-500/15 left-10 bottom-10" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <p className="section-label text-tide-400">AI research</p>
          <h2 className="section-title text-white">AI as a tool for clearer work — not a buzzword.</h2>
          <div className="accent-line" />
          <div className="space-y-5 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>
              Artificial Intelligence has become one of my strongest areas of curiosity. I explore
              Large Language Models, prompt engineering, local models, automation, and intelligent
              assistants that can sit inside real business software.
            </p>
            <p>
              Thoughtful implementation beats flashy demos. When AI earns its place in a workflow,
              it becomes another reliable tool in the stack.
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-7 perspective-stage space-y-3">
          {topics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30, rotateY: -8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="lift-panel group rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-md px-5 py-4 sm:px-6 sm:py-5"
              style={{
                transformStyle: "preserve-3d",
                marginLeft: i % 2 === 0 ? 0 : "1.25rem",
              }}
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-tide-400 text-sm font-semibold pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-700 text-white group-hover:text-tide-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-white/55 leading-relaxed">{item.blurb}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
