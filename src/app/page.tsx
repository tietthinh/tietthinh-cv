import { BasicInfo } from "@/components/BasicInfo/BasicInfo";
import { Footer } from "@/components/Footer/Footer";
import { Projects } from "@/components/Project/Project";
import data from "../../public/data.json";
import { Hobbies } from "@/components/Hobbies/Hobbies";
import { Skills } from "@/components/Skills/Skills";
import { list } from "@vercel/blob";
import { Hobby } from "@/types";

const Divider: React.FC = () => (
  <div className="divider border border-b my-8 w-full" />
);

const getHobbiesWithImg = async (): Promise<Hobby[]> => {
  const imgs = await list({ prefix: "hobbies" });
  return data.hobbies.map((e) => ({
    ...e,
    images: imgs.blobs
      .filter((a) => a.pathname.endsWith(".jpg"))
      .filter((a) => a.pathname.includes(`hobbies/${e.id}/`))
      .map((item) => item.downloadUrl),
  }));
};

export default async function Home() {
  const hobbies = await getHobbiesWithImg();

  return (
    <div className="flex min-h-screen items-center font-open bg-gray-100 dark:bg-black">
      <main className="flex min-h-screen bg-gray-100 dark:bg-black sm:items-start">
        <div className="w-full p-4 md:p-12">
          <BasicInfo basicInfo={data.basicInfo} />
          <Divider />
          <Skills skills={data.skills} />
          <Divider />
          <Projects projectProps={data.projects} />
          <Divider />
          <Hobbies hobbies={hobbies} />
          <Divider />
          <Footer />
        </div>
      </main>
    </div>
  );
}
