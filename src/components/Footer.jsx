import { forwardRef } from "react";
import Container from "./reusables/Container";
import Section from "./reusables/Section";

const Footer = forwardRef((_, externalRef) => {
  const currentYear = new Date().getFullYear();

  return (
    <Section ref={externalRef} className="bg-black py-20">
      <Container>
        <div className="md:grid md:grid-cols-2 md:gap-x-24 lg:gap-x-32 md:mb-16 ">
          <div>
            <ol className="list-decimal text-2xl grid grid-cols-2 gap-12">
              <li>
                <span className="inline-block font-semibold mb-4">Product</span>

                <ul className="text-[var(--color-grey-300)] text-xl flex flex-col gap-2.5">
                  <li>
                    <a href="#" className="hover:underline">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Instructors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Community
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <span className="inline-block font-semibold mb-4">Office</span>

                <ul className="text-[var(--color-grey-300)] text-xl flex flex-col gap-2.5">
                  <li>
                    <a
                      href="https://www.google.com/maps?q=22+Rue+de+la+Paix,+Paris,+France+75002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      22 Rue de la Paix, Paris, France 75002
                    </a>
                  </li>

                  <li>
                    <a href="tel:+237 21891 3134" className="hover:underline">
                      +237 21891 3134
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <span className="inline-block font-semibold mb-4">Socials</span>

                <ul className="text-[var(--color-grey-300)] text-xl flex flex-col gap-2.5">
                  <li className="hover:underline">
                    <a href="#">Instagram</a>
                  </li>
                  <li className="hover:underline">
                    <a href="#">X(FKA Twitter)</a>
                  </li>
                  <li className="hover:underline">
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </li>

              <li>
                <span className="inline-block font-semibold mb-4">Legal</span>

                <ul className="text-[var(--color-grey-300)] text-xl flex flex-col gap-2.5">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms of Services
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <span className="inline-block font-semibold mb-4">Help</span>

                <ul className="text-[var(--color-grey-300)] text-xl flex flex-col gap-2.5">
                  <li className="break-words">
                    <a
                      href="mailto:info@pixelspark@yahoo.com"
                      className="hover:underline"
                    >
                      info@pixelspark@yahoo.com
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <span className="inline-block font-semibold mb-4">Contact</span>

                <ul className="text-[var(--color-grey-300)] text-xl flex flex-col gap-2.5">
                  <li className="break-words">
                    <a
                      href="mailto:pixelspark@yahoo.com"
                      className="hover:underline"
                    >
                      pixelspark@yahoo.com
                    </a>
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-[10rem] footer-text md:text-[20rem] tracking-[-1rem] md:tracking-[-2rem]">
              <span className="font-bold">P</span> S
            </p>
          </div>
        </div>

        <hr className="py-4 md:py-6" />

        <div className="flex items-center justify-between">
          <a href="#" className="underline md:text-xl hover:no-underline">
            Become an Affiliate
          </a>

          <p className=" md:text-xl">
            &copy; {currentYear} PixelSpark. All rights reserved
          </p>
        </div>
      </Container>
    </Section>
  );
});

export default Footer;
