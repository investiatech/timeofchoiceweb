import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Gameplay  from "./components/gameplay";
import Target from "./components/target";
import About from "./components/about";
import Features from "./components/features";
import Price from "./components/price";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Contact from "./components/contact";
import FAQ from "./components/faq";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Gameplay />
      <Target />
      <Testimonials />
      <Price />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
