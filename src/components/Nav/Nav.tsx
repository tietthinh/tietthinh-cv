import { StarMark } from "../Decor/StarMark";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#hobbies", label: "Hobbies" },
];

export const Nav: React.FC<{ github: string }> = ({ github }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/70 backdrop-blur-md print:hidden">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:text-crimson"
        >
          <StarMark className="h-4 w-4 text-crimson" />
          <span className="hidden sm:inline">Tran Tiet Thinh</span>
          <span className="sm:hidden">T.T. Thinh</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-ash transition-colors hover:bg-crimson/15 hover:text-cream sm:text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-full border border-crimson/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-crimson transition-colors hover:bg-crimson hover:text-cream sm:inline-block"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};
