import Navbar from "../components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero from "../components/home/Hero";
import Popular from "@/components/home/Popular";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Footer/>
    </div>
  );
}
