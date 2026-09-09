import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Services from "../components/Services/Services.jsx";
import Norms from "../components/Norms/Norms.jsx";
import Processes from "../components/Processes/Processes.jsx";
import Quote from "../components/Quote/Quote.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Norms />
        <Processes />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
