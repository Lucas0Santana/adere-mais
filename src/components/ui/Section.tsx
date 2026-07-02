import type { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "default" | "surface" | "ink";
  className?: string;
}

const toneStyles: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-bg",
  surface: "bg-surface",
  ink: "bg-ink text-white",
};

/**
 * Standard section shell: id anchor for nav links, eyebrow label, heading
 * and optional intro paragraph, centered and width-capped.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${toneStyles[tone]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <p
              className={`mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] ${
                tone === "ink" ? "text-primary-300" : "text-primary-600"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-4 text-base leading-relaxed sm:text-lg ${
                tone === "ink" ? "text-white/70" : "text-muted"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
