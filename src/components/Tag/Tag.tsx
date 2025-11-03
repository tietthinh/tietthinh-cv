import { TagProps } from "@/types";

export const Tag: React.FC<TagProps> = ({ id, name }) => {
  return (
    <div className="inline-flex bg-gray-100 text-black p-1.5 mt-1.5 mr-1.5 rounded-full">
      {name}
    </div>
  );
};
