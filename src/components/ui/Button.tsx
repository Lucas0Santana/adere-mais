import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent-500 text-ink hover:bg-accent-600 shadow-[0_10px_24px_-10px_rgba(232,163,61,0.55)]",
  secondary:
    "bg-white text-primary-700 hover:bg-primary-50 border border-border",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

/** Anchor-styled call-to-action button, used for in-page navigation CTAs. */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
