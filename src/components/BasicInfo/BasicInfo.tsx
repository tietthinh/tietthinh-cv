import { BasicInfoProps } from "@/types";
import { ArrowTurnLeftUpIcon, HomeIcon } from "@heroicons/react/24/solid";
import {
  AcademicCapIcon,
  AtSymbolIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { getDuration } from "../helper";

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
  const dobYear = new Date(dob).getFullYear();

  return (
    <div>
      <div className="flex flex-col md:flex-row">
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
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-between md:p-8">
            <div className="flex mb-2 md:my-0">
              <Bars3Icon className="h-7 w-7 md:h-9 md:w-9" />
              <h3 className="text-white text-xl md:text-3xl ml-2 font-bold">
                {name}
              </h3>
            </div>
            <div className="flex mb-2 md:my-0">
              <CalendarDaysIcon className="h-7 w-7 md:h-9 md:w-9" />
              <h3 className="text-white text-xl md:text-3xl ml-2 font-bold">
                {dobYear}
              </h3>
            </div>
            <div className="flex mb-2 md:my-0">
              <HomeIcon className="h-7 w-7 md:h-9 md:w-9" />
              <h3 className="text-white text-xl md:text-3xl ml-2 font-bold">
                {address}
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-between md:p-8">
            <div className="flex mb-2 md:my-0">
              <AcademicCapIcon className="h-7 w-7 md:h-9 md:w-9" />
              <h3 className="text-white text-xl md:text-3xl ml-2 font-bold">
                {education}
              </h3>
            </div>
            <div className="flex mb-2 md:my-0">
              <AtSymbolIcon className="h-7 w-7 md:h-9 md:w-9" />
              <h3 className="text-white text-xl md:text-3xl ml-2 font-bold">
                {email}
              </h3>
            </div>
            <div className="flex mb-2 md:my-0 items-center">
              <Image
                src="/github-logo.png"
                alt="Github"
                width={36}
                height={36}
                priority
              />
              <h3 className="text-white text-xl md:text-3xl ml-2 font-bold">
                <a target="_blank" href={github}>
                  GitHub
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
