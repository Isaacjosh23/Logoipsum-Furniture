import Section from "./reusables/Section.jsx";
import Container from "./reusables/Container.jsx";
import { forwardRef } from "react";

const Why = forwardRef((_, externalRef) => {
  return (
    <Section
      ref={externalRef}
      className="bg-black py-20 bg-no-repeat bg-center bg-cover w-100% why-us-bg"
    >
      <Container className="flex flex-col gap-12">
        <h3 className="capitalize text-3xl font-bold md:text-4xl">
          why work with us?
        </h3>

        <div className="flex flex-col justify-center md:flex-row gap-9">
          <div className="flex flex-col gap-4">
            <span className="text-xl md:text-2xl font-medium lg:text-[1.7rem] ">
              Individual Approach
            </span>

            <p className="leading-[1.8rem] md:text-[1.2rem] lg:text-[1.3rem] lg:leading-[2.4rem]">
              Join forces with elite home decor brands and talented designers to
              create remarkable spaces. By building strong collaborations, we
              can tap into exclusive insights and resources that elevate our
              projects.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xl md:text-2xl font-medium lg:text-[1.7rem] ">
              Quality of Work
            </span>

            <p className="leading-[1.8rem] md:text-[1.2rem] lg:text-[1.3rem] lg:leading-[2.4rem]">
              Engage with top-tier home decor brands and skilled designers to
              deliver exceptional outcomes. Our strong partnerships allow us to
              utilize unique perspectives and tools that enrich our
              collaborative efforts.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xl md:text-2xl font-medium lg:text-[1.7rem] ">
              Autonomy
            </span>

            <p className="leading-[1.8rem] md:text-[1.2rem] lg:text-[1.3rem] lg:leading-[2.4rem]">
              Unite with distinguished home decor brands and innovative
              designers to achieve outstanding results. Our collaborative
              approach harnesses unique insights and resources to enhance every
              project.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
});

export default Why;
