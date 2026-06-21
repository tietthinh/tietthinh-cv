"use client";

import type { Hobby, HobbyProps } from "@/types";
import Image from "next/image";
import { Section } from "../Section/Section";
import { MouseEventHandler, useCallback, useState } from "react";
import { StarMark } from "../Decor/StarMark";

const Hobby: React.FC<Hobby> = ({ description, images, name }) => {
  const [dragging, setDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState(0);
  const [originPosition, setOriginPosition] = useState(0);
  const handleDragging: MouseEventHandler<HTMLUListElement> = useCallback(
    (container) => {
      setDragging(true);
      setDraggingPosition(container.clientX);
      setOriginPosition(container.target.scrollLeft);
    },
    [setDraggingPosition]
  );
  const handleScrolling: MouseEventHandler<HTMLUListElement> = useCallback(
    (container) => {
      if (!dragging) return;
      const deltaX = draggingPosition - container.clientX;
      container.target.scrollLeft = originPosition + deltaX;
    },
    [dragging, draggingPosition, originPosition]
  );
  const handleRelease: MouseEventHandler<HTMLUListElement> = useCallback(() => {
    setDragging(false);
    setDraggingPosition(0);
  }, []);

  return (
    <li className="flex flex-col rounded-2xl border border-line bg-surface/40 p-5 transition-colors duration-300 hover:border-crimson/50 break-inside-avoid">
      <h3 className="mb-2 flex items-center gap-2.5 font-display text-2xl font-semibold text-cream">
        <StarMark className="h-5 w-5 shrink-0 text-crimson" />
        {name}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-ash">{description}</p>
      {images.length > 0 && (
        <ul
          onMouseDown={handleDragging}
          onMouseMove={handleScrolling}
          onMouseOut={handleRelease}
          onMouseUp={handleRelease}
          className={`hobby-gallery overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {images.map((img, idx) => (
            <li
              key={idx}
              className="pointer-events-none mr-2 inline-block select-none overflow-hidden rounded-xl border border-line"
            >
              <Image
                alt={`${name} ${idx + 1}`}
                src={img}
                height={2000}
                width={2000}
                className="h-52 w-auto object-cover"
              />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export const Hobbies: React.FC<HobbyProps> = ({ hobbies }) => {
  return (
    <Section
      id="hobbies"
      title="Hobbies"
      titleCaption="Get to know me beyond work"
      collapsible
    >
      <ul className="grid gap-5">
        {hobbies.map((hobby) => (
          <Hobby key={hobby.name} {...hobby} />
        ))}
      </ul>
    </Section>
  );
};
