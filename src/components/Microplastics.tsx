import FadeInSection from "./FadeInSection";
import { Droplets, Utensils, Wind } from "lucide-react";

const facts = [
  { icon: Droplets, text: "Microplásticos já foram encontrados na água da torneira, na chuva e até no sangue humano." },
  { icon: Utensils, text: "Estima-se que ingerimos cerca de 5 gramas de plástico por semana — o equivalente a um cartão de crédito." },
  { icon: Wind, text: "Microplásticos estão presentes no ar que respiramos, especialmente em ambientes urbanos." },
];

const Microplastics = () => {
  return (
    <section id="microplasticos" className="section-padding bg-muted">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
            Micro<span className="text-gradient">plásticos</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
            Fragmentos invisíveis de plástico, menores que 5mm, que estão em toda parte — inclusive dentro de nós.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((f, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-foreground font-medium">{f.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Microplastics;
