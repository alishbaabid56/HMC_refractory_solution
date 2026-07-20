import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Castables from "@/components/Castables";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products/>
      <Castables/>
    </main>
  );
}
