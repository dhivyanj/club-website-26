import figlet from "figlet";

type StatData = {
  value: string;
  label: string;
};

type StatsCardProps = {
  stats?: StatData[];
};

function Stat({ value, label }: StatData) {
  const asciiArt = figlet.textSync(value, { font: "Slant" });

  return (
    <div className="flex flex-col items-center text-center w-full px-4">
      <pre
        className="
          font-JetBrains Mono font-bold leading-none tracking-tighter
          text-[10px] sm:text-[11px] md:text-xs lg:text-[13px]
          bg-gradient-to-r from-[#95D500] to-[#02E53F] 
          bg-clip-text text-transparent 
        "
      >
        {asciiArt}
      </pre>

      <p className="text-zinc-300 font-mono text-sm leading-relaxed mt-2">
        {label}
      </p>
    </div>
  );
}

const defaultStats: StatData[] = [
  { value: "60+", label: "Projects" },
  { value: "300+", label: "Attendees" },
  { value: "50+", label: "Schools" },
  { value: "1000+", label: "Applications" },
];

export default function StatsCard({ stats = defaultStats }: StatsCardProps) {
  return (
    <section className="w-full flex justify-center py-20 px-6">
      <div
        className="
          w-full max-w-7xl 
          relative rounded-3xl 
          border border-white/10 shadow-2xl
          transition-all duration-500 hover:border-white/20
          overflow-hidden
        "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40" />

        <div
          className="
            relative z-10 
            p-10 md:p-16
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-x-4 gap-y-16
            place-items-center
          "
        >
          {stats.map((stat, index) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
