/**
 * The four-pointed star — Arlecchino's signature, echoing the cross-shaped
 * highlight in her eyes. Used as a recurring decorative accent.
 */
export const StarMark: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 1.5Q13.3 10.7 22.5 12 13.3 13.3 12 22.5 10.7 13.3 1.5 12 10.7 10.7 12 1.5Z" />
  </svg>
);

/**
 * Ornamental section divider centred on the star motif, with crimson
 * gradient rules tapering out to either side.
 */
export const StarDivider: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div
    className={`flex items-center justify-center gap-4 my-14 ${className}`}
    aria-hidden="true"
  >
    <span className="h-px w-full max-w-xs bg-gradient-to-r from-transparent to-crimson/60" />
    <StarMark className="h-3.5 w-3.5 shrink-0 text-crimson animate-glow" />
    <span className="h-px w-full max-w-xs bg-gradient-to-l from-transparent to-crimson/60" />
  </div>
);
