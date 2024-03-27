import arrowr from "../assets/svg_assets/arrow_ri.svg";

const ShowMore: React.FC = () => {
    return (
        <div className="pt-2 flex items-center opacity-95 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1 font-semibold">Mostrar más</p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
        </div>
    );
};
export default ShowMore;