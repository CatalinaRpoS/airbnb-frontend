import magnifying_glass from "../assets/svg_assets/magnifying_glass.svg";

const HeaderItem: React.FC = () => {
  return (
    <div className="search h-12 flex items-center justify-between bg-white rounded-full border border-gray-300 shadow-md p-2">
        <button
          className="py-2 px-4"
        >
          <p className="flex justify-start text-black font-semibold">
            En cualquier lugar del mundo
          </p>
        </button>
        <p className="font-bold flex items-center">|</p>
        <button
          className="py-2 px-4"
        >
          <p className="flex justify-start text-black font-semibold">
            Cualquier semana
          </p>
        </button>
        <p className="font-bold flex items-center">|</p>
        <button
          className="flex items-center justify-between py-2 px-4"
        >
            <div className="mr-2">
                ¿Cuántos?
            </div>
            <div
                className="magnifying_glass flex items-center justify-center rounded-full h-8 w-8"
            >
                <img className="h-3 w-auto" src={magnifying_glass} alt="Buscar" />
            </div>
        </button>
    </div>
  );
};

export default HeaderItem;
