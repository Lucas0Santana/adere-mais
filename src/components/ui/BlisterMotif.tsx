interface BlisterMotifProps {
  /** Which of the grid's cells appear "taken" (filled), 0-indexed. */
  filled?: number[];
  cols?: number;
  rows?: number;
  className?: string;
}

/**
 * The page's signature visual: a blister-pack grid of dosage cells, some
 * "taken" (filled) and some pending (outlined) — a direct, literal echo of
 * the medication packaging Adere+ tracks via QR code. Reused at small scale
 * in the hero and as a section divider, rather than a generic gradient blob.
 */
export function BlisterMotif({
  filled = [0, 1, 2, 4, 7, 9, 12],
  cols = 6,
  rows = 3,
  className = "",
}: BlisterMotifProps) {
  const cells = Array.from({ length: cols * rows });
  const cell = 34;
  const gap = 10;
  const r = 12;
  const width = cols * cell + (cols - 1) * gap;
  const height = rows * cell + (rows - 1) * gap;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      {cells.map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * (cell + gap);
        const y = row * (cell + gap);
        const isFilled = filled.includes(i);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={cell}
            height={cell}
            rx={r}
            fill={isFilled ? "var(--color-primary-500)" : "transparent"}
            stroke={isFilled ? "var(--color-primary-500)" : "var(--color-primary-300)"}
            strokeWidth={isFilled ? 0 : 1.5}
            opacity={isFilled ? 0.92 : 0.5}
          />
        );
      })}
    </svg>
  );
}
