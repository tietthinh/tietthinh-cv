"use client";

import type { Hobby, HobbyProps } from "@/types";
import Image from "next/image";
import { Section } from "../Section/Section";
import { MouseEventHandler, useCallback, useState } from "react";

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
    <li className="flex flex-col">
      <h2 className="text-2xl mb-3">{name}</h2>
      <p className="mb-3">{description}</p>
      <ul
        onMouseDown={handleDragging}
        onMouseMove={handleScrolling}
        onMouseOut={handleRelease}
        onMouseUp={handleRelease}
        className={`overflow-x-auto mb-10 whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {images.map((img, idx) => (
          <li
            key={idx}
            className="inline-block mx-1 pointer-events-none select-none"
          >
            <Image
              alt={`${idx}`}
              src={img}
              height={2000}
              width={2000}
              className="object-cover h-50 w-auto"
            />
          </li>
        ))}
      </ul>
    </li>
  );
};

export const Hobbies: React.FC<HobbyProps> = ({ hobbies }) => {
  return (
    <Section
      title="Hobbies"
      titleCaption="Where you get to know more about me beside works"
      collapsible
    >
      <ul>
        {hobbies.map((hobby) => (
          <Hobby key={hobby.name} {...hobby} />
        ))}
      </ul>
    </Section>
  );
};
