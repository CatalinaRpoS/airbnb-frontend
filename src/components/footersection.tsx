import world from "../assets/svg_assets/world.svg";
import facebook from "../assets/svg_assets/facebook.svg";
import twitter from "../assets/svg_assets/twitter.svg";
import instagram from "../assets/svg_assets/instagram.svg";

const FooterSection: React.FC = () => {
  return (
    <>
      <section className="help grid p-10 pb-0 lg:grid-cols-3 lg:p-8">
        <div className="lg:col-span-1">
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
        <hr className="my-4 lg:hidden" />
        <div className="lg:col-span-1">
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
        <hr className="my-4 lg:hidden" />
        <div className="lg:col-span-1">
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
      <section className="terms flex flex-col items-start p-4 md:items-center lg:flex-row-reverse lg:justify-between lg:px-8 ">
        <div className="flex items-center p-4 lg:px-8">
          <img className="h-5 w-auto" src={world} alt="Language" />
          <p className="pl-2 font-semibold hover:underline">Español (CO)</p>
          <p className="pl-4 text-lg font-semibold">$</p>
          <p className="pl-2 font-semibold hover:underline">COP</p>
          <div className="hidden md:flex">
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

        <div className="items-center p-4 md:flex md:flex-col md:p-0 lg:flex-row">
          <div className="mx-2 flex justify-start md:justify-center">
            © 2024 Airbnb, Inc.
            <span className="hidden pl-2 lg:flex">·</span>
          </div>

          <div className="flex flex-wrap">
            <a
              className="mx-2 flex hover:underline"
              href="https://www.airbnb.com.co/help/article/2855"
            >
              Privacidad
            </a>
            <span>·</span>
            <a
              className="mx-2 flex hover:underline"
              href="https://www.airbnb.com.co/help/article/2908"
            >
              Términos
            </a>
            <span>·</span>
            <a
              className="mx-2 flex hover:underline"
              href="https://www.airbnb.com.co/sitemaps/v2"
            >
              Mapa del sitio
            </a>
            <span>·</span>
            <a
              className="mx-2 flex hover:underline"
              href="https://www.airbnb.com.co/about/company-details"
            >
              Datos de la empresa
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
