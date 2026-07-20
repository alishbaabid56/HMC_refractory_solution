import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Castables from "@/components/Castables";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import CTA from "@/components/CTA";
import WorkShowcase from "@/components/WorkShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Castables/>
      <Products/>
      <WorkShowcase/>
      <Services/>
      <Industries/>
      <Contact/>
      <Map/>
      <CTA/>
    </main>
  );
}
