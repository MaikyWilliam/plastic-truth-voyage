import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <Leaf className="w-8 h-8 mx-auto mb-4 text-ocean-light" />
        <p className="font-display font-bold text-lg mb-2">Plástico Os Vilões Somos Nós</p>
        <p className="text-primary-foreground/70 mb-4">
          Trabalho apresentado na Feira de Ciências 2026
        </p>
        <div className="flex items-center justify-center gap-1 text-primary-foreground/60 text-sm mb-4">
          <span>Feito com</span>
          <Heart className="w-4 h-4 text-destructive fill-destructive" />
          <span>pelas alunas</span>
        </div>
        <p>Alice Cardoso, Isabella Lambrecht e Nicole Cunha</p>
        <p className="text-primary-foreground/50 text-sm">
          © 2026 — EMEF OTÁVIO ROCHA
        </p>
        <p className="text-primary-foreground/40 text-xs mt-4 italic">
          "O planeta não precisa de mais pessoas perfeitas. Precisa de milhões fazendo o melhor que podem."
        </p>
      </div>
    </footer>
  );
};

export default Footer;
