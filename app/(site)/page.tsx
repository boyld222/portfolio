import About from "../components/AboutSection";
import Hero from "../components/HeroSection";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Hero />
      <About />
    </main>
  );
}
