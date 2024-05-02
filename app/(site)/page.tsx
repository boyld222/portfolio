import About from "../components/AboutSection";
import Hero from "../components/HeroSection";
import Services from "../components/ServicesSection";
import Works from "../components/WorkSection";

export default function Home() {
  return (
    <main className="h-screen w-fit">
      <Hero />
      <About />
      <Services />
      <Works />
    </main>
  );
}
