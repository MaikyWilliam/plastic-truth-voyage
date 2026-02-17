import FadeInSection from "./FadeInSection";
import { Fish, Shell, Waves, AlertTriangle } from "lucide-react";

const animals = [
  {
    icon: Fish,
    name: "Peixes",
    fact: "Mais de 1 milhão de animais marinhos morrem por ano devido ao plástico nos oceanos.",
  },
  {
    icon: Shell,
    name: "Tartarugas",
    fact: "Confundem sacolas plásticas com águas-vivas, seu principal alimento.",
  },
  {
    icon: Waves,
    name: "Baleias",
    fact: "Já foram encontradas baleias com mais de 40kg de plástico no estômago.",
  },
  {
    icon: AlertTriangle,
    name: "Aves Marinhas",
    fact: "90% das aves marinhas já ingeriram plástico pelo menos uma vez.",
  },
];

const OceanPlastic = () => {
  return (
    <section id="oceanos" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
            O plástico nos <span className="text-gradient">oceanos</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
            Existem 5 enormes "ilhas de lixo" nos oceanos. A maior, no Pacífico, tem o tamanho de três vezes a França.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {animals.map((a, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="group bg-card rounded-xl p-6 border border-border hover:border-accent transition-all hover:shadow-xl cursor-default">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <a.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">{a.name}</h3>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {a.fact}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OceanPlastic;
