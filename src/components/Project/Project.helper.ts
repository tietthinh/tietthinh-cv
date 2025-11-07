import { Project } from "@/types";

export const sortByStartTime = (prev: Project, next: Project) => {
  const aDate = new Date(prev.timeStart).getTime();
  const bDate = new Date(next.timeStart).getTime();
  return aDate - bDate;
};

export const sortByEndTime = (prev: Project, next: Project) => {
  const aDate = (prev.timeEnd ? new Date(prev.timeEnd) : new Date()).getTime();
  const bDate = (next.timeEnd ? new Date(next.timeEnd) : new Date()).getTime();
  return bDate - aDate;
};

export const projectByCompanyTimeline = (data: Project[]) => {
  return data.reduce((result, project) => {
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
};
