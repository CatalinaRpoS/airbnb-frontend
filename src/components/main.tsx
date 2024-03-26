import { useState } from "react";
import "../styles/main.css";
import Items from "../elements/items";
import filter from "../assets/filter.svg";
import List from "../elements/list";
import check from "../assets/check.svg";

const Main: React.FC = () => {
  const [activado, setActivado] = useState(false);

  const toggleActivado = () => {
    setActivado(!activado);
  };

  return (
    <main className="bg-white mt-6 mx-8">
      <div className="flex justify-between items-center pb-3">
        <List />
        <button className="h-12 flex items-center border rounded-xl px-4 py-2">
          <img className="h-6 w-6 pr-2" src={filter} alt="" />
          <span className="text-black text-xs font-semibold">Filtros</span>
        </button>

        <div className="h-12 flex items-center justify-between border rounded-xl px-4 py-2">
          <span className="text-black text-xs font-semibold pr-2 truncate">
            Precio total sin impuestos
          </span>
          <button
          className="relative inline-block w-16 h-8 rounded-full bg-black p-1 focus:outline-none"
          onClick={toggleActivado}
          >
          <span
            className={`block w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out ${
              activado ? 'transform translate-x-8' : ''
            }`}
          ></span>
          {activado && (
            <img className="absolute top-1/2 right-2 h-4 w-4 text-black transform -translate-y-1/2" src={check} alt="Simbolo check" />
          )}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
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
        <p className="text-black font-semibold text-xl">Sigue explorando las categorías</p>
        <button className="bg-black h-12 w-32 flex items-center border rounded-xl px-5 py-4 m-4">
          <span className="text-white text-sm font-semibold">Mostrar más</span>
        </button>
      </div>

    </main>
  );
};

export default Main;
