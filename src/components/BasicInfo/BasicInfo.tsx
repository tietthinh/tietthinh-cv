import { BasicInfoProps } from "@/types";
import { ArrowTurnLeftUpIcon, HomeIcon } from "@heroicons/react/24/solid";
import {
  AcademicCapIcon,
  AtSymbolIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { buildDurationText, getDuration } from "../helper";

export const BasicInfo: React.FC<BasicInfoProps> = ({
  avatarUrl,
  dob,
  email,
  name,
  address,
  education,
  github,
}) => {
  const { years } = getDuration("2021-6-3", null);

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <Image
            src={avatarUrl}
            alt="My avatar"
            width={250}
            height={250}
            priority
          />
          <div>
            <ArrowTurnLeftUpIcon className="inline mb-3" width={24} />
            <span className="pt-3 inline-block">
              This is me ({`${years} ${years > 1 ? "years" : "year"} ago`})
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8">
          <div className="flex">
            <Bars3Icon width={36} />
            <h3 className="text-white text-3xl ml-2 font-bold">{name}</h3>
          </div>
          <div className="flex">
            <CalendarDaysIcon width={36} />
            <h3 className="text-white text-3xl ml-2 font-bold">{dob}</h3>
          </div>
          <div className="flex">
            <HomeIcon width={36} />
            <h3 className="text-white text-3xl ml-2 font-bold">{address}</h3>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8">
          <div className="flex">
            <AcademicCapIcon width={36} />
            <h3 className="text-white text-3xl ml-2 font-bold">{education}</h3>
          </div>
          <div className="flex">
            <AtSymbolIcon width={36} />
            <h3 className="text-white text-3xl ml-2 font-bold">{email}</h3>
          </div>
          <div className="flex">
            <Image
              src="/github-logo.png"
              alt="Github"
              width={36}
              height={36}
              priority
            />
            <h3 className="text-white text-3xl ml-2 font-bold">
              <a href={github}>GitHub</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
