import Curtain from "../components/Curtain/Curtain.jsx";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Services from "../components/Services/Services.jsx";
import Norms from "../components/Norms/Norms.jsx";
import Processes from "../components/Processes/Processes.jsx";
import Team from "../components/Team/Team.jsx";
import Quote from "../components/Quote/Quote.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Curtain />
      <Header />
      <main>
        <Hero />
        <Services />
        <Norms />
        <Processes />
        <Team />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
