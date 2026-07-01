import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Contact />
      <ScrollTop />
      <Footer />
    </>
  );
}