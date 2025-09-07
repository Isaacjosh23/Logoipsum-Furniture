import MobileNav from "./navigation/MobileNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between container relative nav-open">
      <div>
        <img src="../images/Logo.png" alt="Logoipsum" className="w-48 py-8" />
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
