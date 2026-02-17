import { useState } from "react";
import FadeInSection from "./FadeInSection";
import { Check, Square, CheckSquare, Home, School } from "lucide-react";

const schoolActions = [
  "Usar garrafas reutilizáveis na escola",
  "Separar o lixo corretamente nas lixeiras da escola",
  "Criar uma horta escolar com compostagem",
  "Organizar campanhas de conscientização",
  "Evitar materiais descartáveis em eventos",
];

const homeActions = [
  "Usar ecobags no supermercado",
  "Evitar comprar produtos com muito plástico",
  "Recusar canudos e talheres descartáveis",
  "Compostar resíduos orgânicos",
  "Reutilizar embalagens e potes de vidro",
];

const SchoolActions = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (item: string) =>
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));

  const renderList = (items: string[], icon: React.ReactNode, title: string) => (
    <div>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-display font-bold text-xl text-foreground">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => toggle(item)}
            className="w-full flex items-center gap-3 bg-card p-4 rounded-lg border border-border hover:border-accent transition-colors text-left"
          >
            {checked[item] ? (
              <CheckSquare className="w-5 h-5 text-accent shrink-0" />
            ) : (
              <Square className="w-5 h-5 text-muted-foreground shrink-0" />
            )}
            <span
              className={`font-medium transition-all ${
                checked[item] ? "text-accent line-through" : "text-foreground"
              }`}
            >
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const total = schoolActions.length + homeActions.length;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section id="acoes" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
            O que podemos <span className="text-gradient">fazer</span>?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4 text-lg">
            Marque as ações que você já pratica ou quer começar a praticar!
          </p>
          {done > 0 && (
            <p className="text-center text-accent font-display font-bold mb-8">
              <Check className="w-5 h-5 inline mr-1" />
              {done} de {total} ações marcadas!
            </p>
          )}
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeInSection delay={0.1}>
            {renderList(schoolActions, <School className="w-6 h-6 text-accent" />, "Na Escola")}
          </FadeInSection>
          <FadeInSection delay={0.2}>
            {renderList(homeActions, <Home className="w-6 h-6 text-accent" />, "Em Casa")}
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default SchoolActions;
