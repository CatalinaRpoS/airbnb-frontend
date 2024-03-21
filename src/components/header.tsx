import "../styles/header.css";
import airbnbLogo from "../assets/airbnb_logo.svg";
import world from "../assets/world-svgrepo-com.svg";

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="logo -m-1.5 p-1.5 flex items-center">
            <img
              className="h-8 w-auto"
              src={airbnbLogo}
              alt="Volver a página principal"
            />
            <p className="text-xl logo-text font-bold">airbnb</p>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 justify-end items-center">
          <a href="#" className="text-sm leading-6 hover:font-bold">
            Estadías
          </a>
          <a href="#" className="text-sm leading-6 hover:font-bold">
            Experiencias
          </a>
          <a href="#" className="text-sm leading-6 hover:font-bold">
            Experiencias en línea
          </a>
          <a href="#" className="text-sm leading-6 hover:font-bold">
            Pon tu espacio en Airbnb
          </a>
          <a href="#" className="text-sm leading-6 hover:font-bold">
            <img
              className="h-4 w-auto"
              src={world}
              alt="Volver a página principal"
            />
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
