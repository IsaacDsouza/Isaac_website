import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Index() {
  return (
    <main className="mt-24 flex flex-col items-center px-4 sm:mt-0">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
