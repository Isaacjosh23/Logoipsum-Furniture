import MobileNav from "./navigation/MobileNav";

const Header = ({
  onHomeClick,
  onAboutClick,
  onWhyUsClick,
  onServicesClick,
  onFooterClick,
}) => {
  return (
    <header className="flex items-center justify-between container relative nav-open">
      <div>
        <img src="../images/Logo.png" alt="Logoipsum" className="w-48 py-8" />
      </div>

      <MobileNav
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onWhyUsClick={onWhyUsClick}
        onServicesClick={onServicesClick}
        onFooterClick={onFooterClick}
      />
    </header>
  );
};

export default Header;
