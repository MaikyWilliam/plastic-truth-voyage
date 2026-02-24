import { useState } from "react";
import FadeInSection from "./FadeInSection";
import { Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { item: "Sacola plástica", time: "20 a 1.000 anos", color: "bg-accent" },
  { item: "Garrafa PET", time: "450 anos", color: "bg-ocean" },
  { item: "Copo descartável", time: "50 a 400 anos", color: "bg-green-bright" },
  { item: "Canudo plástico", time: "200 anos", color: "bg-primary" },
  { item: "Fralda descartável", time: "600 anos", color: "bg-earth" },
  { item: "Linha de pesca", time: "600 anos", color: "bg-ocean-deep" },
  { item: "Isopor", time: "Mais de 500 anos", color: "bg-destructive" },
];

const DecompositionTime = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section id="decomposicao" className="section-padding bg-muted">
      <div className="container mx-auto max-w-4xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
            Tempo de <span className="text-gradient">decomposição</span>
          </h2>
          <p className="text-muted-foreground text-justify mx-auto mb-12 text-lg">
             O tempo de decomposição varia conforme o tipo. Sacolas podem levar de 10 a 20 anos, copos 50 anos, canudos cerca de 200 anos e garrafas PET de 400 a 600 anos. Esses dados mostram como o descarte incorreto pode causar impactos duradouros no meio ambiente.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <FadeInSection key={i} delay={i * 0.05}>
              <button
                onClick={() => toggle(i)}
                className="w-full bg-card rounded-xl p-5 border border-border text-left hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="font-display font-semibold text-foreground">{item.item}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      revealed[i] ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {revealed[i] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-accent font-display font-bold text-2xl">{item.time}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecompositionTime;
