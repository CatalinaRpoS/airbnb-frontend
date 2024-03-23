import { useEffect } from "react";
import "../styles/header.css";
import airbnbLogo from "../assets/airbnb_logo.svg";
import world from "../assets/world.svg";
import profile from "../assets/profile.svg";
import magnifying_glass from "../assets/magnifying_glass.svg";
import strokes from "../assets/strokes.svg";

const Header: React.FC = () => {
  useEffect(() => {
    const hideSearchButton = (event: MouseEvent) => {
      const button = document.getElementById("search-button");
      const label = document.getElementById("search-label");
      const clicked = event.target as HTMLElement;

      if (
        !clicked.classList.contains("modify-button") &&
        !clicked.classList.contains("modify-button")
      ) {
        if (button) {
          button.classList.remove("w-24");
          button.classList.add("w-12");
        }
        if (label) {
          label.classList.add("hidden");
        }
      }
    };

    document.addEventListener("click", hideSearchButton);

    return () => {
      document.removeEventListener("click", hideSearchButton);
    };
  }, []);

  const showSearchButton = () => {
    const button = document.getElementById("search-button");
    const label = document.getElementById("search-label");

    if (button) {
      button.classList.remove("w-12");
      button.classList.add("w-24");
    }

    if (label) {
      label.classList.remove("hidden");
    }
  };

  return (
    <header className="bg-white">
      <nav
        className="flex justify-between items-center p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="logo -m-1.5 p-1.5 flex items-center">
            <img
              className="h-8 w-auto"
              src={airbnbLogo}
              alt="Volver a página principal"
            />
            <p className="text-xl logo-text font-bold">airbnb</p>
          </a>
        </div>
        <div className="flex pl-48">
          <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
            <a href="#" className="leading-6 hover:text-black">
              Estadías
            </a>
          </button>

          <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
            <a href="#" className="leading-6 hover:text-black">
              Experiencias
            </a>
          </button>

          <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
            <a href="#" className="leading-6 hover:text-black">
              Experiencias en línea
            </a>
          </button>
        </div>

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

      <div className="search flex justify-between bg-white rounded-full border border-gray-300 w-3/5 shadow-md p-2">
        <button
          onClick={showSearchButton}
          className="modify-button bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none"
        >
          <p className="modify-button flex justify-start text-black font-semibold">
            Dónde
          </p>
          <input
            type="text"
            placeholder="Explora destinos"
            className="modify-button bg-transparent border-none focus:outline-none"
          />
        </button>
        <p className="font-bold flex items-center">|</p>
        <button
          onClick={showSearchButton}
          className="modify-button bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none"
        >
          <p className="modify-button flex justify-start text-black font-semibold">
            Fechas
          </p>
          <input
            type="date"
            placeholder="Agregar fechas"
            className="modify-button bg-transparent border-none focus:outline-none"
          />
        </button>
        <p className="font-bold flex items-center">|</p>
        <button
          onClick={showSearchButton}
          className="modify-button flex items-center justify-between bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none"
        >
          <div>
            <p className="modify-button flex justify-start text-black font-semibold">
              Quién
            </p>
            <input
              type="form"
              placeholder="¿Cuántos?"
              className="modify-button bg-transparent border-none focus:outline-none"
            />
          </div>
          <div
            id="search-button"
            className="magnifying_glass flex items-center justify-evenly rounded-full h-12 w-12"
          >
            {/* LISTO: Con Typescript, cuando alguno de los botones sea presionado, hacer lo siguiente:
             Cambiar className magnifying_glass a w-24
             Eliminar hidden de className magnifying_glass-texto */}
            <img className="h-4 w-auto" src={magnifying_glass} alt="Buscar" />
            <p
              id="search-label"
              className="hidden magnifying_glass-texto text-white font-semibold"
            >
              Buscar
            </p>
          </div>
        </button>
      </div>

      <br />
      <hr />
    </header>
  );
};

export default Header;
