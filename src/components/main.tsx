import "../styles/main.css";
import Items from "../elements/items";
import { FC } from "react";
import filter from "../assets/filter.svg";
import arrowl from '../assets/arrow_le.svg';
import arrowr from '../assets/arrow_ri.svg';

const Main: FC = () => {
  return (
    <main className="bg-white m-6">
      <div className="flex justify-between">
        <div className="">
          <button className="text-black text-lg h-7 w-7 border border-gray1 rounded-full bg-white flex justify-center items-center">
            <img className="h-3 w-3" src={arrowl} alt="" />
          </button>
          <button className="text-black text-lg h-7 w-7 border border-gray1 rounded-full bg-white flex justify-center items-center">
            <img className="h-3 w-3" src={arrowr} alt="" />
          </button>
        </div>
        <div>
          <button className="h-12 flex justify-between items-center border border-gray1 rounded-xl px-4 py-2">
            <img className="h-6 w-6 pr-2" src={filter} alt="" />
            <span className="text-black font-semibold">Filtros</span>
          </button>
        </div>
        <div>
          <button className="h-12 flex justify-between items-center border border-gray1  rounded-xl px-4 py-2">
            <span className="text-black font-semibold pr-2">Precio total sin impuestos</span>
            <img className="h-5 w-5" src={filter} alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center">
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
    </main>
  );
};

export default Main;
