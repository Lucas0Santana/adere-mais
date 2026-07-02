interface AdereLogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Adere+ product mark: a blister cell with a checkmark tick (dose taken)
 * paired with the wordmark. Reuses the same visual language as the
 * blister-grid signature motif used across the page.
 */
export function AdereLogo({ variant = "dark", className = "", size = "md" }: AdereLogoProps) {
  const textColor = variant === "dark" ? "text-ink" : "text-white";
  const sizeClass =
    size === "sm" ? "h-6 w-6" : size === "lg" ? "h-10 w-40" : size === "xl" ? "h-20 w-50" : "h-8 w-8";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="logos/logo-adere-completa-horizontal.svg"
        alt="Adere+"
        aria-hidden="true"
        className={`${sizeClass} shrink-0 object-contain`}
      />
      <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
      </span>
    </div>
  );
}
