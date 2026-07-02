import { differentials } from "../data/differentials";
import { Section } from "./ui/Section";

export function Differentials() {
  return (
    <Section
      id="diferenciais"
      tone="surface"
      eyebrow="Diferenciais"
      title="Construído em torno da rotina real de um ensaio clínico"
      intro="Cada recurso do Adere+ existe para resolver um ponto concreto do acompanhamento de adesão em pesquisa clínica — do cadastro do estudo ao indicador final."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {differentials.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="group rounded-2xl border border-border bg-bg p-6 transition-colors duration-200 hover:border-primary-300 hover:bg-white hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500 text-white transition-transform duration-200 group-hover:-translate-y-0.5">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 font-display text-base font-semibold leading-snug text-ink">
              {title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
