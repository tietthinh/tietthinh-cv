import { BasicInfoProps } from "@/types";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  AcademicCapIcon,
  AtSymbolIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const BasicInfo: React.FC<BasicInfoProps> = ({
  avatarUrl,
  dob,
  email,
  name,
  address,
  education,
}) => {
  return (
    <div className="flex">
      {/* <Image
        src={avatarUrl}
        alt="My avatar"
        width={250}
        height={250}
        priority
      /> */}
      <div className="flex flex-col justify-between p-8">
        <div className="flex">
          <Bars3Icon width={24} />
          <h3 className="text-white text-3xl ml-2 font-bold">{name}</h3>
        </div>
        <div className="flex">
          <CalendarDaysIcon width={24} />
          <h3 className="text-white text-3xl ml-2 font-bold">{dob}</h3>
        </div>
        <div className="flex">
          <HomeIcon width={24} />
          <h3 className="text-white text-3xl ml-2 font-bold">{address}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-between p-8">
        <div className="flex">
          <AcademicCapIcon width={24} />
          <h3 className="text-white text-3xl ml-2 font-bold">{education}</h3>
        </div>
        <div className="flex">
          <AtSymbolIcon width={24} />
          <h3 className="text-white text-3xl ml-2 font-bold">{email}</h3>
        </div>
        github
      </div>
    </div>
  );
};
