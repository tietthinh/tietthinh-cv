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
  basicInfo: { avatarUrl, dob, email, name, address, education, github },
}) => {
  const { years } = getDuration("2021-6-3", null);
  const dobYear = new Date(dob).getFullYear();

  return (
    <section>
      <div className="flex flex-col  md:flex-row">
        <div className="flex flex-col items-center">
          <Image
            src={avatarUrl}
            alt="My avatar"
            width={250}
            height={250}
          />
          <div>
            <ArrowTurnLeftUpIcon className="inline mb-3" width={24} />
            <span className="pt-3 inline-block">
              This is me ({`${years} ${years > 1 ? "years" : "year"} ago`})
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ml-12 lg:ml-0">
          <div className="flex flex-col justify-between lg:p-8">
            <div className="flex mb-2 lg:my-0">
              <Bars3Icon className="h-7 w-7 lg:h-9 lg:w-9" />
              <h3 className="text-xl lg:text-3xl ml-2 font-bold">{name}</h3>
            </div>
            <div className="flex mb-2 lg:my-0">
              <CalendarDaysIcon className="h-7 w-7 lg:h-9 lg:w-9" />
              <h3 className="text-xl lg:text-3xl ml-2 font-bold">{dobYear}</h3>
            </div>
            <div className="flex mb-2 lg:my-0">
              <HomeIcon className="h-7 w-7 lg:h-9 lg:w-9" />
              <h3 className=" text-xl lg:text-3xl ml-2 font-bold">{address}</h3>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:p-8">
            <div className="flex mb-2 lg:my-0">
              <AcademicCapIcon className="h-7 w-7 lg:h-9 lg:w-9" />
              <h3 className=" text-xl lg:text-3xl ml-2 font-bold">
                {education}
              </h3>
            </div>
            <div className="flex mb-2 lg:my-0">
              <AtSymbolIcon className="h-7 w-7 lg:h-9 lg:w-9" />
              <h3 className=" text-xl lg:text-3xl ml-2 font-bold underline">
                <a href={`mailto:${email}`}>{email}</a>
              </h3>
            </div>
            <div className="flex mb-2 lg:my-0 items-center">
              <Image
                src="/github-logo.png"
                alt="Github"
                width={36}
                height={36}
                className="h-7 w-7 lg:h-9 lg:w-9"
                priority
              />
              <h3 className=" text-xl lg:text-3xl ml-2 font-bold">
                <a target="_blank" href={github}>
                  GitHub
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
