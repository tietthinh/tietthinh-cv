"use client";

import { TagProps } from "@/types";

export const Tag: React.FC<TagProps> = ({ id, name, count, onClick }) => {
  const handleOnClick = () => {
    onClick?.(id);
  };

  return (
    <button
      onClick={handleOnClick}
      className="group mb-1.5 mr-1.5 inline-flex items-center gap-1.5 rounded-full border border-crimson/35 bg-crimson/10 px-3 py-1 text-sm font-medium text-cream transition-all duration-200 hover:border-crimson hover:bg-crimson hover:text-cream hover:shadow-[0_4px_14px_-4px_rgba(200,16,46,0.7)]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-crimson transition-colors group-hover:bg-cream" />
      {name}
      {typeof count === "number" && (
        <span className="text-ash group-hover:text-cream/80">({count})</span>
      )}
    </button>
  );
};
