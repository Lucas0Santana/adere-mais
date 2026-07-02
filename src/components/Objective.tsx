import { AlertTriangle, FileWarning, EyeOff, Network } from "lucide-react";
import { Section } from "./ui/Section";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Esquecimentos",
    description: "Doses perdidas por falta de lembretes claros no dia a dia do paciente.",
  },
  {
    icon: FileWarning,
    title: "Registros manuais",
    description: "Anotações em papel são difíceis de consolidar e sujeitas a erro.",
  },
  {
    icon: EyeOff,
    title: "Baixa visibilidade",
    description: "A equipe do estudo tem pouca clareza sobre a adesão real dos pacientes.",
  },
  {
    icon: Network,
    title: "Controle descentralizado",
    description: "Informações espalhadas entre planilhas, papéis e sistemas isolados.",
  },
];

export function Objective() {
  return (
    <Section
      id="objetivo"
      eyebrow="Objetivo"
      title="Uma plataforma para dar mais controle à adesão de medicamentos"
      intro="O Adere+ é uma plataforma digital que auxilia no acompanhamento da adesão de medicamentos de pacientes participantes de ensaios clínicos, dando à equipe responsável mais controle sobre o uso dos medicamentos e organização das informações do estudo."
    >
      <p className="max-w-3xl text-sm font-medium uppercase tracking-wide text-primary-600">
        Dificuldades que o sistema busca reduzir
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {challenges.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-research-400/10 text-research-500">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 font-display text-base font-semibold text-ink">{title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
