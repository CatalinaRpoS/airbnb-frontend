import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowl from "../assets/svg_assets/arrow_le.svg";
import arrowr from "../assets/svg_assets/arrow_ri.svg";
import like from "../assets/svg_assets/like.svg";
import "../styles/items.css";

const Items: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/defd5cac-2763-44d4-bbdd-9f7a59c2359d.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/3a46cf50-b38c-488a-81ce-69f270f46eb3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/85236caf-c35e-41af-89a4-87402fab6bc3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/118d09e1-f793-4c50-b8b6-dea166070c1a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/c3bcba17-9a52-4fad-a08e-1dff42b47ce9.jpeg?im_w=720",
  ];
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clicked = event.target as HTMLElement;
    console.log(clicked.classList);
    if (!clicked.classList.contains("arrow")) {
      navigate("/item");
    }
  };
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative p-3 cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <div className="relative">
        <img
          className="item rounded-lg w-64 h-64"
          src={images[currentImageIndex]}
          alt=""
        />
        <div className="absolute top-3 left-56 right-0">
          <button className="transition ease-in delay-150 hover:-translate-x-0 hover:-translate-y-0 hover:scale-110 duration-300">
            <img className="h-6 w-6" src={like} alt="" />
          </button>
        </div>
        {showArrows && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentImageIndex ? "bg-white" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>
      {showArrows && (
        <div className="absolute top-0 left-6 right-6 bottom-20 flex justify-between items-center">
          <button
            className="arrow text-black text-lg h-7 w-7 rounded-full bg-white flex justify-center items-center transition ease-in delay-150 hover:-translate-x-0 hover:-translate-y-0 hover:scale-110 duration-300"
            onClick={prevImage}
          >
            <img className="arrow h-3 w-3" src={arrowl} alt="" />
          </button>
          <button
            className="arrow text-black text-lg h-7 w-7 rounded-full bg-white flex justify-center items-center  transition ease-in delay-150 hover:-translate-x-0 hover:-translate-y-0 hover:scale-110 duration-300"
            onClick={nextImage}
          >
            <img className="arrow h-3 w-3" src={arrowr} alt="" />
          </button>
        </div>
      )}
      <div />

      <div>
        <p className="font-semibold text-black">Santiago de Tolú, Colombia</p>
        <p>En la playa</p>
        <p>21 – 26 de abr</p>
      </div>
      <div className="flex">
        <p className="font-bold text-black mr-2">$5,175,000 COP</p>
        <p className="text-black">noche</p>
      </div>
    </div>
  );
};

export default Items;
