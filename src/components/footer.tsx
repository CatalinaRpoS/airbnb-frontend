import "../styles/footer.css";
import world from "../assets/world.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import arrowd from "../assets/arrow_do.svg";

const Footer: React.FC = () => {
  const highlightText = (id: number) => {
    const element = document.getElementById(`text-${id}`);
    if (element) {
      element.classList.add("text-black", "font-semibold");
    }
  };

  const softenText = (id: number) => {
    const element = document.getElementById(`text-${id}`);
    if (element) {
      element.classList.remove("text-black", "font-semibold");
    }
  };

  return (
    <footer className="bg-slate-50">
      <section className="p-10">
        <div>
          <p className="text-black font-semibold text-2xl">
            Inspiración para escapadas futuras
          </p>
        </div>
        <div className="mt-4 pb-5">
          <ul className="list-none flex">
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(1)}
              onMouseLeave={() => softenText(1)}
            >
              <p id="text-1">Popular</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(2)}
              onMouseLeave={() => softenText(2)}
            >
              <p id="text-2">Arte y cultura</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(3)}
              onMouseLeave={() => softenText(3)}
            >
              <p id="text-3">Al aire libre</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(4)}
              onMouseLeave={() => softenText(4)}
            >
              <p id="text-4">Montañas</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(5)}
              onMouseLeave={() => softenText(5)}
            >
              <p id="text-5">Playa</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(6)}
              onMouseLeave={() => softenText(6)}
            >
              <p id="text-6">Categorías</p>
            </li>
            <li
              className="mr-4 hover:cursor-pointer"
              onMouseEnter={() => highlightText(7)}
              onMouseLeave={() => softenText(7)}
            >
              <p id="text-7">Actividades</p>
            </li>
          </ul>
        </div>
        <div>
          <hr />
          <div className="grid grid-cols-6 pt-5 gap-4">
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Canmore</p>
              <p>Chalés vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Benalmádena</p>
              <p>Casas vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Marbella</p>
              <p>Casas de campo vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Mijas</p>
              <p>Casas vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Prescott</p>
              <p>Casas vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Scottdale</p>
              <p>Mansiones vacacionales</p>
            </div>

            {/* fila 2 */}
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Tucson</p>
              <p>Mansiones vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Jasper</p>
              <p>Cabañas vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Mountain View</p>
              <p>Casas vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Devon port</p>
              <p>Alquileres vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Mallacoota</p>
              <p>Casas vacacionales en la playa</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Ibiza</p>
              <p>Alquileres vacacionales</p>
            </div>

            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Anaheim</p>
              <p>Casas vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Monterey</p>
              <p>Condominios vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Paso Robles</p>
              <p>Casas vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Santa Bárbara</p>
              <p>Alojamientos vacacionales</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <p className="text-black font-semibold">Sonoma</p>
              <p>Casas vacacionales en la playa</p>
            </div>
            <div className="col-span-1 hover:cursor-pointer">
              <div className="flex">
               <p className="text-black font-semibold m-2">Mostrar más</p>
               <img className="h-3 w-3 mt-3" src={arrowd} alt="Mas opciones" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="help grid grid-cols-3 justify-around p-10 lg:px-8">
        <div className="col-span-1">
          <p className="font-semibold">Asistencia</p>
          <ul className="grid grid-cols-1 justify-around">
            <li className="py-3 hover:underline">
              <a href="https://www.airbnb.com.co/help/home?from=footer">
                Centro de ayuda
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/aircover">AirCover</a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/against-discrimination">
                Antidiscriminación
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/accessibility">
                Apoyo para discapacitados
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19">
                Opciones de cancelación
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/neighbors">
                Problemas de vecindario
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Modo anfitrión</p>
          <ul className="grid grid-cols-1 justify-around">
            <li className="py-3 hover:underline">
              <a href="https://www.airbnb.com.co/host/homes?from_footer=1">
                Pon tu espacio en Airbnb
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/aircover-for-hosts">
                AirCover para anfitriones
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/resources">
                Recursos para anfitrionar
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/help/community?s=footer">
                Foro comunitario
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/help/responsible-hosting">
                Anfitriona con responsabilidad
              </a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/ambassadors/joinaclass">
                Súmate a una clase gratuita sobre la actividad de los
                anfitriones
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Airbnb</p>
          <ul className="grid grid-cols-1 justify-around">
            <li className="py-3 hover:underline">
              <a href="https://www.airbnb.com.co/press/news">Sala de prensa</a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/release">Funciones nuevas</a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.com.co/careers">Carreras</a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://investors.airbnb.com/">Inversionistas</a>
            </li>
            <li className="pb-3 hover:underline">
              <a href="https://www.airbnb.org/?locale=es-XL">
                Espacios de Airbnb.org
              </a>
            </li>
          </ul>
        </div>
      </section>

      <br />
      <hr />
      <section className="terms flex justify-between p-4 lg:px-8">
        <div className="flex">
          <div className="flex mx-2">© 2024 Airbnb, Inc.</div>
          <span>·</span>
          <a
            className="flex mx-2 hover:underline"
            href="https://www.airbnb.com.co/help/article/2855"
          >
            Privacidad
          </a>
          <span>·</span>
          <a
            className="flex mx-2 hover:underline"
            href="https://www.airbnb.com.co/help/article/2908"
          >
            Términos
          </a>
          <span>·</span>
          <a
            className="flex mx-2 hover:underline"
            href="https://www.airbnb.com.co/sitemaps/v2"
          >
            Mapa del sitio
          </a>
          <span>·</span>
          <a
            className="flex mx-2 hover:underline"
            href="https://www.airbnb.com.co/about/company-details"
          >
            Datos de la empresa
          </a>
        </div>
        <div>
          <div className="flex items-center">
            <img className="h-5 w-auto" src={world} alt="Language" />
            <p className="font-semibold pl-2 hover:underline">Español (CO)</p>
            <p className="font-semibold pl-4 text-lg">$</p>
            <p className="font-semibold pl-2 hover:underline">COP</p>
            <a href="https://www.facebook.com/AirbnbLatam" className="pl-6">
              <img className="h-5 w-auto" src={facebook} alt="Ir a Facebook" />
            </a>
            <a href="https://twitter.com/airbnb" className="pl-4">
              <img className="h-5 w-auto" src={twitter} alt="Ir a Twitter" />
            </a>
            <a href="https://www.instagram.com/airbnb" className="pl-4">
              <img
                className="h-5 w-auto"
                src={instagram}
                alt="Ir a Instagram"
              />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
