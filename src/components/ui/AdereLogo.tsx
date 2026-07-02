interface AdereLogoProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Adere+ product mark: a blister cell with a checkmark tick (dose taken)
 * paired with the wordmark. Reuses the same visual language as the
 * blister-grid signature motif used across the page.
 */
export function AdereLogo({ variant = "dark", className = "" }: AdereLogoProps) {
  const textColor = variant === "dark" ? "text-ink" : "text-white";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="favicon 2.svg"
        alt=""
        aria-hidden="true"
        className="h-8 w-8 shrink-0 object-contain"
      />
      <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
      </span>
    </div>
  );
}
