import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Techno from "@/components/homepage/Techno";
import Techstack from "@/components/homepage/Techstack";
import Testimonials from "@/components/homepage/Testimonials";
import Vision from "@/components/homepage/Vision";
// import Clients from "@/components/homepage/Clients";
import Image from "next/image";

export default function Home() {
  // const [showdata, setShowdat] = useState(false);

  return (
    <>
      {/* <Header /> */}
      <div className="max-xlpx-3">
        <Hero />
        <Vision />
        <About />
        <Services />
        <Techstack />
        {/* <Techno /> */}
        <Testimonials />
      </div>
      {/* <Clients /> */}
      {/* <Footer/> */}
    </>
  );
}
