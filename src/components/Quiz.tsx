import { useState } from "react";
import FadeInSection from "./FadeInSection";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle, XCircle } from "lucide-react";

const questions = [
  {
    q: "Quanto tempo uma garrafa PET leva para se decompor?",
    options: ["50 anos", "450 anos", "1.000 anos"],
    answer: 1,
  },
  {
    q: "Qual porcentagem do plástico produzido no mundo é reciclada?",
    options: ["9%", "30%", "50%"],
    answer: 0,
  },
  {
    q: "Quantas toneladas de plástico vão para os oceanos por ano?",
    options: ["1 milhão", "8 milhões", "20 milhões"],
    answer: 1,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[current].answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section id="quiz" className="section-padding bg-ocean-gradient text-accent-foreground">
      <div className="container mx-auto max-w-2xl">
        <FadeInSection>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-center mb-4">
            Quiz <span className="text-ocean-light">Rápido</span>
          </h2>
          <p className="text-center text-accent-foreground/80 mb-10">
            Teste seus conhecimentos sobre o plástico!
          </p>
        </FadeInSection>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-ocean-light" />
                <span className="text-sm font-medium text-accent-foreground/70">
                  Pergunta {current + 1} de {questions.length}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-6">{questions[current].q}</h3>
              <div className="space-y-3">
                {questions[current].options.map((opt, i) => {
                  let style = "border-primary-foreground/30 hover:border-ocean-light";
                  if (selected !== null) {
                    if (i === questions[current].answer) style = "border-green-light bg-green-light/20";
                    else if (i === selected) style = "border-destructive bg-destructive/20";
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${style}`}
                    >
                      <div className="flex items-center gap-3">
                        {selected !== null && i === questions[current].answer && (
                          <CheckCircle className="w-5 h-5 text-green-light shrink-0" />
                        )}
                        {selected !== null && i === selected && i !== questions[current].answer && (
                          <XCircle className="w-5 h-5 text-destructive shrink-0" />
                        )}
                        {opt}
                      </div>
                    </button>
                  );
                })}
              </div>
              {selected !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={next}
                  className="mt-6 bg-ocean-light text-ocean-deep font-display font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
                >
                  {current + 1 < questions.length ? "Próxima →" : "Ver resultado"}
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center"
            >
              <p className="font-display font-black text-6xl text-ocean-light mb-4">
                {score}/{questions.length}
              </p>
              <p className="text-xl mb-6">
                {score === questions.length
                  ? "Parabéns! Você é um expert! 🌍"
                  : score >= 2
                  ? "Quase lá! Continue aprendendo! 🌱"
                  : "Que tal reler o conteúdo? 📚"}
              </p>
              <button
                onClick={restart}
                className="bg-ocean-light text-ocean-deep font-display font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
              >
                Tentar novamente
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Quiz;
