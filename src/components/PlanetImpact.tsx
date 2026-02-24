import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { TrendingUp, Trash2, Globe } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 430, suffix: "M ton", label: "de plástico produzidas por ano" },
  { icon: Trash2, value: 8, suffix: "M ton", label: "de plástico vão para os oceanos anualmente" },
  { icon: Globe, value: 91, suffix: "%", label: "do plástico NÃO é reciclado" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display font-black text-5xl md:text-6xl text-accent">
      {count}
      <span className="text-3xl md:text-4xl">{suffix}</span>
    </span>
  );
}

const PlanetImpact = () => {
  return (
    <section id="impacto" className="section-padding bg-ocean-gradient text-accent-foreground">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-center mb-4">
            Como o plástico impacta o <span className="text-ocean-light">planeta</span>
          </h2>
          <p className="text-center text-accent-foreground/80 mx-auto mb-16 text-lg">
            Os números são alarmantes e mostram a urgência de mudarmos nossos hábitos.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((s, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <div className="text-center">
                <s.icon className="w-12 h-12 mx-auto mb-4 text-ocean-light" />
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <p className="mt-3 text-accent-foreground/80 text-lg">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanetImpact;
