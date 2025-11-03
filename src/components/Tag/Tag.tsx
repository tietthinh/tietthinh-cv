'use client';

import { TagProps } from "@/types";

export const Tag: React.FC<TagProps> = ({ id, name, onClick }) => {
  const handleOnClick = () => {
    onClick?.(id);
  };

  return (
    <button
      onClick={handleOnClick}
      className="inline-flex bg-gray-100 text-black p-1.5 mt-1.5 mr-1.5 rounded-full"
    >
      {name}
    </button>
  );
};
