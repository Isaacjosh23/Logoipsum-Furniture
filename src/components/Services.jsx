import { forwardRef } from "react";
import Container from "./reusables/Container";
import Section from "./reusables/Section";
import Tag from "./reusables/Tag";

const Services = forwardRef((_, externalRef) => {
  return (
    <Section ref={externalRef} className="py-20">
      <Container>
        <Tag className="mb-5 inline-block">services</Tag>

        <div className=" flex flex-col gap-20">
          <div className="flex flex-col gap-4 items-start">
            <div className="flex flex-col items-start gap-7 md:grid grid-cols-2 md:gap-12 lg:gap-24">
              <div className="flex flex-col gap-4">
                <h3 className="text-black text-3xl font-bold leading-[2.4rem] md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[3.8rem]">
                  Collaborate with leading home decor brands and imaginative
                  designers to craft cutting-edge interior solutions.
                </h3>

                <p className="text-[var(--color-grey-400)] md:text-[1.1rem] lg:text-[1.2rem]">
                  Work alongside top home decor brands and creative designers to
                  design breathtaking living environments.
                </p>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-black font-semibold text-2xl md:text-[1.7]">
                    Our Story
                  </h4>

                  <p className="text-[var(--color-grey-400)] md:text-[1.1rem] lg:text-[1.2rem]">
                    Partner with leading skincare brands and agencies to achieve
                    transformative results.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h4 className="text-black font-semibold text-2xl md:text-[1.7]">
                    Our Work
                  </h4>

                  <p className="text-[var(--color-grey-400)] md:text-[1.1rem] lg:text-[1.2rem]">
                    Partner with leading skincare brands and agencies to achieve
                    transformative results.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-black py-4 px-8 cursor-pointer rounded-full btn-border capitalize text-[1.2rem] font-bold lg:text-[1.3rem] smooth-trans mt-4"
            >
              all services
            </a>
          </div>

          {/* Services Image */}

          <div className="flex flex-col gap-10 items-center md:flex-row md:justify-center">
            <div>
              <img
                src="../images/product-imgs/service-2.png"
                alt="Service images"
                className="w-[26rem] lg:w-[36rem]"
              />
            </div>

            <div>
              <img
                src="../images/product-imgs/service-1.png"
                alt="Service images"
                className="w-[26rem] lg:w-[36rem]"
              />
            </div>

            <div>
              <img
                src="../images/product-imgs/service-3.png"
                alt="Service images"
                className="w-[26rem] lg:w-[36rem]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
});

export default Services;
