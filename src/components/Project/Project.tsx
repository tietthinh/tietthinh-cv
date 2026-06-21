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
import { StarMark } from "../Decor/StarMark";

const FieldValue: React.FC<{ title: string; value: ReactNode }> = ({
  title,
  value,
}) => {
  return (
    <div className="grid gap-1 py-1.5 sm:grid-cols-[6.5rem_1fr] sm:gap-2">
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-crimson sm:pt-0.5">
        {title}
      </span>
      <span className="text-sm leading-relaxed text-ash">{value}</span>
    </div>
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
  const ongoing = timeEnd === null;

  return (
    <div className="project-card mb-5 box-border min-h-90 max-w-200 break-inside-avoid xl:h-95">
      <div className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 p-5 transition-all duration-300 hover:border-crimson/60 hover:bg-surface hover:shadow-[0_24px_50px_-30px_rgba(200,16,46,0.65)]">
        <span className="absolute inset-y-0 left-0 w-1 bg-crimson/40 transition-colors duration-300 group-hover:bg-crimson" />

        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-bold leading-tight text-cream sm:text-3xl">
            {name}
          </h3>
          {ongoing && (
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-crimson/40 bg-crimson/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-crimson">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson" />
              Current
            </span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-ash">
          <span className="font-medium text-cream">{start}</span>
          <span className="text-crimson">→</span>
          <span className="font-medium text-cream">{end}</span>
          <span className="text-ash-dim">·</span>
          <span className="italic">{durationText}</span>
        </div>

        {/* Company badge — shown inline on smaller screens (timeline hidden) */}
        <div className="my-4 flex items-center gap-3 xl:hidden">
          <Image
            src={companyLogo}
            alt={company}
            width={36}
            height={36}
            className="rounded-md border border-line bg-ink"
            priority
          />
          <h4 className="font-display text-lg text-cream">{company}</h4>
        </div>

        <div className="mt-3 space-y-0.5">
          <FieldValue title="Domain" value={domain.join(", ")} />
          <FieldValue
            title="Techstack"
            value={
              <span className="flex flex-wrap">
                {techstack.map((stack) => (
                  <Tag key={stack} name={stack} id={stack} />
                ))}
              </span>
            }
          />
          <FieldValue title="Position" value={position} />
          <FieldValue title="Role" value={role} />
          <FieldValue title="Summary" value={description} />
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

  const data = [...projectProps].sort(sortMethod);
  const companyMap = projectByCompanyTimeline(data);

  return (
    <Section
      id="projects"
      title="Projects"
      titleCaption="A timeline of my work history"
      collapsible
    >
      <button
        className="group mb-10 inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-crimson hover:bg-crimson print:hidden"
        onClick={toggleSortMode}
      >
        Sort by date
        <span className="text-crimson transition-colors group-hover:text-cream">
          {sortMode === "asc" ? (
            <ArrowLongUpIcon className="inline-block h-4 w-4" />
          ) : (
            <ArrowLongDownIcon className="inline-block h-4 w-4" />
          )}
        </span>
      </button>

      <div className="flex justify-center">
        {/* Company timeline — desktop only */}
        <div className="mb-5 mr-10 hidden flex-col rounded-t-lg border-l-2 border-l-crimson/60 xl:flex">
          {companyMap.map((company, idx) => (
            <div
              key={company.name}
              style={{ flexBasis: `${400 * company.span - 20}px` }}
              className={`flex items-center justify-between ${
                idx > 0 ? "mt-5" : ""
              }`}
            >
              <div className="relative flex items-center">
                {/* Star node sitting on the crimson rail */}
                <StarMark className="absolute -left-[1.45rem] h-4 w-4 -translate-x-1/2 text-crimson drop-shadow-[0_0_6px_rgba(200,16,46,0.7)]" />
                <Image
                  className="ml-8 rounded-lg border border-crimson/40 bg-ink"
                  src={company.logo}
                  alt={company.name}
                  width={72}
                  height={72}
                  priority
                />
                <div className="ml-4">
                  <h3 className="font-display text-2xl text-cream">
                    {company.name}
                  </h3>
                  <h4 className="text-sm text-ash">
                    {formatDate(company.timeStart)} —{" "}
                    {formatDate(company.timeEnd)}
                    <br />
                    <span className="italic text-ash-dim">
                      {buildDurationText(
                        getDuration(company.timeStart, company.timeEnd)
                      )}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="flex h-full items-end">
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
