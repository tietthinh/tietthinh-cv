export const Bracket: React.FC = () => {
  return (
    <div className="relative ml-12 h-full w-24 rounded-3xl border-l-4 border-crimson/50">
      {/* Arrow head pointing toward the project cards */}
      <div className="absolute -left-2 top-1/2 h-0 w-0 -translate-y-1/2 border-b-8 border-l-[14px] border-t-8 border-b-transparent border-l-crimson border-t-transparent" />
    </div>
  );
};
