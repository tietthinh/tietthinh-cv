"use client";

import "./Project.css";
import type { ProjectsProps, Project } from "@/types";
import Image from "next/image";
import { buildDurationText, formatDate, getDuration } from "../helper";
import { Tag } from "../Tag/Tag";
import { PropsWithChildren, ReactNode } from "react";
import { Section } from "../Section/Section";

const Bracket: React.FC<{ span: number }> = ({ span = 1 }) => {
  return (
    <>
      <span
        style={{ transform: `scaleY(${span > 1 ? 1.04 * span : 1})` }}
        className="transform text-[435px] leading-[285px] w-50 h-95 text-right"
      >
        {"{"}
      </span>
    </>
  );
};

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="font-bold underline">{children}:</span>;
};
const Value: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="ml-2 font-medium">{children}</span>;
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
  // border-l-8 border-l-yellow-500 dark:border-l-yellow-300
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
  const data = projectProps.sort((p, n) => {
    const aDate = new Date(p.timeStart).getTime();
    const bDate = new Date(n.timeStart).getTime();
    return aDate - bDate;
  });

  const companyMap = data.reduce((result, project) => {
    const findCompanyIndex = result.findIndex(
      (e) => e.name === project.company
    );
    if (findCompanyIndex > -1) {
      result[findCompanyIndex].span += 1;

      const prevTimeStart = new Date(result[findCompanyIndex].timeStart);
      const nextTimeStart = new Date(project.timeStart);
      let prevTimeEnd = new Date();
      let nextTimeEnd = prevTimeEnd;
      if (result[findCompanyIndex].timeEnd && project.timeEnd) {
        prevTimeEnd = new Date(result[findCompanyIndex].timeEnd);
        nextTimeEnd = new Date(project.timeEnd);
      }

      if (prevTimeStart.getTime() > nextTimeStart.getTime()) {
        result[findCompanyIndex].timeStart = project.timeStart;
      }

      if (nextTimeEnd.getTime() > prevTimeEnd.getTime()) {
        result[findCompanyIndex].timeEnd = project.timeEnd;
      }
    } else {
      result.push({
        name: project.company,
        logo: project.companyLogo,
        timeStart: project.timeStart,
        timeEnd: project.timeEnd,
        span: 1,
      });
    }

    return result;
  }, [] as { name: string; logo: string; span: number; timeStart: string; timeEnd: string | null }[]);

  return (
    <Section title="Projects" titleCaption="My working history" collapsible>
      <div className="justify-center flex">
        <div className="timeline border-l-10 rounded-t-lg mb-5 xl:border-l-yellow-300 mr-10 flex-col hidden xl:flex">
          {companyMap.map((company) => (
            <div
              key={company.name}
              className={`flex items-center justify-between basis-${
                400 * company.span
              }`}
            >
              <div className="flex items-center">
                <Image
                  className="ml-10"
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
                    {formatDate(company.timeEnd)} (
                    {buildDurationText(
                      getDuration(company.timeStart, company.timeEnd)
                    )}
                    )
                  </h4>
                </div>
              </div>
              <div className="flex h-100">
                <Bracket span={company.span} />
              </div>
            </div>
          ))}
        </div>
        {/* <ul className="grid xs:grid-cols-1 xl:grid-cols-2 gap-5"> */}
        <div>
          {data.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
        {/* </ul> */}
      </div>
    </Section>
  );
};
