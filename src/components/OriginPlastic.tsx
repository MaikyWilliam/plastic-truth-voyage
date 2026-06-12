import FadeInSection from "./FadeInSection";

const OriginPlastic = () => {
  return (
    <section id="oceanos" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
            A Origem do <span className="text-gradient">Plástico</span>
          </h2>
          <p className="text-muted-foreground text-justify mx-auto mb-12 text-lg">
            Antes de falarmos sobre o plástico, é importante sabermos a origem da sua nomenclatura, que vem da palavra em grego, “plastikós”, que significa, aquilo que pode ser moldado, uma das principais características deste material.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default OriginPlastic;
