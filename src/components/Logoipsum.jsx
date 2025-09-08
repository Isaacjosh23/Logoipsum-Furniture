import { useRef } from "react";
import AboutMe from "./AboutMe.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Why from "./Why.jsx";

const Logoipsum = () => {
  const aboutRef = useRef(null);
  const whyUsRef = useRef(null);
  const servicesRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-image">
        <Header
          onAboutClick={() => scrollToSection(aboutRef)}
          onWhyUsClick={() => scrollToSection(whyUsRef)}
          onServicesClick={() => scrollToSection(servicesRef)}
          onFooterClick={() => scrollToSection(footerRef)}
        />

        <Hero />
      </div>

      <AboutMe ref={aboutRef} />

      <Why ref={whyUsRef} />

      <Services ref={servicesRef} />

      <Footer ref={footerRef} />
    </>
  );
};

export default Logoipsum;
