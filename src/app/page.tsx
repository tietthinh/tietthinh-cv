import { BasicInfo } from "@/components/BasicInfo/BasicInfo";
import { Footer } from "@/components/Footer/Footer";
import { Projects } from "@/components/Project/Project";
import data from "../../public/data.json";
import { Hobbies } from "@/components/Hobbies/Hobbies";
import { Skills } from "@/components/Skills/Skills";
import { StarDivider } from "@/components/Decor/StarMark";
import { Nav } from "@/components/Nav/Nav";
import { list } from "@vercel/blob";
import { Hobby } from "@/types";

const getHobbiesWithImg = async (): Promise<Hobby[]> => {
  try {
    const imgs = await list({ prefix: "hobbies" });
    return data.hobbies.map((e) => ({
      ...e,
      images: imgs.blobs
        .filter((a) => a.pathname.endsWith(".jpg"))
        .filter((a) => a.pathname.includes(`hobbies/${e.id}/`))
        .map((item) => item.downloadUrl),
    }));
  } catch {
    // Blob store unavailable (e.g. missing token) — render hobbies without
    // their galleries rather than failing the whole page.
    return data.hobbies.map((e) => ({ ...e, images: [] }));
  }
};

export default async function Home() {
  const hobbies = await getHobbiesWithImg();

  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-hidden font-open text-cream"
    >
      <Nav github={data.basicInfo.github} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-12 pt-24 sm:px-8 md:pb-20">
        <div className="animate-rise">
          <BasicInfo basicInfo={data.basicInfo} />
        </div>

        <StarDivider />
        <Skills skills={data.skills} />

        <StarDivider />
        <Projects projectProps={data.projects} />

        <StarDivider />
        <Hobbies hobbies={hobbies} />

        <StarDivider />
        <Footer />
      </main>
    </div>
  );
}
