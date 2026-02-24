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
            A Parkesine e <span className="text-gradient">Baquelite</span>
          </h2>
          <p className="text-muted-foreground text-justify mx-auto mb-12 text-lg">
            A Parkesine foi criada em 1855 por Alexander Parkes e é considerada um dos primeiros plásticos semissintéticos. Podia ser moldada com o calor e endurecia ao esfriar. Apesar de inovadora e usada em diferentes aplicações, sua produção era cara e a empresa criada para fabricá-la não teve sucesso.
            Plástico Baquelite
            A Baquelite foi inventada em 1907 por Leo Baekeland e foi a primeira resina totalmente sintética. Era um plástico duro, resistente ao calor e a produtos químicos, representando um grande avanço em relação aos materiais anteriores.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default OceanPlastic;
