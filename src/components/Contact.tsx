import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "../data/nav";
import { Section } from "./ui/Section";

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Para saber mais sobre o projeto Adere+"
      intro="Entre em contato pelo canal institucional do projeto."
    >
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-6 py-4 font-mono text-sm font-medium text-primary-700 shadow-[var(--shadow-card)] transition-colors hover:border-primary-300"
      >
        <Mail className="h-5 w-5 text-primary-500" />
        {CONTACT_EMAIL}
      </a>
      <p className="mt-4 max-w-lg text-xs text-muted-2">
        Canal institucional do projeto. E-mails pessoais de alunos, professores
        ou especialistas não são divulgados nesta página.
      </p>
    </Section>
  );
}
