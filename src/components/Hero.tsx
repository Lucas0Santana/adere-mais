import { PlayCircle } from "lucide-react";

import { BlisterMotif } from "./ui/BlisterMotif";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-bg to-bg pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="blister-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-16 top-24 hidden w-[280px] rotate-6 opacity-90 lg:block">
        <BlisterMotif className="w-full drop-shadow-sm" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Tecnologia para acompanhar a adesão aos medicamentos em ensaios clínicos
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            O Adere+ apoia farmacêuticos, coordenadores e alunos de pesquisa
            a monitorar o uso adequado dos medicamentos durante um ensaio clínico,
            garantindo aos pacientes mais segurança, organização e inteligência.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#objetivo" variant="primary">
              Conheça o projeto
            </Button>
            <Button href="#funcionalidades" variant="secondary">
              Ver funcionalidades
            </Button>
            <Button href="#pitch" variant="secondary">
              <PlayCircle className="h-4 w-4" />
              Assistir pitch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
