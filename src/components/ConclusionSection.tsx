import FadeInSection from "./FadeInSection";
import { Sparkles } from "lucide-react";

const ConclusionSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-3xl text-center">
        <FadeInSection>
          <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
            A mudança começa <span className="text-gradient">agora</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Não precisamos de um mundo perfeito. Precisamos de milhões de pessoas fazendo o seu melhor. O plástico não é o vilão — nós somos. Mas também somos a solução.
          </p>
          <p className="font-display font-bold text-2xl text-foreground mb-8">
            "Se não mudarmos a direção, acabaremos exatamente onde estamos indo."
          </p>
          <a
            href="#hero"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
          >
            ♻️ Eu faço parte da mudança
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ConclusionSection;
