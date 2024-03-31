import FooterSection from "./footersection";
import arrow from "../assets/svg_assets/arrow_ri.svg";
const FooterItem: React.FC = () => {
  return (
    <footer className="bg-slate-50">
      <hr />
      <div className="mb-5 mt-7 flex items-center text-sm text-black">
        <p className="pl-10 pr-2 hover:underline lg:ml-20 lg:pl-0">Airbnb</p>
        <img className="h-2 w-2" src={arrow} alt="" />
        <p className="px-2 hover:underline">Colombia</p>
        <img className="h-2 w-2" src={arrow} alt="" />
        <p className="px-2 hover:underline">Sucre</p>
        <img className="h-2 w-2" src={arrow} alt="" />
        <p className="px-2 hover:underline">Tolú</p>
      </div>
      <br />
      <hr />
      <FooterSection />
    </footer>
  );
};

export default FooterItem;
