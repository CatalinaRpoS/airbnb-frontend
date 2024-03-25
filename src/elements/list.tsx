
const List = () =>{
  const incredibleviews= "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg";
  const ruralhouse="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg";
  const vineyard= "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg";
  const treehouse= "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg";
  
  return (
    <div className="flex justify-center">
        <button className="px-2 items-center hover:cursor-pointer opacity-20 active:opacity-100">
            <img className="h-6 w-6" src={treehouse} alt="treehouse" />
            <p className="text-xs">Casas del árbol</p>
        </button>
        <button className="px-2">
            <img className="h-6 w-6" src={vineyard} alt="vineyard" />
            <p className="text-xs">Viñedos</p>
        </button>
        <button className="px-2">
            <img className="h-6 w-6" src={ruralhouse} alt="ruralhouse" />
            <p className="text-xs">Casas rurales</p>
        </button>
        <button className="px-2">
            <img className="h-6 w-6" src={incredibleviews} alt="wonderfullviews" />
            <p className="text-xs">Vistas increibles</p>
        </button>
    </div>
  );
}
export default List;