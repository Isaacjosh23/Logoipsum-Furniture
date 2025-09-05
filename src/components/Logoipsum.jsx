import AboutMe from "./AboutMe.jsx";
import Header from "./Header";
import Hero from "./Hero.jsx";
import Why from "./Why.jsx";

const Logoipsum = () => {
  return (
    <>
      <div className="bg-image h-screen">
        <Header />

        <Hero />
      </div>

      <AboutMe />

      <Why />
    </>
  );
};

export default Logoipsum;
