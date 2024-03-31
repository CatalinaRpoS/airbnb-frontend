import { useState } from "react";
import "../styles/main.css";
import Items from "../elements/items";
import filter from "../assets/svg_assets/filter.svg";
import List from "../elements/list";
import check from "../assets/svg_assets/check.svg";
interface MainProps {
  elementsToShow: number;
}

const Main: React.FC<MainProps> = ({ elementsToShow }) => {
  const [activate, setActivate] = useState(false);

  const toggleActivate = () => {
    setActivate(!activate);
  };
  return (
    <main className="mx-8 mt-6 bg-white">
      <div className="flex flex-col items-center justify-center pb-3 md:flex-row md:justify-between">
        <div>
          <List countElements={elementsToShow} />
        </div>
        <div className="flex">
          <button className="mx-2 hidden h-12 items-center rounded-xl border px-4 py-2 hover:border-black hover:bg-gray-100 md:flex">
            <img className="h-6 w-6 pr-2" src={filter} alt="" />
            <span className="text-xs font-semibold text-black">Filtros</span>
          </button>
          <div className="mt-4 flex rounded-xl border px-4 py-2 hover:border-black hover:bg-gray-100 md:mt-0 md:items-center md:justify-between">
            <span className="truncate pr-2 text-xs font-semibold text-black">
              Precio total sin impuestos
            </span>
            <button
              className={`relative inline-block h-6 w-10 rounded-full p-1 focus:outline-none ${
                activate ? "bg-black" : "bg-gray-500"
              }`}
              onClick={toggleActivate}
            >
              <span
                className={`block h-4 w-4 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                  activate ? "translate-x-4 transform" : ""
                }`}
              ></span>
              {activate && (
                <img
                  className="absolute right-2 top-1/4 h-3 w-3  items-center"
                  src={check}
                  alt="Simbolo check"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 pt-0 sm:grid-cols-2 md:grid-cols-3 md:pt-2 lg:grid-cols-4">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
      <div className="m-10 flex flex-col items-center">
        <p className="text-xl font-semibold text-black">
          Sigue explorando las categorías
        </p>
        <button className="m-4 flex h-12 w-32 items-center rounded-xl border bg-black bg-opacity-80 px-5 py-4 hover:bg-opacity-100">
          <span className="text-sm font-semibold text-white">Mostrar más</span>
        </button>
      </div>
    </main>
  );
};

export default Main;
