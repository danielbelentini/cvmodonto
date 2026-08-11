import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Location from "@/components/Location";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Services />
        <Team />
        <Testimonials />
        <Partners />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
