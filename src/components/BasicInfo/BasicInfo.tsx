import { BasicInfoProps } from "@/types";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  AcademicCapIcon,
  AtSymbolIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { getDuration } from "../helper";
import { StarMark } from "../Decor/StarMark";
import { ReactNode } from "react";

const InfoRow: React.FC<{
  icon: ReactNode;
  label: string;
  value: ReactNode;
}> = ({ icon, label, value }) => (
  <div className="group flex items-center gap-4 rounded-xl border border-line bg-surface/40 px-4 py-3 transition-colors duration-300 hover:border-crimson/60 hover:bg-surface">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-crimson/12 text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-cream">
      {icon}
    </span>
    <div className="min-w-0">
      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-ash-dim">
        {label}
      </p>
      <p className="truncate text-base font-semibold text-cream sm:text-lg">
        {value}
      </p>
    </div>
  </div>
);

export const BasicInfo: React.FC<BasicInfoProps> = ({
  basicInfo: { avatarUrl, dob, email, name, address, education, github },
}) => {
  const { years } = getDuration("2021-6-3", null);
  const dobYear = new Date(dob).getFullYear();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-ink-2/80 to-surface/30 p-6 shadow-[0_30px_80px_-40px_rgba(200,16,46,0.5)] sm:p-10">
      {/* Faint oversized star watermark in the corner */}
      <StarMark className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-crimson/[0.06]" />

      <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Portrait */}
        <div className="flex shrink-0 flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-crimson via-crimson-deep to-transparent opacity-80 blur-[2px]" />
            <div className="relative overflow-hidden rounded-2xl border border-crimson/40 bg-ink">
              <Image
                src={avatarUrl}
                alt={`Portrait of ${name}`}
                width={230}
                height={230}
                className="h-[230px] w-[230px] object-cover"
                priority
              />
            </div>
            <StarMark className="absolute -bottom-3 -right-3 h-8 w-8 text-crimson drop-shadow-[0_0_8px_rgba(200,16,46,0.8)]" />
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm italic text-ash">
            <StarMark className="h-3 w-3 text-crimson" />
            {`This is me, ${years} ${years > 1 ? "years" : "year"} ago`}
          </p>
        </div>

        {/* Identity */}
        <div className="w-full flex-1">
          <p className="mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.32em] text-crimson lg:justify-start">
            <span className="h-px w-8 bg-crimson/60" />
            Curriculum Vitae
          </p>
          <h1 className="text-center font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-left">
            {name}
          </h1>
          <p className="mt-3 text-center text-base text-ash sm:text-lg lg:text-left">
            Senior Software Engineer · Frontend &amp; Full-stack
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <InfoRow
              icon={<CalendarDaysIcon className="h-5 w-5" />}
              label="Born"
              value={dobYear}
            />
            <InfoRow
              icon={<HomeIcon className="h-5 w-5" />}
              label="Based in"
              value={address}
            />
            <InfoRow
              icon={<AcademicCapIcon className="h-5 w-5" />}
              label="Education"
              value={education}
            />
            <InfoRow
              icon={<AtSymbolIcon className="h-5 w-5" />}
              label="Email"
              value={
                <a
                  href={`mailto:${email}`}
                  className="underline-offset-4 transition-colors hover:text-crimson hover:underline"
                >
                  {email}
                </a>
              }
            />
          </div>

          <div className="mt-5 flex justify-center lg:justify-start print:hidden">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={github}
              className="group inline-flex items-center gap-3 rounded-xl border border-crimson/40 bg-crimson/10 px-5 py-3 font-semibold text-cream transition-all duration-300 hover:border-crimson hover:bg-crimson hover:shadow-[0_10px_30px_-10px_rgba(200,16,46,0.8)]"
            >
              <Image
                src="/github-logo.png"
                alt="GitHub"
                width={24}
                height={24}
                className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6"
                priority
              />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
