import { SkillsProps } from "@/types";
import { Section } from "../Section/Section";
import Image from "next/image";

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Skills" titleCaption="What techstack I'm working with" collapsible>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-5">
          <div className="flex">
            <Image
              className="mr-5 self-start" 
              src={skill.image}
              alt={skill.name}
              width={100}
              height={100}
            />
            <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </Section>
  );
};
