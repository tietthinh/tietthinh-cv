"use client";

import "./Section.css";
import { SectionProps } from "@/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren, useCallback, useState } from "react";

export const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  title,
  titleCaption,
  children,
  onCollapse,
  onExpand,
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggleExpand = useCallback(() => {
    setIsExpand((prev) => !prev);
    return isExpand ? onCollapse?.() : onExpand?.();
  }, [isExpand, onCollapse, onExpand]);

  return (
    <section>
      <div
        className="flex cursor-pointer justify-between"
        onClick={toggleExpand}
      >
        <div>
          <h1 className="text-3xl mb-2">{title}</h1>
          <p className="mt-1 italic text-sm">{titleCaption}</p>
        </div>
        <div className="pt-2 pl-4 items-end">
          {isExpand ? (
            <ChevronDownIcon width={24} height={24} />
          ) : (
            <ChevronUpIcon width={24} height={24} />
          )}
        </div>
      </div>
      <div className={`content ${isExpand ? "expand" : ""}`}>
        <div className="wrapper mt-10">{children}</div>
      </div>
    </section>
  );
};
