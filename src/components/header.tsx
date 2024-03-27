import "../styles/header.css";
import HeaderSection from "./headermain";
import Search from "../elements/search";
import HeaderItem from "./headeritem";
import airbnbLogo from "../assets/svg_assets/airbnb_logo.svg";
import world from "../assets/svg_assets/world.svg";
import profile from "../assets/svg_assets/profile.svg";
import strokes from "../assets/svg_assets/strokes.svg";

interface HeaderProps {
  showDetails: boolean;
}

const Header: React.FC<HeaderProps> = ({ showDetails }) => {
  return (
    <header className="bg-white">
      <nav
        className="flex justify-between items-center p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="logo -m-1.5 p-1.5 flex items-center">
            <img
              className="h-8 w-auto"
              src={airbnbLogo}
              alt="Volver a página principal"
            />
            <p className="text-xl logo-text font-bold">airbnb</p>
          </a>
        </div>
        {showDetails ? <HeaderSection /> : <HeaderItem />}
        <div className="flex items-center">
          <button className="bg-transparent text-black font-semibold hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
            <a href="#" className="leading-6">
              Pon tu espacio en Airbnb
            </a>
          </button>

          <a href="#" className="leading-6 hover:font-bold">
            <button className="bg-transparent text-black font-semibold hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
              <img
                className="h-5 w-auto"
                src={world}
                alt="Volver a página principal"
              />
            </button>
          </a>

          <button className="flex w-auto h-12 items-center justify-center bg-white border border-gray-300 rounded-full hover:shadow-md p-2">
            <img className="h-4 w-auto" src={strokes} alt="strokes" />
            <div className="w-8 h-8 flex items-center justify-center rounded-full ml-2">
              <img src={profile} alt="profile" />
            </div>
          </button>
        </div>
      </nav>
      {showDetails && <Search />}
      {showDetails && <br />}
      <hr />
    </header>
  );
};

export default Header;
