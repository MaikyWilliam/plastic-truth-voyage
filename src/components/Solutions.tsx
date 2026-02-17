import FadeInSection from "./FadeInSection";
import { Recycle, TrendingDown, RotateCcw, Heart } from "lucide-react";

const solutions = [
  {
    icon: Recycle,
    title: "Reciclar",
    desc: "Separe os resíduos corretamente e apoie cooperativas de reciclagem na sua cidade.",
  },
  {
    icon: TrendingDown,
    title: "Reduzir",
    desc: "Evite produtos com excesso de embalagem e priorize alternativas sustentáveis.",
  },
  {
    icon: RotateCcw,
    title: "Reutilizar",
    desc: "Dê nova vida a potes, garrafas e embalagens antes de descartá-los.",
  },
  {
    icon: Heart,
    title: "Consumo Consciente",
    desc: "Antes de comprar, pergunte-se: eu realmente preciso disso? Há opção sustentável?",
  }
];

const Solutions = () => {
  return (
    <section id="solucoes" className="section-padding bg-green-gradient text-accent-foreground">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-center mb-4">
            Soluções para um <span className="text-ocean-light">futuro melhor</span>
          </h2>
          <p className="text-center text-accent-foreground/80 max-w-2xl mx-auto mb-12 text-lg">
            A mudança começa com pequenas atitudes. Cada gesto conta.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
                <s.icon className="w-10 h-10 text-ocean-light mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-accent-foreground/80">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
