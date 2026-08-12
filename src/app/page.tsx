import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";

export default function Home() {
  return (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Services />
  </main>
  );
}
