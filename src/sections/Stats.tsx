import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="s-cream stats">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} className="stat" delay={index * 80}>
              <CountUp
                className="num"
                value={stat.value}
                decimals={stat.decimals}
                group={stat.group}
                suffix={stat.suffix}
              />
              <span className="lbl">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
