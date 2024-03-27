const HeaderSection: React.FC = () => {
    return (
        <div className="flex pl-48">
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
    );
};

export default HeaderSection;