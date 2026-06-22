import Image from "next/image";
import type { BasicInfo, Project, Skill } from "@/types";
import { formatDate } from "../helper";

interface PrintCVProps {
  basicInfo: BasicInfo;
  skills: Skill[];
  projects: Project[];
  hobbies: { name: string }[];
}

interface CompanyGroup {
  company: string;
  start: string;
  end: string | null;
  items: Project[];
}

/** Group projects by company, preserving the (date-sorted) order, and
 *  derive each company's overall date span. */
const groupByCompany = (projects: Project[]): CompanyGroup[] => {
  const groups: CompanyGroup[] = [];

  for (const project of projects) {
    let group = groups.find((g) => g.company === project.company);
    if (!group) {
      group = {
        company: project.company,
        start: project.timeStart,
        end: project.timeEnd,
        items: [],
      };
      groups.push(group);
    }
    group.items.push(project);

    if (new Date(project.timeStart) < new Date(group.start)) {
      group.start = project.timeStart;
    }
    // A null end means "present" — it always wins as the latest end date.
    if (group.end !== null) {
      if (project.timeEnd === null) {
        group.end = null;
      } else if (new Date(project.timeEnd) > new Date(group.end)) {
        group.end = project.timeEnd;
      }
    }
  }

  return groups;
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="mb-2 mt-5 border-b-2 border-crimson/80 pb-1 font-display text-[15px] font-bold uppercase tracking-[0.14em] text-crimson">
    {children}
  </h2>
);

/**
 * A compact, ink-friendly CV shown ONLY when printing. It keeps just the
 * avatar and condenses every section to fit one or two A4 pages, laid out
 * like a formal document with even page margins.
 */
export const PrintCV: React.FC<PrintCVProps> = ({
  basicInfo,
  skills,
  projects,
  hobbies,
}) => {
  const { name, email, address, education, dob, github, avatarUrl } = basicInfo;
  const dobYear = new Date(dob).getFullYear();
  const githubText = github.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const sorted = [...projects].sort((a, b) => {
    const aEnd = (a.timeEnd ? new Date(a.timeEnd) : new Date()).getTime();
    const bEnd = (b.timeEnd ? new Date(b.timeEnd) : new Date()).getTime();
    return bEnd - aEnd;
  });
  const groups = groupByCompany(sorted);

  return (
    <div className="hidden text-neutral-800 print:block">
      {/* The page: full-width A4 with formal, even margins on every side */}
      <div className="mx-auto box-border w-[210mm] px-[18mm] py-[16mm] text-[12.5px] leading-[1.5]">
        {/* Header */}
        <header className="mb-1 flex items-center gap-5 border-b-2 border-crimson pb-4">
          <Image
            src={avatarUrl}
            alt={name}
            width={104}
            height={104}
            className="h-[100px] w-[100px] shrink-0 rounded-md border border-neutral-300 object-cover"
            priority
          />
          <div className="min-w-0">
            <h1 className="font-display text-[30px] font-bold leading-none text-neutral-900">
              {name}
            </h1>
            <p className="mt-1.5 text-[14px] font-semibold text-crimson">
              Senior Software Engineer · Frontend &amp; Full-stack
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-neutral-600">
              <span>{email}</span>
              <span className="text-neutral-300">|</span>
              <span>{address}</span>
              <span className="text-neutral-300">|</span>
              <span>Born {dobYear}</span>
              <span className="text-neutral-300">|</span>
              <span>{education}</span>
              <span className="text-neutral-300">|</span>
              <span>{githubText}</span>
            </div>
          </div>
        </header>

        {/* Skills */}
        <section className="break-inside-avoid">
          <SectionTitle>Skills</SectionTitle>
          <p className="text-[12.5px] text-neutral-700">
            {skills.map((s) => s.name).join("   ·   ")}
          </p>
        </section>

        {/* Experience */}
        <section>
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-4">
            {groups.map((group) => (
              <div key={group.company} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[14px] font-bold text-neutral-900">
                    {group.company}
                  </h3>
                  <span className="shrink-0 text-[11px] font-medium text-neutral-500">
                    {formatDate(group.start)} – {formatDate(group.end)}
                  </span>
                </div>
                <ul className="ml-4 mt-1.5 list-disc space-y-1.5 marker:text-crimson">
                  {group.items.map((project) => (
                    <li
                      key={project.name}
                      className="pl-1 text-[12px] text-neutral-700"
                    >
                      <span className="font-semibold text-neutral-900">
                        {project.name}
                      </span>
                      <span className="text-neutral-500">
                        {" "}
                        ({formatDate(project.timeStart)} –{" "}
                        {formatDate(project.timeEnd)})
                      </span>{" "}
                      — {project.position}
                      <span className="text-neutral-500">
                        {" "}
                        · {project.techstack.join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies */}
        <section className="break-inside-avoid">
          <SectionTitle>Hobbies</SectionTitle>
          <p className="text-[12.5px] text-neutral-700">
            {hobbies.map((h) => h.name).join("   ·   ")}
          </p>
        </section>
      </div>
    </div>
  );
};
