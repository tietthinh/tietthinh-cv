import { MainProps } from "@/types";
import { Tag } from "../Tag/Tag";
import { BasicInfo } from "../BasicInfo/BasicInfo";
import { Projects } from "../Project/Project";

export const Main: React.FC<MainProps> = ({ tags, basicInfo, projects }) => {
  return (
    <div className="w-full">
      <BasicInfo {...basicInfo} />
      <div className="divider border border-b my-4 w-full" />
      {/* <div className="tags pt-10 px-5 max-w-[250px]">
        <h2 className="text-xl">Skills</h2>
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} id={tag.id} />
        ))}
      </div> */}
      <Projects projectProps={projects} />
    </div>
  );
};
