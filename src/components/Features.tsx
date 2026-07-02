import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { features } from "../data/features";
import { Section } from "./ui/Section";

export function Features() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <Section
      id="funcionalidades"
      eyebrow="Funcionalidades"
      title="Do cadastro do ensaio ao indicador de adesão"
      intro="Um fluxo único acompanha o estudo do início ao fim: configure o ensaio, cadastre pacientes e medicamentos, entregue embalagens rastreáveis e acompanhe a adesão em tempo real."
    >
      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {features.map(({ id, step, icon: Icon, title, description }) => (
            <article
              key={id}
              data-card
              className="flex w-[270px] shrink-0 snap-start flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:w-[300px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-medium text-muted-2">
                  {String(step).padStart(2, "0")}/{String(features.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Ver funcionalidade anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary-300 hover:text-primary-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Ver próxima funcionalidade"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary-300 hover:text-primary-600"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
