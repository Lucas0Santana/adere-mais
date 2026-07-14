import { PlayCircle } from "lucide-react";

import { BlisterMotif } from "./ui/BlisterMotif";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-linear-to-b from-primary-50 via-bg to-bg pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="blister-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-16 top-24 hidden w-[280px] rotate-6 opacity-90 lg:block">
        <BlisterMotif className="w-full drop-shadow-sm" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Tecnologia para acompanhar a adesão aos medicamentos em ensaios clínicos
            </h1>

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

          <div className="w-full max-w-md shrink-0 lg:w-3/4">
            <img
              src="screenshots/hero_display.png"
              alt="Tela inicial do Adere+"
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
