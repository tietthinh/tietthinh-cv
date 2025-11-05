import type { Hobby, HobbyProps } from "@/types";
import Image from "next/image";
import { Section } from "../Section/Section";

const Hobby: React.FC<Hobby> = ({ description, images, name }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-3">{name}</h2>
      <p className="mb-3">{description}</p>
      <div className="flex mb-10">
        {images.map((img) => (
          <div key={img.caption}>
            <Image alt={img.caption} src={img.url} width={250} height={250} />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Hobbies: React.FC<HobbyProps> = ({ hobbies }) => {
  return (
    <Section
      title="Hobbies"
      titleCaption="Where you get to know more about me beside works"
    >
      {hobbies.map((hobby) => {
        return <Hobby key={hobby.name} {...hobby} />;
      })}
    </Section>
  );
};
