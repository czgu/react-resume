import { A4Page } from "./A4Page";
import { Header } from "./Header";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Projects } from "./Projects";

export const Resume = () => {
  return (
    <A4Page>
      <Header />
      <div className="flex-1 flex pb-[10px]">
        <div className="flex-[3] border-r-[3px] border-r-[#bbb] p-[10px] pl-0 flex flex-col justify-between">
          <Experience />
          <Projects />
        </div>
        <div className="flex-1 p-[10px] pr-0 flex flex-col justify-between">
          <Skills />
          <Education />
        </div>
      </div>
    </A4Page>
  );
};
