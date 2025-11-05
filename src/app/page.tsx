import { BasicInfo } from "@/components/BasicInfo/BasicInfo";
import { Footer } from "@/components/Footer/Footer";
import { Projects } from "@/components/Project/Project";
import data from "../../public/data.json";
import { Hobbies } from "@/components/Hobbies/Hobbies";

const Divider: React.FC = () => (
  <div className="divider border border-b my-8 w-full" />
);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center font-open bg-gray-150 dark:bg-black">
      <main className="flex min-h-screen bg-gray-300 dark:bg-black sm:items-start">
        <div className="w-full p-4 md:p-12">
          <BasicInfo basicInfo={data.basicInfo} />
          <Divider />
          <Projects projectProps={data.projects} />
          <Divider />
          <Hobbies hobbies={data.hobbies} />
          <Divider />
          <Footer />
        </div>
      </main>
    </div>
  );
}
