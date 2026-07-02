import { developers, technicalAdvisors, domainExperts } from "../data/team";
import type { Person } from "../types";
import { Section } from "./ui/Section";
import { PersonCard } from "./ui/PersonCard";

function TeamGroup({ label, people }: { label: string; people: Person[] }) {
  return (
    <div>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary-600">
        {label}
      </p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
}

export function Team() {
  return (
    <Section
      id="equipe"
      tone="surface"
      eyebrow="Equipe"
      title="Quem constrói o Adere+"
      intro="O projeto reúne alunos desenvolvedores, consultoria técnica e especialistas do domínio de pesquisa clínica."
    >
      <div className="flex flex-col gap-14">
        <TeamGroup label="Desenvolvedores" people={developers} />
        <TeamGroup label="Consultoria técnica" people={technicalAdvisors} />
        <TeamGroup label="Especialistas do domínio" people={domainExperts} />
      </div>
    </Section>
  );
}
