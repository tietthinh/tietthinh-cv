import { SkillsProps } from "@/types";
import { Section } from "../Section/Section";
import Image from "next/image";

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section
      id="skills"
      title="Skills"
      titleCaption="The technologies I build with every day"
      collapsible
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/60 hover:bg-surface hover:shadow-[0_24px_50px_-30px_rgba(200,16,46,0.65)] break-inside-avoid"
          >
            {/* Crimson edge that lights up on hover */}
            <span className="absolute inset-y-0 left-0 w-1 bg-crimson/40 transition-colors duration-300 group-hover:bg-crimson" />
            <div className="flex items-start gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl border border-line bg-ink/60 p-3 transition-colors duration-300 group-hover:border-crimson/50">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="mb-1 font-display text-xl font-semibold tracking-wide text-cream">
                  {skill.name}
                </h3>
                <p className="text-sm leading-relaxed text-ash">
                  {skill.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
