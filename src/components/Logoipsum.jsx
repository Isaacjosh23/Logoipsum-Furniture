import AboutMe from "./AboutMe.jsx";
import Header from "./Header";
import Hero from "./Hero.jsx";

const Logoipsum = () => {
  return (
    <>
      <div className="bg-image h-screen">
        <Header />

        <Hero />
      </div>

      <AboutMe />
    </>
  );
};

export default Logoipsum;
