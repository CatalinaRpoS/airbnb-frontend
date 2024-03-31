import translate from "../assets/svg_assets/translate.svg";
import share from "../assets/svg_assets/share.svg";
import save from "../assets/svg_assets/save.svg";
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
import ShowMore from "../elements/showmore";
import PlaceImages from "../elements/placeimages";
import MapContainer from "../elements/mapcontainer";

const MainItem: React.FC = () => {
  return (
    <main className="text-black">
      <div className="mx-20 my-3 flex items-center justify-between pt-3">
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
          <div className="flex items-center pl-4">
            <img className="h-4 w-4" src={save} alt="guardar" />
            <p className="pl-2 text-sm font-semibold underline">Guardar</p>
          </div>
        </div>
      </div>
      <PlaceImages />
      <section className="grid justify-around px-5 md:mx-10 md:grid-cols-3 md:px-10 lg:px-8">
        <div className="col-span-2">
          <div>
            <p className="text-2xl font-semibold">
              Alojamiento entero en Santiago de Tolú, Colombia
            </p>
            <p className="pb-2 text-base">
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
          <p className="mt-8 text-base text-[#222222] md:w-5/6">
            Casa Mulé está diseñada para combinar la naturaleza, el lujo y el
            confort ofreciendo una experiencia única, desde las impresionantes
            puestas de sol hasta la más relajante brisa del océano, disfrutando
            de las cálidas aguas del mar caribe mientras los huéspedes son
            atendidos por nuestro equipo para así tener una experiencia
            inolvidable.
          </p>
          <p className="mt-6 hidden text-base font-semibold text-[#222222] lg:flex">
            El espacio...
          </p>
          <ShowMore />

          <hr className="my-8" />
          <div>
            <p className="text-xl font-semibold">Lo que este lugar ofrece</p>
            <div className="grid md:grid-cols-2">
              <div className="col-span-1 w-2/3">
                <div className="flex items-center pb-2 pt-6">
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
              <div className="hidden w-2/3 md:col-span-1 md:grid">
                <div className="flex items-center pb-2 pt-6">
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
              <button className="mt-7 flex w-56 items-center justify-center rounded-lg border border-black px-4 py-3 hover:bg-gray-100">
                <span className="text-base font-semibold text-black">
                  Mostrar los 47 servicios
                </span>
              </button>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="mt-12">
            <p className="text-xl font-semibold">
              7 noches en Santiago de Tolú
            </p>
            <p className="pt-2 text-sm text-[#717171]">
              15 de ene. de 2025 - 22 de ene. de 2025
            </p>
          </div>
        </div>
      </section>
      <hr className="mx-20 my-3" />

      <section className="mx-10 lg:px-8">
        <div className="mt-12">
          <p className="text-2xl font-semibold">1 reseña</p>
          <p className="pt-2 text-sm text-[#717171]">
            La calificación promedio aparecerá después de 3 reseñas
          </p>
        </div>
        <div className="mt-4 grid rounded-lg border p-4 shadow-lg md:rounded-none md:border-none md:p-0 md:shadow-none">
          <div className="row-start-2 items-center pt-8 md:row-start-1">
            <div className="flex">
              <img
                className="h-12 w-12 rounded-full"
                src={profile_photo}
                alt="photo"
              />
              <div className="pl-3">
                <p className="text-base font-semibold">Raffa</p>
                <p className="text-sm text-[#717171]">Ocaña, Colombia</p>
              </div>
            </div>
          </div>

          <div className="row-start-1 md:row-start-2">
            <div className="md:mt-5">
              <p className="flex items-center pb-2 text-sm">
                <img className="h-2.5 w-2.5" src={star} alt="" />
                <img className="h-2.5 w-2.5" src={star} alt="" />
                <img className="h-2.5 w-2.5" src={star} alt="" />
                <img className="h-2.5 w-2.5" src={star} alt="" />
                <img className="h-2.5 w-2.5" src={star} alt="" />
                <span> · </span>{" "}
                <p className="px-1 text-xs font-semibold md:text-sm">
                  Hace 2 semana
                </p>
                <span className="hidden md:flex"> · </span>
                <p className="hidden px-1 text-[#717171] md:flex">En grupo</p>
              </p>
            </div>
            <div>
              <p className="text-base lg:w-2/5">
                lugar agradable para hospedarse, con mucha privacidad,
                tranquilidad y personal atento a las necesidades del hospedero
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-10 lg:px-8">
        <div className="mt-12">
          <p className="text-2xl font-semibold">A dónde irás</p>
          <p className="pt-2 text-sm text-[#717171]">
            Santiago de Tolú, Sucre, Colombia
          </p>
        </div>
        <div className="my-7">
          <MapContainer />
        </div>
        <ShowMore />
      </section>

      <br />
      <hr className="mx-20 my-3" />
      <section className="grid grid-cols-1 justify-around gap-4 p-6 md:grid-cols-3 md:p-10 lg:mx-10 lg:px-8">
        <p className="hidden pb-2 text-2xl font-semibold md:row-start-1 md:grid">
          Lo que debes saber
        </p>
        <div className="row-start-2 md:row-start-2">
          <p className="pt-2 text-xl font-semibold md:text-base">
            Reglas de la casa
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            El check-in es a partir de las 15:00
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            La salida es antes de las 11:00
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            Se admiten mascotas
          </p>
          <ShowMore />
          <hr className="mt-6 md:hidden" />
        </div>

        <div className="row-start-3 md:row-start-2">
          <p className="pt-2 text-xl font-semibold md:text-base">
            Seguridad y propiedad
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            No hay alarma de monóxido de carbono
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            No hay alarma de humo
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            Cámara de seguridad/dispositivo de grabación
          </p>
          <ShowMore />
        </div>

        <div className="row-start-1 md:row-start-2">
          <p className="pt-2 text-xl font-semibold md:text-base">
            Política de cancelación
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            Cancelación gratuita por 48 horas.
          </p>
          <p className="py-2 text-sm text-[#717171] md:text-base md:text-black">
            Consulta la política de cancelación completa del anfitrión, que se
            aplica incluso si cancelas por problemas de salud, incluidos
            aquellos causados por la COVID-19.
          </p>
          <ShowMore />
          <hr className="mt-6  md:hidden" />
        </div>
      </section>
    </main>
  );
};

export default MainItem;
