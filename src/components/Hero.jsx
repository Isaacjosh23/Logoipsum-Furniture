import Section from "./reusables/Section.jsx";
import Container from "./reusables/Container.jsx";
import Button from "./reusables/Button.jsx";

const Hero = () => {
  return (
    <Section className="py-20">
      <Container className="flex flex-col items-center gap-12 md:items-start">
        <div className="flex flex-col gap-6 text-center md:text-start md:w-[44rem] lg:w-[60rem]">
          <h1 className="text-4xl font-bold leading-[3.2rem] md:text-5xl md:leading-[3.8rem] lg:text-6xl lg:leading-[4.8rem]">
            Transform Your Home with Unique Decor and Reliable Brands.
          </h1>

          <p className="text-xl lg:text-2xl leading-[2.2rem] md:text-[1.3rem] lg:leading-[2.4rem]">
            Designing stunning home decor solutions that not only elevate your
            living space but also enhance your overall comfort and well-being.
            Our innovative designs blend functionality with aesthetics, creating
            an inviting atmosphere that reflects your personal style and
            transforms your home into a sanctuary of relaxation and creativity.
          </p>
        </div>

        <Button className="bg-white text-black font-bold text-[1.2rem] py-4 px-8 rounded-full capitalize cursor-pointer lg:text-[1.3rem] hover:translate-y-[-0.6rem] active:translate-y-0 smooth-trans">
          shop now
        </Button>
      </Container>
    </Section>
  );
};

export default Hero;
