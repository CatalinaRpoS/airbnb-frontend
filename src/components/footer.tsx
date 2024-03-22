import "../styles/footer.css";
import world from "../assets/world.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";


const Footer = () => {
    return (
        <footer className="bg-white">
            <section>

            </section>
            <br />
            <hr />
            <section className="flex justify-around p-4 lg:px-8">
                <div>
                    <p className="font-semibold">Asistencia</p>
                </div>
                <div>
                    <p className="font-semibold">Modo anfitrión</p>
                </div>
                <div>
                    <p className="font-semibold">Airbnb</p>
                </div>
            </section>
            <br />
            <hr />
            <section className="flex justify-between p-4 lg:px-8">
                <div className="flex">
                    <div className="flex mx-2">© 2024 Airbnb, Inc.</div>
                    <span>·</span>
                    <a className="flex mx-2 hover:underline" href="https://www.airbnb.com.co/help/article/2855">Privacidad</a>
                    <span>·</span>
                    <a className="flex mx-2 hover:underline" href="https://www.airbnb.com.co/help/article/2908">Términos</a>
                    <span>·</span>
                    <a className="flex mx-2 hover:underline" href="https://www.airbnb.com.co/sitemaps/v2">Mapa del sitio</a>
                    <span>·</span>
                    <a className="flex mx-2 hover:underline" href="https://www.airbnb.com.co/about/company-details">Datos de la empresa</a>
                </div>
                <div>
                    <div className="flex items-center">
                        <img
                            className="h-5 w-auto"
                            src={world}
                            alt="Language"
                        />
                        <p className="font-semibold pl-2 hover:underline">Español (CO)</p>
                        <p className="font-semibold pl-4 text-lg">$</p>
                        <p className="font-semibold pl-2 hover:underline">COP</p>
                        <a href="https://www.facebook.com/AirbnbLatam" className="pl-6">
                            <img
                                className="h-5 w-auto"
                                src={facebook}
                                alt="Ir a Facebook"
                            />
                        </a>
                        <a href="https://twitter.com/airbnb" className="pl-4">
                            <img
                                className="h-5 w-auto"
                                src={twitter}
                                alt="Ir a Twitter"
                            />
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