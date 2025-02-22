import { Hero } from "./sections/hero";
import { Spacer } from "./components/spacer";
import { Project } from "./sections/project";
import { Skill } from "./sections/skill";
import { About } from "./sections/about";
import SideNav from "./components/sideNav";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Spacer />
      <Hero />
      <Spacer />
      <Project />
      <Spacer />
      <Skill />
      <Spacer />
      <About />
      <Spacer />
    </div>
  );
}
