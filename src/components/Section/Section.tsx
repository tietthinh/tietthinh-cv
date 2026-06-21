"use client";

import "./Section.css";
import { SectionProps } from "@/types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren, useCallback, useState } from "react";
import { StarMark } from "../Decor/StarMark";

export const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  id,
  title,
  titleCaption,
  children,
  collapsible,
  onCollapse,
  onExpand,
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const open = !collapsible || isExpand;

  const toggleExpand = useCallback(() => {
    if (!collapsible) return;
    setIsExpand((prev) => {
      const next = !prev;
      if (next) onExpand?.();
      else onCollapse?.();
      return next;
    });
  }, [collapsible, onCollapse, onExpand]);

  return (
    <section id={id} className="scroll-mt-24">
      <header
        className={`flex items-start justify-between gap-4 ${
          collapsible ? "cursor-pointer select-none" : ""
        }`}
        onClick={toggleExpand}
        role={collapsible ? "button" : undefined}
        aria-expanded={collapsible ? open : undefined}
      >
        <div className="flex items-start gap-4">
          <StarMark className="mt-2 h-6 w-6 shrink-0 text-crimson sm:mt-2.5 sm:h-7 sm:w-7" />
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-cream sm:text-4xl">
              {title}
            </h2>
            {titleCaption && (
              <p className="mt-1 text-sm italic text-ash">{titleCaption}</p>
            )}
            <span className="mt-3 block h-0.5 w-16 bg-gradient-to-r from-crimson to-transparent" />
          </div>
        </div>

        {collapsible && (
          <span
            className={`mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface/50 text-crimson transition-all duration-300 hover:border-crimson hover:bg-crimson hover:text-cream print:hidden ${
              open ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon className="h-5 w-5" />
          </span>
        )}
      </header>

      <div className={`content ${open ? "expand" : ""}`}>
        <div className="wrapper mt-10">{children}</div>
      </div>
    </section>
  );
};
