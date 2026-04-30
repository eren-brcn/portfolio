import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}