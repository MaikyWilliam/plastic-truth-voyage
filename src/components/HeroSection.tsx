import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-ocean-light font-display font-semibold text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          Feira de Ciências 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight mb-6"
        >
          PLÁSTICO:
          <br />
          <span className="text-ocean-light">OS VILÕES SOMOS NÓS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          O problema não é o plástico. <strong>Somos nós.</strong>
        </motion.p>

        <motion.a
          href="#o-que-e"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="inline-block bg-accent hover:bg-ocean-deep text-accent-foreground font-display font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
        >
          Descubra a verdade
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
