import { useEffect } from "react";
import magnifying_glass from "../assets/svg_assets/magnifying_glass.svg";
import "../styles/search.css";

const Search: React.FC = () => {
  useEffect(() => {
    const hideSearchButton = (event: MouseEvent) => {
      const button = document.getElementById("search-button");
      const label = document.getElementById("search-label");
      const clicked = event.target as HTMLElement;

      if (!clicked.classList.contains("modify-button")) {
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
    <>
      <div className="search flex h-16 justify-between rounded-full border border-gray-300 bg-white p-2 shadow-md lg:w-2/3">
        <button
          onClick={showSearchButton}
          className="modify-button btn-outline-none flex items-center rounded-full border-none bg-transparent px-4 py-2 transition-all duration-300 hover:bg-gray-200 focus:outline-none"
        >
          <div>
            <p className="modify-button flex justify-start font-semibold text-black">
              Dónde
            </p>
            <input
              type="form"
              placeholder="Explora destinos"
              className="modify-button border-none bg-transparent focus:outline-none"
            ></input>
          </div>
        </button>
        <hr className="vertical-divider" />
        <button
          onClick={showSearchButton}
          className="modify-button btn-outline-none flex items-center rounded-full border-none bg-transparent px-4 py-2 transition-all duration-300 hover:bg-gray-200 focus:outline-none"
        >
          <div>
            <p className="modify-button flex justify-start font-semibold text-black">
              Fecha
            </p>
            <input
              type="date"
              className="modify-button border-none bg-transparent focus:outline-none"
            />
          </div>
        </button>
        <hr className="vertical-divider" />
        <button
          onClick={showSearchButton}
          className="modify-button btn-outline-none flex items-center justify-between rounded-full border-none bg-transparent px-4 py-2 transition-all duration-300 hover:bg-gray-200 focus:outline-none"
        >
          <div>
            <p className="modify-button flex justify-start font-semibold text-black">
              Quién
            </p>
            <input
              type="form"
              placeholder="¿Cuántos?"
              className="modify-button border-none bg-transparent focus:outline-none"
            />
          </div>
          <div
            id="search-button"
            className="magnifying_glass flex h-12 w-12 items-center justify-evenly rounded-full"
          >
            {/* LISTO: Con Typescript, cuando alguno de los botones sea presionado, hacer lo siguiente:
             Cambiar className magnifying_glass a w-24
             Eliminar hidden de className magnifying_glass-texto */}
            <img className="h-4 w-auto" src={magnifying_glass} alt="Buscar" />
            <p
              id="search-label"
              className="magnifying_glass-texto hidden font-semibold text-white"
            >
              Buscar
            </p>
          </div>
        </button>
      </div>
    </>
  );
};

export default Search;
