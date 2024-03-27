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
      <PlaceImages />
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
          <ShowMore />

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
              <button className="w-56 flex items-center justify-center border border-black hover:bg-gray-100 rounded-lg px-4 py-3 mt-7">
                <span className="text-black text-base font-semibold">Mostrar los 47 servicios</span>
              </button>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="mt-12">
            <p className="font-semibold text-xl">
              7 noches en Santiago de Tolú
            </p>
            <p className="text-sm text-[#717171] pt-2">
              15 de ene. de 2025 - 22 de ene. de 2025
            </p>
          </div>
        </div>
      </section>
      <hr className="my-3 mx-20" />

      <section className="mx-10 lg:px-8">
        <div className="mt-12">
            <p className="font-semibold text-2xl">
              1 reseña
            </p>
            <p className="text-sm text-[#717171] pt-2">
            La calificación promedio aparecerá después de 3 reseñas
            </p>
          </div>
        <div className="flex items-center pt-8">
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
        <div className="mt-5">
            <p className="flex items-center text-sm pb-2">
                  <img className="h-2.5 w-2.5" src={star} alt="" /> 
                  <img className="h-2.5 w-2.5" src={star} alt="" />
                  <img className="h-2.5 w-2.5" src={star} alt="" />
                  <img className="h-2.5 w-2.5"src={star} alt="" />
                  <img className="h-2.5 w-2.5" src={star} alt="" />
                  <span> · </span> <p className="font-semibold px-1">Hace 2 semana</p><span> · </span>
                  <p className="text-[#717171] px-1">En grupo</p>
            </p>
        </div>
        <div>
          <p className="w-2/5 text-base">lugar agradable para hospedarse, con mucha privacidad, tranquilidad y personal atento a las necesidades del hospedero</p>
        </div>
      </section>

      <section className="mx-10 lg:px-8">
        <div className="mt-12">
            <p className="font-semibold text-2xl">
              A dónde irás
            </p>
            <p className="text-sm text-[#717171] pt-2">
              Santiago de Tolú, Sucre, Colombia
            </p>
        </div>
        <div className="my-7">
        <MapContainer />
        </div>
        <ShowMore />
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
          <ShowMore />
        </div>
        <div className="col-span-1">
          <p className="py-2 font-semibold text-base">Seguridad y propiedad</p>
          <p className="py-2 text-sm">No hay alarma de monóxido de carbono</p>
          <p className="py-2 text-sm">No hay alarma de humo</p>
          <p className="py-2 text-sm">
            Cámara de seguridad/dispositivo de grabación
          </p>
          <ShowMore />
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
          <ShowMore />
        </div>
      </section>
    </main>
  );
};

export default MainItem;
