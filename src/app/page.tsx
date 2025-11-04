import data from "../../public/data.json";
import { Main } from "@/components/Main/Main";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center font-open bg-black">
      <main className="flex min-h-screen bg-black sm:items-start">
        <Main
          basicInfo={data.basicInfo}
          tags={data.tags}
          projects={data.projects}
        />
      </main>
    </div>
  );
}
