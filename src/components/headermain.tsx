const HeaderSection: React.FC = () => {
  return (
    <div className="flex pl-48">
      <button className="btn-outline-none rounded-full border-none bg-transparent px-4 py-2 transition-all duration-300 hover:bg-gray-200 focus:outline-none">
        <a href="#" className="leading-6 hover:text-black">
          Estadías
        </a>
      </button>

      <button className="btn-outline-none rounded-full border-none bg-transparent px-4 py-2 transition-all duration-300 hover:bg-gray-200 focus:outline-none">
        <a href="#" className="leading-6 hover:text-black">
          Experiencias
        </a>
      </button>

      <button className="btn-outline-none rounded-full border-none bg-transparent px-4 py-2 transition-all duration-300 hover:bg-gray-200 focus:outline-none">
        <a href="#" className="leading-6 hover:text-black">
          Experiencias en línea
        </a>
      </button>
    </div>
  );
};

export default HeaderSection;
