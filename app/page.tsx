import { Hero } from "./sections/hero";
import { Spacer } from "./components/spacer";
import { Project } from "./sections/project";
import { Skill } from "./sections/skill";
import { About } from "./sections/about";
import Certifications from "./sections/certifications";

export default function Home() {
  return (
    <div className="col-span-11">
      <Hero />
      <div className='pt-[150px]'></div>
      <Project />
      <Spacer />
      <Skill />
      <Spacer />
      <Certifications />
      <Spacer />
      <About />
      <Spacer />
    </div>
  );
}
