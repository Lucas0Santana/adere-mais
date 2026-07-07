import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { features } from "../data/features";
import { Section } from "./ui/Section";

export function Features() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const slides = slideRefs.current.filter((slide): slide is HTMLElement => Boolean(slide));
    if (!track || slides.length === 0) return;

    const currentScrollLeft = track.scrollLeft;
    const currentIndex = slides.reduce((closestIndex, slide, index) => {
      const closestSlide = slides[closestIndex];
      const currentDistance = Math.abs(closestSlide.offsetLeft - currentScrollLeft);
      const nextDistance = Math.abs(slide.offsetLeft - currentScrollLeft);
      return nextDistance < currentDistance ? index : closestIndex;
    }, 0);

    const nextIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[nextIndex].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <Section
      id="funcionalidades"
      eyebrow="Funcionalidades"
      title="Do cadastro do ensaio ao indicador de adesão"
      intro="Um fluxo único acompanha o estudo do início ao fim: configure o ensaio, cadastre pacientes e medicamentos, entregue embalagens rastreáveis e acompanhe a adesão em tempo real."
    >
      <div className="relative -mt-12 sm:-mt-12">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth scrollbar-none pb-4 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {features.map(({ id, step, icon: Icon, title, description, media }, index) => (
            <article
              key={id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              data-slide
              className="flex w-full shrink-0 snap-start flex-col gap-4 lg:min-h-[min(82vh,46rem)] lg:flex-row lg:items-center lg:gap-12"
            >
              <div className="lg:w-full">
                <div className="relative overflow-hidden rounded-3xl bg-surface-soft p-2 sm:p-3">
                  <div className="relative flex aspect-16/10 items-center justify-center">
                    {media ? (
                      media.kind === "image" ? (
                        <img
                          src={media.src}
                          alt={media.alt}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <video
                          className="h-full w-full object-contain"
                          src={media.src}
                          poster={media.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      )
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(20,108,106,0.12),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.98),rgba(238,247,246,0.98))] p-8 text-center">
                        <div className="max-w-sm">
                          <Icon className="mx-auto h-12 w-12 text-primary-500" />
                          <p className="mt-4 text-lg font-semibold text-ink">Visual em preparação</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            Esta etapa ainda não tem imagem ou vídeo correspondente.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-3 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-2">
                  <span>{String(step).padStart(2, "0")}/{String(features.length).padStart(2, "0")}</span>
                </p>
              </div>

              <div className="lg:w-[36%]">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="max-w-lg text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  {title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex justify-end w-full items-center gap-3">
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
      </div>
    </Section>
  );
}