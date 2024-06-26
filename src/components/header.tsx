import "../styles/header.css";
import HeaderSection from "./headermain";
import Search from "../elements/search";
import HeaderItem from "./headeritem";
import airbnbLogo from "../assets/svg_assets/airbnb_logo.svg";
import world from "../assets/svg_assets/world.svg";
import profile from "../assets/svg_assets/profile.svg";
import strokes from "../assets/svg_assets/strokes.svg";
import HeaderMobile from "./headermobile";
import arrowl from "../assets/svg_assets/arrow_le.svg";
import share from "../assets/svg_assets/share.svg";
import save from "../assets/svg_assets/save.svg";

interface HeaderProps {
  showDetails: boolean;
  windowWidth: number;
}

const Header: React.FC<HeaderProps> = ({ showDetails, windowWidth }) => {
  return (
    <header className="bg-white">
      {!showDetails && windowWidth <= 768 && (
        <div className="flex items-center justify-between p-6">
          <div className="flex justify-start">
            <img className="mx-3 h-4 w-4" src={arrowl} alt="Alojamientos" />
            <span className="text-sm font-semibold text-black">
              Alojamientos
            </span>
          </div>
          <div className="flex justify-end">
            <img className="mx-3 h-4 w-4" src={share} alt="Compartir" />
            <img className="h-4 w-4" src={save} alt="Guardar" />
          </div>
        </div>
      )}
      {showDetails && windowWidth <= 768 && <HeaderMobile />}
      {windowWidth > 768 && (
        <nav
          className="flex p-4 md:flex-wrap md:justify-between lg:flex-row lg:items-center lg:px-8"
          aria-label="Global"
        >
          <div className="flex md:order-1 lg:order-1 lg:w-auto">
            <a href="/" className="logo -m-1.5 flex items-center p-1.5">
              <img
                className="h-8 w-8"
                src={airbnbLogo}
                alt="Volver a página principal"
              />
              <p className="logo-text hidden text-xl font-bold lg:flex">
                airbnb
              </p>
            </a>
          </div>
          <div className="flex md:order-3 md:w-full lg:order-2 lg:w-auto">
            {showDetails ? <HeaderSection /> : <HeaderItem />}
          </div>
          <div className="flex items-center justify-between md:order-2 lg:order-3 lg:w-auto">
            <button className="btn-outline-none rounded-full border-none bg-transparent px-4 py-2 font-semibold text-black transition-all duration-300 hover:bg-gray-200 focus:outline-none">
              <a href="#">Pon tu espacio en Airbnb</a>
            </button>
            <a href="#" className="hover:font-bold">
              <button className="btn-outline-none rounded-full border-none bg-transparent px-4 py-2 font-semibold text-black transition-all duration-300 hover:bg-gray-200 focus:outline-none">
                <img
                  className="h-5 w-auto"
                  src={world}
                  alt="Volver a página principal"
                />
              </button>
            </a>
            <button className="flex h-12 w-auto items-center justify-center rounded-full border border-gray-300 bg-white p-2 hover:shadow-md">
              <img className="h-4 w-auto" src={strokes} alt="strokes" />
              <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full">
                <img src={profile} alt="profile" />
              </div>
            </button>
          </div>
        </nav>
      )}

      {showDetails && windowWidth > 768 && (
        <>
          <Search />
          <br />
          <hr />
        </>
      )}
    </header>
  );
};

export default Header;
