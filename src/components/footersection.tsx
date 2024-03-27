
import world from "../assets/world.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const FooterSection: React.FC = () => {
    return (
    <>
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
    </>
    );
};

export default FooterSection;
