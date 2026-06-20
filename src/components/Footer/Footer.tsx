import { StarMark } from "../Decor/StarMark";

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-3 pb-4 text-center">
      <StarMark className="h-5 w-5 text-crimson animate-glow" />
      <p className="max-w-xl text-sm text-ash">
        For more information about this CV&apos;s source code, please visit the
        GitHub repository linked above.
      </p>
      <p className="text-sm text-ash">
        Crafted with{" "}
        <span className="font-semibold text-cream">React</span> &amp;{" "}
        <span className="font-semibold text-cream">Next.js</span> by{" "}
        <span className="font-display font-semibold text-crimson">
          Thinh Tran
        </span>
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-ash-dim">
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};
