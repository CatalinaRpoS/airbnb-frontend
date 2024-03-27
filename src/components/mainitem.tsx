import translate from "../assets/translate.svg";
import share from "../assets/share.svg";
import save from "../assets/save.svg";
import arrowr from "../assets/arrow_ri.svg";

const MainItem: React.FC = () => {
  const images = ["https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/defd5cac-2763-44d4-bbdd-9f7a59c2359d.jpeg?im_w=960", "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/3a46cf50-b38c-488a-81ce-69f270f46eb3.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/85236caf-c35e-41af-89a4-87402fab6bc3.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/118d09e1-f793-4c50-b8b6-dea166070c1a.jpeg?im_w=720","https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/c3bcba17-9a52-4fad-a08e-1dff42b47ce9.jpeg?im_w=720"];

  return (
    <main className="text-black">
    <div className="my-3 mx-20 flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-6 w-6" src={translate} alt="traducir" />
        <p className="pl-3 text-2xl font-semibold">Casa de playa MULÉ + piscina</p>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center">
            <img className="h-4 w-4" src={share} alt="compartir" />
            <p className="pl-3 text-sm font-semibold underline">Compartir</p>
        </div>
        <div className="pl-4 flex items-center">
            <img className="h-4 w-4" src={save} alt="guardar" />
            <p className="pl-2 text-sm font-semibold underline">Guardar</p>
        </div>
      </div>
    </div>
    <div className="mx-20 my-5 h-72 grid grid-cols-4 grid-rows-2 gap-2">
      <img
          src={images[0]}
          alt="Imagen 1"
          className="col-span-2 row-span-2 rounded-tl-lg rounded-bl-lg object-cover w-full h-full"
      />
      <img
          src={images[1]}
          alt="Imagen 2"
          className="row-span-1 object-cover w-full h-full"
      />
      <img
          src={images[3]}
          alt="Imagen 3"
          className="row-span-1 rounded-tr-lg object-cover w-full h-full"
      />
      <img
          src={images[2]}
          alt="Imagen 4"
          className="row-span-1 object-cover w-full h-full"
      />
      <img
          src={images[4]}
          alt="Imagen 5"
          className="row-span-1 rounded-br-lg object-cover w-full h-full"
      />
    </div>
    
    <br />
    <hr className="my-3 mx-20"/>
    <section className="mx-10 grid grid-cols-3 justify-around p-10 lg:px-8">
        <p className="col-span-3 font-semibold text-2xl pb-2">Lo que debes saber</p>
        <div className="col-span-1">
          <p className="py-2 font-semibold text-base">Reglas de la casa</p>
          <p className="py-2 text-sm">El check-in es a partir de las 15:00</p>
          <p className="py-2 text-sm">La salida es antes de las 11:00</p>
          <p className="py-2 text-sm">Se admiten mascotas</p>
          <div className="pt-2 flex items-center opacity-80 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1">Mostrar más</p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
          </div>
        </div>
        <div className="col-span-1">
          <p className="py-2 font-semibold text-base">Seguridad y propiedad</p>
          <p className="py-2 text-sm">No hay alarma de monóxido de carbono</p>
          <p className="py-2 text-sm">No hay alarma de humo</p>
          <p className="py-2 text-sm">Cámara de seguridad/dispositivo de grabación</p>
          <div className="pt-2 flex items-center opacity-80 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1">Mostrar más</p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
          </div>
        </div>
        <div className="col-span-1">
          <p className="py-2 font-semibold text-base">Política de cancelación</p>
          <p className="py-2 text-sm">Cancelación gratuita por 48 horas.</p>
          <p className="py-2 text-sm">Consulta la política de cancelación completa del anfitrión, que se aplica incluso si cancelas por problemas de salud, incluidos aquellos causados por la COVID-19.</p>
          <div className="pt-2 flex items-center opacity-80 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1">Mostrar más</p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainItem;