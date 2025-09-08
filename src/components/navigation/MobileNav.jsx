import { useState } from "react";

const MobileNav = ({
  onAboutClick,
  onWhyUsClick,
  onServicesClick,
  onFooterClick,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleToggleNav = () => {
    setNavIsOpen((open) => !open);
  };

  const handleOverlay = () => {
    setNavIsOpen(false);
    console.log("clicked");
  };

  const handleNavClick = (e, callback) => {
    e.preventDefault();
    setNavIsOpen(false);
    callback();
  };

  return (
    <>
      {navIsOpen && (
        <nav className="main-nav absolute top-0 left-[40%] nav-position w-full h-screen invisible opacity-0 pointer-events-none bg-transparent z-[40] pt-24 nav-position">
          <ul className="flex flex-col items-center h-screen">
            <li className="p-4">
              <a
                href="#"
                className="text-white text-[1.5rem] font-bold hover:underline smooth-trans"
              >
                Home
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-white text-[1.5rem] font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onAboutClick)}
              >
                About
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-white text-[1.5rem] font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onWhyUsClick)}
              >
                Why us
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-white text-[1.5rem] font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onServicesClick)}
              >
                Services
              </a>
            </li>

            <li className="p-4">
              <a
                href="#"
                className="text-white text-[1.5rem] font-bold hover:underline smooth-trans"
                onClick={(e) => handleNavClick(e, onFooterClick)}
              >
                Reach us
              </a>
            </li>
          </ul>
        </nav>
      )}

      {navIsOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-[35] backdrop-blur-[3px]"
          onClick={handleOverlay}
        ></div>
      )}

      <button className="cursor-pointer z-[40]" onClick={handleToggleNav}>
        {navIsOpen ? (
          <ion-icon name="close" className="w-12 h-12"></ion-icon>
        ) : (
          <ion-icon name="menu" className="w-12 h-12"></ion-icon>
        )}
      </button>
    </>
  );
};

export default MobileNav;
