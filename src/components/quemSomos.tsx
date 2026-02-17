import FadeInSection from "./FadeInSection";
import { Users } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";


const QuemSomos = () => {
    return (
        <section className="section-padding bg-muted">
            <div className="container mx-auto max-w-3xl text-center">
                <FadeInSection>
                    <Users className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
                        <span className="text-gradient">Quem somos</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-4">
                        Somos alunas do 7º ano da EMEF Otávio Rocha, unidas pela paixão por ciência e pelo desejo de fazer a diferença. Nosso projeto é uma jornada de descoberta, conscientização e ação para enfrentar a crise do plástico. Acreditamos que, juntos, podemos transformar o mundo em um lugar mais sustentável para as futuras gerações.
                    </p>
                    <p className="font-display font-bold text-2xl text-foreground mb-8">
                        "Se não mudarmos a direção, acabaremos exatamente onde estamos indo."
                    </p>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-hero-overlay" />
                    
                </FadeInSection>
            </div>
        </section>
    );
};

export default QuemSomos;