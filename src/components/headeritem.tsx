import magnifying_glass from "../assets/svg_assets/magnifying_glass.svg";

const HeaderItem: React.FC = () => {
  return (
    <div className="search flex h-12 items-center justify-between rounded-full border border-gray-300 bg-white p-2 shadow-md">
      <button className="px-4 py-2">
        <p className="flex justify-start font-semibold text-black">
          En cualquier lugar del mundo
        </p>
      </button>
      <p className="flex items-center font-bold">|</p>
      <button className="px-4 py-2">
        <p className="flex justify-start font-semibold text-black">
          Cualquier semana
        </p>
      </button>
      <p className="flex items-center font-bold">|</p>
      <button className="flex items-center justify-between px-4 py-2">
        <div className="mr-2">¿Cuántos?</div>
        <div className="magnifying_glass flex h-8 w-8 items-center justify-center rounded-full">
          <img className="h-3 w-auto" src={magnifying_glass} alt="Buscar" />
        </div>
      </button>
    </div>
  );
};

export default HeaderItem;
