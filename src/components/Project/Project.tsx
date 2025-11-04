"use client";

import type { ProjectsProps, Project } from "@/types";
import Image from "next/image";
import { buildDurationText, formatDate, getDuration } from "../helper";
import { Tag } from "../Tag/Tag";
import { PropsWithChildren, ReactNode } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="font-bold underline">{children}:</span>;
};
const Value: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="font-medium">&nbsp;{children}</span>;
};

const FieldValue: React.FC<{ title: string; value: ReactNode }> = ({
  title,
  value,
}) => {
  return (
    <p className="py-1.5">
      <Title>{title}</Title>
      <Value>{value}</Value>
    </p>
  );
};

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
    <div className="border rounded-lg border-white border-l-8 border-l-yellow-300 p-3  min-h-[360px]">
      <div>
        <h2 className="text-4xl">{name}</h2>
      </div>
      <div className="my-2">
        {start} &nbsp;to&nbsp; {end} &nbsp;({durationText})
      </div>
      <div className="flex items-center my-6">
        <Image
          src={companyLogo}
          alt={company}
          width={40}
          height={40}
          priority
        />
        <h3 className="text-3xl ml-2">{company}</h3>
      </div>
      <div>
        <FieldValue title="Domain" value={domain.join(", ")} />
        <FieldValue
          title="Techstack"
          value={techstack.map((stack) => (
            <Tag key={stack} name={stack} id={stack} onClick={console.log} />
          ))}
        />
        <FieldValue title="Position" value={position} />
        <FieldValue title="Role" value={role} />
        <FieldValue title="Description" value={description} />
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ projectProps }) => {
  return (
    <div className="projects">
      <h1 className="text-3xl mb-5">Projects</h1>
      <div className="flex justify-center">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-5 px-5">
          {projectProps.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
