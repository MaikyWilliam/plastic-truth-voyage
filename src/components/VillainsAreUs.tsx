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
            Os vilões <span className="text-gradient">somos nós</span>
          </h2>
          <p className="text-muted-foreground text-justify  mx-auto mb-12 text-lg">
        A visão da maioria das pessoas, é que o plástico sozinho é o problema, mas o real vilão são as ações humana. Ele só polui quando é descartado de forma errada, jogado em rios, oceanos, aterros sanitários, ou quando não é reciclado. Pequenos atos, como reduzir, reutilizar e reciclar o uso de descartáveis, podem fazer uma grande diferença. O plástico, quando é usado de forma consciente, é leve, resistente e muito útil no dia a dia. O segredo são as nossas escolhas e hábitos, no dia a dia.
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
