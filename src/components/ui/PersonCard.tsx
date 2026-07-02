import type { Person } from "../../types";
import { PlaceholderAvatar } from "./PlaceholderAvatar";

/** Card used across all three "Equipe" groups (dev, consultoria, especialistas). */
export function PersonCard({ name, role, detail, photoUrl, isPlaceholder }: Person) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]">
      {photoUrl && !isPlaceholder ? (
        <img
          src={photoUrl}
          alt={name}
          className="h-20 w-20 rounded-full object-cover"
        />
      ) : (
        <PlaceholderAvatar name={name} className="h-20 w-20" />
      )}

      <p className="mt-4 font-display text-base font-semibold text-ink">{name}</p>
      <p className="mt-1 text-sm text-primary-600">{role}</p>
      {detail && <p className="mt-1 text-xs text-muted">{detail}</p>}

      {isPlaceholder && (
        <span className="mt-3 rounded-full bg-accent-100 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-accent-600">
          Dados a confirmar
        </span>
      )}
    </div>
  );
}
