import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="pt-16">
      <Header variant="dark" />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}