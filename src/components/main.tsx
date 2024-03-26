import "../styles/main.css";
import Items from "../elements/items";
import filter from "../assets/filter.svg";
import List from "../elements/list";

const Main: React.FC = () => {
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
            className="bg-gray-400 border-solid rounded-full w-12 h-6"
            role="switch"
          ></button>
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
    </main>
  );
};

export default Main;
