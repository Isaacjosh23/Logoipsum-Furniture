import Container from "./reusables/Container";
import Section from "./reusables/Section";
import Tag from "./reusables/Tag";

const AboutMe = () => {
  return (
    <Section className="py-20">
      <Container className="flex flex-col gap-20 md:gap-0 lg:gap-14 md:grid md:grid-cols-2 md:items-center">
        <div className="flex items-start flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Tag>about us</Tag>

            <h3 className="text-black text-3xl font-bold leading-[2.4rem] md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[3.8rem]">
              Team up with renowned home decor brands and creative designers to
              bring fresh and stylish interior ideas to life.
            </h3>
          </div>

          <p className="text-[var(--color-grey-400)] md:text-[1.2rem]">
            Partner with leading home decor brands and visionary designers to
            transform your living spaces into works of art.
          </p>

          <a
            href="#"
            className="text-black py-4 px-8 cursor-pointer rounded-full btn-border capitalize text-[1.2rem] font-bold lg:text-[1.3rem] smooth-trans mt-4"
          >
            read more
          </a>
        </div>

        <div>
          <img src="../images/about-us.png" alt="About us image" />
        </div>
      </Container>
    </Section>
  );
};

export default AboutMe;
