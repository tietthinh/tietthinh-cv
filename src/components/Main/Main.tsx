import { MainProps } from "@/types";
import { BasicInfo } from "../BasicInfo/BasicInfo";
import { Projects } from "../Project/Project";

export const Main: React.FC<MainProps> = ({ basicInfo, projects }) => {
  return (
    <div className="w-full p-12">
      <BasicInfo {...basicInfo} />
      <div className="divider border border-b my-4 w-full" />
      <Projects projectProps={projects} />
    </div>
  );
};
