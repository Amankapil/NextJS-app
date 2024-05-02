import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Home2hero from "@/components/home2/Home2hero";
import Vision2 from "@/components/home2/Vision2";
import About2 from "@/components/home2/About2";
import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Techno from "@/components/homepage/Techno";
import Techstack from "@/components/homepage/Techstack";
import Testimonials from "@/components/homepage/Testimonials";
import Vision from "@/components/homepage/Vision";
// import Clients from "@/components/homepage/Clients";
import Image from "next/image";
import Service2 from "@/components/home2/service2";
import Testimonials2 from "@/components/home2/Testimonials2";
import Trail from "@/components/home2/Trial";
import ScrollingAnimation from "@/components/homepage/Animation";

export default function Home() {
  return (
    <>
      <Home2hero />
      <Trail />
      <About2 />
      <Service2 />

      <section className="relative">
        <Testimonials />
        <Techstack />
      </section>
    </>
  );
}
