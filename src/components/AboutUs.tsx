import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import FadeInSection from "./FadeInSection";
import aluna1Img from "@/assets/aluna1.jpg";
import aluna2Img from "@/assets/aluna2.jpg";
import aluna3Img from "@/assets/aluna3.jpg";
import aluna4Img from "@/assets/aluna4.jpg";

const alunas = [
  {
    name: "Aluna 1",
    role: "Pesquisa e Redação",
    quote: "Cada canudo recusado é um passo para o futuro.",
    image: aluna1Img,
  },
  {
    name: "Aluna 2",
    role: "Design e Apresentação",
    quote: "A mudança começa quando abrimos os olhos.",
    image: aluna2Img,
  },
  {
    name: "Aluna 3",
    role: "Dados e Estatísticas",
    quote: "Os números não mentem: precisamos agir agora.",
    image: aluna3Img,
  },
  {
    name: "Aluna 4",
    role: "Soluções e Propostas",
    quote: "Ser parte da solução é uma escolha diária.",
    image: aluna4Img,
  },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % alunas.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + alunas.length) % alunas.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  const aluna = alunas[current];

  return (
    <section id="quem-somos" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <Users className="w-10 h-10 mx-auto mb-3 text-accent" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Quem Somos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conheça as alunas por trás deste projeto de conscientização ambiental.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="relative bg-card rounded-2xl shadow-lg p-8 md:p-12 overflow-hidden min-h-[320px] flex items-center">
            {/* Navigation buttons */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide content */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col items-center text-center gap-5"
              >
                {/* Avatar */}
                <img
                  src={aluna.image}
                  alt={aluna.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-accent"
                />

                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
                    {aluna.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mt-1">
                    {aluna.role}
                  </p>
                </div>

                <blockquote className="text-muted-foreground italic text-base md:text-lg max-w-md">
                  "{aluna.quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {alunas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-accent w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutUs;
