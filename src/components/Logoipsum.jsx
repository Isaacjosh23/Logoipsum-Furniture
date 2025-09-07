import AboutMe from "./AboutMe.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Why from "./Why.jsx";

const Logoipsum = () => {
  return (
    <>
      <div className="bg-image">
        <Header />

        <Hero />
      </div>

      <AboutMe />

      <Why />

      <Services />

      <Footer />
    </>
  );
};

export default Logoipsum;
