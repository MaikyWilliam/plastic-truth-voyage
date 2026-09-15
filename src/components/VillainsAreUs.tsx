import FadeInSection from "./FadeInSection";
import { Coffee, ShoppingBag, Package, Cigarette, ArrowRight } from "lucide-react";

const habits = [
  { icon: Coffee, bad: "Copo descartável todo dia", good: "Caneca ou copo reutilizável" },
  { icon: ShoppingBag, bad: "Sacolas plásticas no mercado", good: "Ecobag / sacola retornável" },
  { icon: Package, bad: "Embalagens de uso único", good: "Comprar a granel, reutilizar potes" },
  { icon: Cigarette, bad: "Canudos plásticos", good: "Canudos de metal, bambu ou papel" },
];

const VillainsAreUs = () => {
  return (
    <section id="viloes" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
            Quem é <span className="text-gradient">o vilão</span>
          </h2>
          <p className="text-muted-foreground text-justify  mx-auto mb-12 text-lg">
          Muitas pessoas acreditam que o plástico não é o verdadeiro problema, mas a realidade é que ele é um dos grandes vilões da poluição ambiental. No entanto, as ações humanas têm um papel fundamental nesses impactos. O descarte inadequado, o consumo excessivo e a falta de reciclagem fazem com que o plástico se acumule em rios, oceanos, aterros e na natureza. Pequenas atitudes, como reduzir, reutilizar materiais e reciclar corretamente, podem diminuir significativamente essa poluição. Assim, embora o plástico seja um grande vilão, são as nossas escolhas e hábitos que determinam a dimensão do problema.
          </p>
        </FadeInSection>

        <div className="space-y-4">
          {habits.map((h, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-5 border border-border flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <h.icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-foreground font-medium line-through opacity-60">{h.bad}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 hidden sm:block" />
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-primary font-bold">{h.good}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillainsAreUs;
