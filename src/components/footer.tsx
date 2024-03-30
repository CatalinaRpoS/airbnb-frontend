import "../styles/footer.css";
import arrowd from "../assets/svg_assets/arrow_do.svg";
import FooterSection from "./footersection";

const Footer: React.FC = () => {
  const highlightText = (id: number) => {
    const element = document.getElementById(`text-${id}`);
    if (element) {
      element.classList.add("text-black", "font-semibold");
    }
  };

  const softenText = (id: number) => {
    const element = document.getElementById(`text-${id}`);
    if (element) {
      element.classList.remove("text-black", "font-semibold");
    }
  };

  return (
    <footer className="bg-slate-50">
      <section className="p-10">
        <div>
          <p className="text-2xl font-semibold text-black">
            Inspiración para escapadas futuras
          </p>
        </div>
        <div className="mt-4 pb-5">
          <ul className="flex list-none">
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(1)}
              onMouseLeave={() => softenText(1)}
            >
              <p id="text-1">Popular</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(2)}
              onMouseLeave={() => softenText(2)}
            >
              <p id="text-2">Arte y cultura</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(3)}
              onMouseLeave={() => softenText(3)}
            >
              <p id="text-3">Al aire libre</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(4)}
              onMouseLeave={() => softenText(4)}
            >
              <p id="text-4">Montañas</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(5)}
              onMouseLeave={() => softenText(5)}
            >
              <p id="text-5">Playa</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(6)}
              onMouseLeave={() => softenText(6)}
            >
              <p id="text-6">Categorías</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(7)}
              onMouseLeave={() => softenText(7)}
            >
              <p id="text-7">Actividades</p>
            </li>
          </ul>
        </div>
        <div>
          <hr />
          <div className="grid grid-cols-2 gap-4 pt-5 lg:grid-cols-6">
            <div>
              <p className="font-semibold text-black">Canmore</p>
              <p>Chalés vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Benalmádena</p>
              <p>Casas vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Marbella</p>
              <p>Casas de campo vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Mijas</p>
              <p>Casas vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Prescott</p>
              <p>Casas vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Scottdale</p>
              <p>Mansiones vacacionales</p>
            </div>

            {/* fila 2 */}
            <div>
              <p className="font-semibold text-black">Tucson</p>
              <p>Mansiones vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Jasper</p>
              <p>Cabañas vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Mountain View</p>
              <p>Casas vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Devon port</p>
              <p>Alquileres vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Mallacoota</p>
              <p>Casas vacacionales en la playa</p>
            </div>
            <div>
              <p className="font-semibold text-black">Ibiza</p>
              <p>Alquileres vacacionales</p>
            </div>

            <div>
              <p className="font-semibold text-black">Anaheim</p>
              <p>Casas vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Monterey</p>
              <p>Condominios vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Paso Robles</p>
              <p>Casas vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Santa Bárbara</p>
              <p>Alojamientos vacacionales</p>
            </div>
            <div>
              <p className="font-semibold text-black">Sonoma</p>
              <p>Casas vacacionales en la playa</p>
            </div>
            <div>
              <div className="flex">
                <p className="m-2 font-semibold text-black">Mostrar más</p>
                <img className="mt-3 h-3 w-3" src={arrowd} alt="Mas opciones" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <FooterSection />
    </footer>
  );
};

export default Footer;
