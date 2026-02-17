import FadeInSection from "./FadeInSection";
import { FlaskConical, Calendar, Lightbulb } from "lucide-react";

const timeline = [
  { year: "1907", text: "Baquelite, o primeiro plástico totalmente sintético, é inventado por Leo Baekeland." },
  { year: "1950s", text: "A produção em massa de plástico começa. A era do descartável nasce." },
  { year: "1970s", text: "Primeiros alertas sobre poluição plástica nos oceanos surgem." },
  { year: "2000s", text: "Microplásticos são descobertos em praticamente toda a cadeia alimentar." },
  { year: "2024", text: "Mais de 400 milhões de toneladas de plástico são produzidas anualmente." },
];

const curiosities = [
  { icon: FlaskConical, text: "O plástico é feito principalmente de petróleo, um recurso não renovável." },
  { icon: Calendar, text: "Uma garrafa plástica pode levar até 450 anos para se decompor." },
  { icon: Lightbulb, text: "Apenas 9% de todo o plástico já produzido foi reciclado." },
];

const WhatIsPlastic = () => {
  return (
    <section id="o-que-e" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
            O que é o <span className="text-gradient">plástico</span>?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
            O plástico é um material sintético, versátil e durável. Ele revolucionou a indústria, a medicina e o cotidiano — mas seu uso irresponsável criou uma crise ambiental sem precedentes.
          </p>
        </FadeInSection>

        {/* Timeline */}
        <FadeInSection delay={0.2}>
          <h3 className="font-display font-semibold text-xl text-foreground mb-8 text-center">Linha do Tempo</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 mt-1.5 z-10" />
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <span className="font-display font-bold text-accent text-lg">{item.year}</span>
                  <p className="text-foreground mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Curiosities */}
        <FadeInSection delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {curiosities.map((c, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <c.icon className="w-10 h-10 text-accent mb-4" />
                <p className="text-foreground font-medium">{c.text}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default WhatIsPlastic;
