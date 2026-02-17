import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import FadeInSection from "./FadeInSection";
<<<<<<< Updated upstream
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
=======

// import aluna1Img from "@/assets/aluna1.jpg";
// import aluna2Img from "@/assets/aluna2.jpg";
// import aluna3Img from "@/assets/aluna3.jpg";
import finalistaImg from "@/assets/Finalistas.jpeg";
import feiraImg from "@/assets/Feira.jpeg";
import mostratecImg from "@/assets/Mostratec.jpeg";

// Agora chamamos de 'slides' para ficar genérico. 
// Você pode adicionar quantas fotos quiser aqui.
const slides = [
    {
        id: 1,
        title: "Nossa Equipe",
        subtitle: "Finalistas na MOSTRATEC 2025: 'Residuos nas Escolas'",
        image: finalistaImg, 
    },
    {
        id: 2,
        title: "Feira de Ciências 2024",
        subtitle: "Apresentação do protótipo.",
        image: feiraImg, 
    },
    {
        id: 3,
        title: "Mostratec 2025",
        subtitle: "Apresentação do projeto.",
        image: mostratecImg, 
    },
    // {
    //     id: 2,
    //     title: "Alice Cardoso",
    //     subtitle: "Pesquisa e Redação: 'Cada canudo recusado é um passo para o futuro.'",
    //     image: finalistaImg,
    // },
    // {
    //     id: 3,
    //     title: "Isabella Lambres",
    //     subtitle: "Design e Apresentação: 'A mudança começa quando abrimos os olhos.'",
    //     image: finalistaImg,
    // },
    // {
    //     id: 4,
    //     title: "Nicole Cunha",
    //     subtitle: "Dados e Estatísticas: 'Os números não mentem: precisamos agir agora.'",
    //     image: finalistaImg,
    // },
    
];

const AboutUs = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // Aumentei um pouco o tempo para dar tempo de ver a foto
        return () => clearInterval(timer);
    }, []);

    const navigate = (dir: number) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    };

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
    };

    const slide = slides[current];

    return (
        <section id="quem-somos" className="section-padding bg-secondary">
            <div className="container mx-auto max-w-4xl">
                <FadeInSection>
                    <div className="text-center mb-10">
                        <Users className="w-10 h-10 mx-auto mb-3 text-accent" />
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
                            <span className="text-gradient">Quem somos</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Conheça as alunas e os momentos marcantes deste projeto.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection delay={0.4}>
                    {/* Container do Slide: Removido padding interno e definida altura fixa/aspect ratio */}
                    <div className="relative bg-card rounded-2xl shadow-lg overflow-hidden h-[400px] md:h-[500px] group">
                        
                        {/* Botões de Navegação (aparecem mais visíveis no hover) */}
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Próxima"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Conteúdo do Slide */}
                        <AnimatePresence custom={direction} mode="popLayout">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Imagem Full Size */}
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay Gradiente + Texto (Legenda) */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 pt-12 text-white text-left">
                                    <h3 className="text-xl md:text-2xl font-bold font-display mb-1 text-white">
                                        {slide.title}
                                    </h3>
                                    {slide.subtitle && (
                                        <p className="text-sm md:text-base text-gray-200 line-clamp-2">
                                            {slide.subtitle}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Indicadores (Dots) */}
                        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > current ? 1 : -1);
                                        setCurrent(i);
                                    }}
                                    className={`h-2 rounded-full transition-all shadow-sm ${
                                        i === current 
                                            ? "bg-white w-6" 
                                            : "bg-white/50 w-2 hover:bg-white/80"
                                    }`}
                                    aria-label={`Ir para foto ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className="text-center mt-10">
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Somos alunas do 7º ano da EMEF Otávio Rocha, unidas pela paixão por ciência e pelo desejo de fazer a diferença. Nosso projeto é uma jornada de descoberta, conscientização e ação para enfrentar a crise do plástico. Acreditamos que, juntos, podemos transformar o mundo em um lugar mais sustentável para as futuras gerações.
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default AboutUs;
>>>>>>> Stashed changes
