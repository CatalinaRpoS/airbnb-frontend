import arrowr from "../assets/svg_assets/arrow_ri.svg";

const ShowMore: React.FC = () => {
  return (
    <div className="flex items-center pt-2 opacity-95 hover:cursor-pointer hover:opacity-100">
      <p className="pr-1 font-semibold underline">Mostrar más</p>
      <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
    </div>
  );
};
export default ShowMore;
