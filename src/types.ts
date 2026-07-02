import type { LucideIcon } from "lucide-react";

/** A single point highlighted in the "Diferenciais" section. */
export interface Differential {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** One step of the product workflow, shown in the "Funcionalidades" carousel. */
export interface Feature {
  id: string;
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** A person featured in the "Equipe" section. Photo is optional — falls back
 *  to an initials placeholder when not provided, per project data policy. */
export interface Person {
  id: string;
  name: string;
  role: string;
  detail?: string;
  photoUrl?: string;
  isPlaceholder: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
