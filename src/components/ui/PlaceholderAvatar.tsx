interface PlaceholderAvatarProps {
  name: string;
  className?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Neutral initials avatar used whenever a real team photo is not yet available. */
export function PlaceholderAvatar({ name, className = "" }: PlaceholderAvatarProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary-50 font-display text-lg font-semibold text-primary-600 ${className}`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}
