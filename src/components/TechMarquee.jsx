const items = [
  "Flutter",
  "Laravel",
  "React",
  "PHP",
  "Dart",
  "MySQL",
  "REST APIs",
  "POS Systems",
  "Inventory",
  "AI Research",
  "Node.js",
  "SQL Server",
];

export default function TechMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="relative border-y border-ink-800/10 bg-white/50 overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mist-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mist-50 to-transparent z-10" />
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm sm:text-base font-700 tracking-wide text-ink-800/55 flex items-center gap-10"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-tide-500/70" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
