import type { ProjectsProps, Project } from "@/types";
import Image from "next/image";
import { buildDurationText, formatDate, getDuration } from "./helper";
import { Tag } from "../Tag/Tag";
const Project: React.FC<Project> = ({
  timeStart,
  timeEnd,
  name,
  company,
  companyLogo,
  description,
  domain,
  position,
  role,
  techstack,
}) => {
  const start = formatDate(timeStart);
  const end = formatDate(timeEnd);
  const durationText = buildDurationText(getDuration(timeStart, timeEnd));
  return (
    <div className="border rounded-lg border-white p-3">
      <div>
        <h2 className="text-4xl">{name}</h2>
      </div>
      <div className="my-2">
        {start} &nbsp;&nbsp;-&nbsp;&nbsp; {end} &nbsp;({durationText})
      </div>
      <div className="flex items-center">
        <Image
          src={companyLogo}
          alt={company}
          width={40}
          height={40}
          priority
        />
        <h3 className="text-3xl ml-2">{company}</h3>
      </div>
      <div className="mt-2.5">Domain: {domain.join(", ")}</div>
      <div className="mt-2.5">
        Techstack:{" "}
        {techstack.map((stack) => (
          <Tag key={stack} name={stack} id={stack} />
        ))}
      </div>
      <div className="mt-2.5">Position: {position}</div>
      <div className="mt-2.5">Role: {role}</div>
      <div className="mt-2.5">Description: {description}</div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ projectProps }) => {
  return (
    <div className="projects">
      <h1 className="text-3xl mb-5">Projects</h1>
      <div className="grid grid-cols-2 gap-5 px-5">
        {projectProps.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
