import "../styles/header.css";
import airbnbLogo from "../assets/airbnb_logo.svg";
import world from "../assets/world-svgrepo-com.svg";
import perfil from "../assets/perfil.png";
import lupa from "../assets/lupa.png";

const Header = () =>{
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl justify-between items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="logo -m-1.5 p-1.5 flex items-center">
            <img
              className="h-8 w-auto"
              src={airbnbLogo}
              alt="Volver a página principal"
            />
            <p className="text-xl logo-text font-bold">airbnb</p>
          </a>
        </div>
          <div className="flex lg:flex-1 items-center">
          
          <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
            <a href="#" className="leading-6 hover:text-black">
              Estadías
            </a>
          </button>

          <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
          <a href="#" className="leading-6 hover:text-black">
            Experiencias
          </a>
          </button>

          <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
          <a href="#" className="leading-6 hover:text-black">
            Experiencias en línea
          </a>
          </button>
          </div>

          <div className="flex lg:flex-1 justify-end items-center">
          <button className="bg-transparent text-black font-semibold hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
          <a href="#" className="leading-6">
            Pon tu espacio en Airbnb
          </a>
          </button>

          <a href="#" className="leading-6 hover:font-bold">
          <button className="bg-transparent text-black font-semibold hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
            <img
              className="h-5 w-auto"
              src={world}
              alt="Volver a página principal"
            />
          </button>
          </a>
        
        <button className="flex items-center bg-white border border-gray-300 rounded-full hover:shadow-md p-2">
          <span className="text-xl">&#9776;</span>
          <div className="w-12 h-12 flex items-center justify-center rounded-full ml-2">
              <img src={perfil} alt="perfil" />  
          </div> 
        </button>
        </div>
      </nav>

      <div  className="buscar flex justify-between bg-white rounded-full border border-gray-300 w-3/5 shadow-md p-2">
        <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
          <p className="flex justify-start text-black font-semibold">
            Dónde
          </p>
          <input type="text" placeholder="Explora destinos" className="bg-transparent border-none focus:outline-none"/>
        </button>
        <p className="font-bold flex items-center">|</p>
        <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
        <p className="flex justify-start text-black font-semibold">
          Fechas
        </p>
        <input type="date" placeholder="Agregar fechas" className="bg-transparent border-none focus:outline-none"/>
        </button>
        <p className="font-bold flex items-center">|</p>
        <button className="flex justify-between bg-transparent hover:bg-gray-200 py-2 px-4 border-none rounded-full transition-all duration-300 focus:outline-none btn-outline-none">
          <div>
            <p className="flex justify-start text-black font-semibold">
              Quién
            </p>
            <input type="form" placeholder="¿Cuántos?" className="bg-transparent border-none focus:outline-none"/>
          </div>
          <div className="items-center justify-center">
            <button className="flex items-center boton w-12 h-12 rounded-full ml-2">
              <img className="w-auto h-6" src={lupa} alt="" /> 
              <p className="hidden justify-start text-white font-semibold">Buscar</p> 
            </button>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
