import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main>
      <NavBar />

      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Contact /></Reveal>

      <Footer />
    </main>
  );
}
