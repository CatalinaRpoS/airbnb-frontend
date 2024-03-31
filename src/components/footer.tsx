import "../styles/footer.css";
import arrowd from "../assets/svg_assets/arrow_do.svg";
import FooterSection from "./footersection";
import { useState } from "react";
import arrowl from "../assets/svg_assets/arrow_le.svg";
import arrowr from "../assets/svg_assets/arrow_ri.svg";

interface FooterProps {
  elementsToShow: number;
}

const Footer: React.FC<FooterProps> = ({ elementsToShow }) => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleNextClick = () => {
    setCurrentElementIndex(currentElementIndex + 1);
    setShowLeftArrow(true);
    if (currentElementIndex + elementsToShow >= elements.length - 1) {
      setShowRightArrow(false);
    }
  };

  const handlePrevClick = () => {
    setCurrentElementIndex(Math.max(0, currentElementIndex - 1));
    setShowRightArrow(true);
    if (currentElementIndex <= 1) {
      setShowLeftArrow(false);
    }
  };

  const highlightText = (id: number) => {
    const element = document.getElementById(`element-text-${id}`);
    if (element) {
      element.classList.add("text-black", "font-semibold");
    }
  };

  const softenText = (id: number) => {
    const element = document.getElementById(`element-text-${id}`);
    if (element) {
      element.classList.remove("text-black", "font-semibold");
    }
  };
  const elements = [
    "Popular",
    "Arte y cultura",
    "Al aire libre",
    "Montañas",
    "Playa",
    "Categorías",
    "Actividades",
  ];

  return (
    <footer className="bg-slate-50">
      <section className="p-10">
        <div>
          <p className="text-2xl font-semibold text-black">
            Inspiración para escapadas futuras
          </p>
        </div>
        <div className="mt-4 flex items-center pb-5">
          <div className="mr-6 h-7 w-7 md:hidden">
            {showLeftArrow && (
              <button
                className="flex h-7 w-7 items-center justify-center rounded-full border bg-white text-lg text-black hover:shadow-md"
                onClick={handlePrevClick}
              >
                <img className="h-3 w-3" src={arrowl} alt="" />
              </button>
            )}
          </div>

          <div className="flex">
            {elements
              .slice(currentElementIndex, currentElementIndex + elementsToShow)
              .map((_, index) => (
                <div
                  className="pr-6"
                  key={index}
                  onMouseEnter={() => highlightText(index)}
                  onMouseLeave={() => softenText(index)}
                >
                  <button className="flex h-14 w-14 flex-col items-center justify-center px-4 hover:cursor-pointer">
                    <p
                      className="truncate pt-2 text-xs font-semibold"
                      id={`element-text-${index}`}
                    >
                      {elements[currentElementIndex + index]}
                    </p>
                  </button>
                </div>
              ))}
          </div>

          <div className="h-7 w-7 md:hidden">
            {showRightArrow && (
              <button
                className="flex h-7 w-7 items-center justify-center rounded-full border bg-white text-lg text-black hover:shadow-md"
                onClick={handleNextClick}
              >
                <img className="h-3 w-3" src={arrowr} alt="" />
              </button>
            )}
          </div>
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
