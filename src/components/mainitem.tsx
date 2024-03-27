import translate from "../assets/svg_assets/translate.svg";
import share from "../assets/svg_assets/share.svg";
import save from "../assets/svg_assets/save.svg";
import arrowr from "../assets/svg_assets/arrow_ri.svg";
import star from "../assets/svg_assets/star.svg";
import pool from "../assets/svg_assets/pool.svg";
import trophy from "../assets/svg_assets/trophy.svg";
import calendar from "../assets/svg_assets/calendar.svg";
import frame from "../assets/svg_assets/frame.svg";
import beach from "../assets/svg_assets/beach.svg";
import wifi from "../assets/svg_assets/wifi.svg";
import food from "../assets/svg_assets/food.svg";
import no_smoke from "../assets/svg_assets/no_smoke.svg";
import no_detector from "../assets/svg_assets/no_detector.svg";
import parking from "../assets/svg_assets/parking.svg";
import camera from "../assets/svg_assets/camera.svg";
import profile_photo from "../assets/png_assets/profile_photo.png";

const MainItem: React.FC = () => {
  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/defd5cac-2763-44d4-bbdd-9f7a59c2359d.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/3a46cf50-b38c-488a-81ce-69f270f46eb3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/85236caf-c35e-41af-89a4-87402fab6bc3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/118d09e1-f793-4c50-b8b6-dea166070c1a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/c3bcba17-9a52-4fad-a08e-1dff42b47ce9.jpeg?im_w=720",
  ];

  return (
    <main className="text-black">
      <div className="pt-3 my-3 mx-20 flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-6 w-6" src={translate} alt="traducir" />
          <p className="pl-3 text-2xl font-semibold">
            Casa de playa MULÉ + piscina
          </p>
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
      <section className="mx-10 grid grid-cols-3 justify-around px-10 lg:px-8">
        <div className="col-span-2">
          <div>
            <p className="font-semibold text-2xl">
              Alojamiento entero en Santiago de Tolú, Colombia
            </p>
            <p className="text-base pb-2">
              Más de 16 huéspedes <span>·</span> 5 habitaciones <span>·</span>{" "}
              14 camas <span>·</span> 4,5 baños
            </p>
          </div>
          <div className="flex items-center">
            <img className="h-3.5 w-3.5" src={star} alt="star" />
            <p className="pl-2 text-base font-semibold underline">1 reseña</p>
          </div>
          <hr className="mt-8" />
          <div className="flex items-center pt-8">
            <img
              className="h-10 w-10 rounded-full"
              src={profile_photo}
              alt="photo"
            />
            <div className="pl-6">
              <p className="text-base font-semibold">Anfitrión: Carlos</p>
              <p className="text-sm text-[#717171]">7 meses anfitrionando</p>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="flex items-center pt-8">
            <div>
              <div className="flex pb-6">
                <img className="h-6 w-6" src={pool} alt="pool" />
                <div className="pl-6">
                  <p className="text-base font-semibold">Sumérgete</p>
                  <p className="text-sm text-[#717171]">
                    Este es uno de los pocos lugares en la zona con piscina.
                  </p>
                </div>
              </div>

              <div className="flex pb-6">
                <img className="h-6 w-6" src={trophy} alt="trophy" />
                <div className="pl-6">
                  <p className="text-base font-semibold">
                    Huésped con alta calificación
                  </p>
                  <p className="text-sm text-[#717171]">
                    Carlos ha recibido calificaciones de 5 estrellas del 100 %
                    de los huéspedes recientes.
                  </p>
                </div>
              </div>
              <div className="flex">
                <img className="h-6 w-6" src={calendar} alt="calendar" />
                <div className="pl-6">
                  <p className="text-base font-semibold">
                    Cancelación gratuita por 48 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-8" />
          <p className="mt-8 text-base text-[#222222] w-5/6">
            Casa Mulé está diseñada para combinar la naturaleza, el lujo y el
            confort ofreciendo una experiencia única, desde las impresionantes
            puestas de sol hasta la más relajante brisa del océano, disfrutando
            de las cálidas aguas del mar caribe mientras los huéspedes son
            atendidos por nuestro equipo para así tener una experiencia
            inolvidable.
          </p>
          <p className="mt-6 text-base text-[#222222] font-semibold">
            El espacio...
          </p>
          <div className="pt-6 flex items-center opacity-95 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1 font-semibold text-base">
              Mostrar más
            </p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
          </div>

          <hr className="my-8" />
          <div>
            <p className="font-semibold text-xl">Lo que este lugar ofrece</p>
            <div className="grid grid-cols-2">
              <div className="col-span-1 w-2/3">
                <div className="flex items-center pt-6 pb-2">
                  <img className="h-6 w-6" src={frame} alt="frame" />
                  <p className="pl-6 text-base text-[#222222]">
                    Vista a la bahía
                  </p>
                </div>
                <div className="flex items-center py-2">
                  <img className="h-6 w-6" src={beach} alt="beach" />
                  <p className="pl-6 text-base text-[#222222]">
                    Acceso a playa Privado - Frente a la playa
                  </p>
                </div>
                <div className="flex items-center py-2">
                  <img className="h-6 w-6" src={wifi} alt="wifi" />
                  <p className="pl-6 text-base text-[#222222]">WiFi</p>
                </div>
                <div className="flex items-center py-2">
                  <img className="h-6 w-6" src={pool} alt="pool" />
                  <p className="pl-6 text-base text-[#222222]">
                    Piscina Privado, exterior: disponible todo el año, abierto
                    las 24 horas, infinita
                  </p>
                </div>
                <div className="flex items-center py-2">
                  <img
                    className="h-6 w-6"
                    src={no_detector}
                    alt="no_detector"
                  />
                  <p className="pl-6 text-base text-[#222222] line-through">
                    Detector de monóxido de carbono
                  </p>
                </div>
              </div>
              <div className="col-span-1 w-2/3">
                <div className="flex items-center pt-6 pb-2">
                  <img className="h-6 w-6" src={frame} alt="frame" />
                  <p className="pl-6 text-base text-[#222222]">
                    Vista al océano
                  </p>
                </div>
                <div className="flex items-center py-2">
                  <img className="h-6 w-6" src={food} alt="food" />
                  <p className="pl-6 text-base text-[#222222]">Cocina</p>
                </div>
                <div className="flex items-center py-2">
                  <img className="h-6 w-6" src={parking} alt="parking" />
                  <p className="pl-6 text-base text-[#222222]">
                    Estacionamiento gratuito en las instalaciones
                  </p>
                </div>
                <div className="flex items-center py-2">
                  <img className="h-6 w-6" src={camera} alt="camera" />
                  <p className="pl-6 text-base text-[#222222]">
                    Cámaras de seguridad en la propiedad
                  </p>
                </div>
                <div className="flex items-center py-2">
                  <img className="h-6 w-6" src={no_smoke} alt="no_smoke" />
                  <p className="pl-6 text-base text-[#222222] line-through">
                    Detector de humo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr className="my-3 mx-20" />
      <section className="mx-10 grid grid-cols-3 justify-around p-10 lg:px-8">
        <p className="col-span-3 font-semibold text-2xl pb-2">
          Lo que debes saber
        </p>
        <div className="col-span-1">
          <p className="py-2 font-semibold text-base">Reglas de la casa</p>
          <p className="py-2 text-sm">El check-in es a partir de las 15:00</p>
          <p className="py-2 text-sm">La salida es antes de las 11:00</p>
          <p className="py-2 text-sm">Se admiten mascotas</p>
          <div className="pt-2 flex items-center opacity-95 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1 font-semibold">Mostrar más</p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
          </div>
        </div>
        <div className="col-span-1">
          <p className="py-2 font-semibold text-base">Seguridad y propiedad</p>
          <p className="py-2 text-sm">No hay alarma de monóxido de carbono</p>
          <p className="py-2 text-sm">No hay alarma de humo</p>
          <p className="py-2 text-sm">
            Cámara de seguridad/dispositivo de grabación
          </p>
          <div className="pt-2 flex items-center opacity-95 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1 font-semibold">Mostrar más</p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
          </div>
        </div>
        <div className="col-span-1">
          <p className="py-2 font-semibold text-base">
            Política de cancelación
          </p>
          <p className="py-2 text-sm">Cancelación gratuita por 48 horas.</p>
          <p className="py-2 text-sm">
            Consulta la política de cancelación completa del anfitrión, que se
            aplica incluso si cancelas por problemas de salud, incluidos
            aquellos causados por la COVID-19.
          </p>
          <div className="pt-2 flex items-center opacity-95 hover:opacity-100 hover:cursor-pointer">
            <p className="underline pr-1 font-semibold">Mostrar más</p>
            <img className="h-3 w-3" src={arrowr} alt="Mostrar más" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainItem;
