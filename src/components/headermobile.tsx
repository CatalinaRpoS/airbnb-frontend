import maglass from "../assets/svg_assets/maglass.svg";
import filter from "../assets/svg_assets/filter.svg";

const HeaderMobile = () => {
  return (
    <div className="mx-6 my-3 flex items-center">
      <div className="flex h-14 w-full justify-between rounded-full border border-gray-300 bg-white p-2 shadow-md lg:w-2/3">
        <div className="flex items-center truncate rounded-full border-none bg-transparent px-4 py-2">
          <img className="h-5 w-5" src={maglass} alt="" />
          <div className="ml-4">
            <p className="modify-button flex justify-start text-sm font-semibold text-black">
              En cualquier lugar del mundo
            </p>
            <div className="flex text-xs text-[#717171]">
              <p>En cualquier semana</p>
              <span className="px-1">·</span>
              <p>¿Cuántos?</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white">
          <img className="h-4 w-4" src={filter} alt="" />
        </div>
      </div>
    </div>
  );
};
export default HeaderMobile;
