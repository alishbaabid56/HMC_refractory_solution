import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Castables from "@/components/Castables";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products/>
      <Castables/>
      <Services/>
      <Industries/>
      <Contact/>
    </main>
  );
}
