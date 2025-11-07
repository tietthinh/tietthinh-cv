"use client";

import type { ProjectsProps, Project } from "@/types";
import Image from "next/image";
import { buildDurationText, formatDate, getDuration } from "../helper";
import { Tag } from "../Tag/Tag";
import { ReactNode, useState } from "react";
import { Section } from "../Section/Section";
import {
  projectByCompanyTimeline,
  sortByEndTime,
  sortByStartTime,
} from "./Project.helper";
import { Bracket } from "./Bracket";
import { ArrowLongDownIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";

const FieldValue: React.FC<{ title: string; value: ReactNode }> = ({
  title,
  value,
}) => {
  return (
    <p className="py-1.5">
      <span className="font-bold underline">{title}:</span>
      <span className="ml-2 font-medium">{value}</span>
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
    <div className="mb-5 xl:h-95 max-w-200 min-h-90 box-border">
      <div className="border border-white rounded-lg p-3 xl:h-95">
        <div>
          <h2 className="text-4xl">{name}</h2>
        </div>
        <div className="my-2">
          {start} &nbsp;to&nbsp; {end} &nbsp;({durationText})
        </div>
        <div className="flex items-center my-6 xl:hidden">
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
              <Tag
                key={stack}
                name={stack}
                id={stack}
                autoColour
                onClick={console.log}
              />
            ))}
          />
          <FieldValue title="Position" value={position} />
          <FieldValue title="Role" value={role} />
          <FieldValue title="Description" value={description} />
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ projectProps }) => {
  const [sortMode, setSortMode] = useState<"asc" | "desc">("desc");

  const sortMethod = sortMode === "asc" ? sortByStartTime : sortByEndTime;

  const toggleSortMode = () => {
    setSortMode((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const data = projectProps.sort(sortMethod);
  const companyMap = projectByCompanyTimeline(data);

  return (
    <Section title="Projects" titleCaption="My working history" collapsible>
      <button
        className="mb-10 p-2 border-white border-2 rounded-2xl cursor-pointer"
        onClick={toggleSortMode}
      >
        Sort{" "}
        {sortMode === "asc" ? (
          <ArrowLongUpIcon className="inline-block" width={24} height={24} />
        ) : (
          <ArrowLongDownIcon className="inline-block" width={24} height={24} />
        )}
      </button>
      <div className="justify-center flex">
        <div className="timeline border-l-10 rounded-t-lg mb-5 xl:border-l-yellow-300 mr-10 flex-col hidden xl:flex">
          {companyMap.map((company, idx) => (
            <div
              key={company.name}
              style={{
                flexBasis: `${400 * company.span - 20}px`,
              }}
              className={`flex items-center justify-between ${
                idx > 0 ? "mt-5" : ""
              }`}
            >
              <div className="flex items-center">
                <Image
                  className="ml-10 border-white border"
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={80}
                  priority
                />
                <div className="ml-5">
                  <h3 className="text-3xl">{company.name}</h3>
                  <h4 className="">
                    {formatDate(company.timeStart)} -{" "}
                    {formatDate(company.timeEnd)}
                    <br />(
                    {buildDurationText(
                      getDuration(company.timeStart, company.timeEnd)
                    )}
                    )
                  </h4>
                </div>
              </div>
              <div className="flex items-end h-full">
                <Bracket />
              </div>
            </div>
          ))}
        </div>
        <div>
          {data.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};
