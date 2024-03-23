import "../styles/footer.css";
import world from "../assets/world.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";


const Footer = () => {
    return (
        <footer className="bg-slate-50">
            <section className="p-10">
                <div>
                    <p className="font-semibold text-2xl">Inspiración para escapadas futuras</p>
                </div>
                <div className="mt-4 pb-5">
                    <ul className="list-none flex">
                        <li className="mr-4 active:font-semibold hover:cursor-pointer">Popular</li>
                        <li className="mr-4 active:font-semibold hover:cursor-pointer">Arte y cultura</li>
                        <li className="mr-4 active:font-semibold hover:cursor-pointer">Al aire libre</li>
                        <li className="mr-4 active:font-semibold hover:cursor-pointer">Montañas</li>
                        <li className="mr-4 active:font-semibold hover:cursor-pointer">Playa</li>
                        <li className="mr-4 active:font-semibold hover:cursor-pointer">Categorías</li>
                        <li className="mr-4 active:font-semibold hover:cursor-pointer">Actividades</li>
                    </ul>
                </div>
                <div>
                <hr />
                <div className="grid grid-cols-6 pt-5 gap-4">
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Canmore</p>
                        <p>Chalés vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Benalmádena</p>
                        <p>Casas vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Marbella</p>
                        <p>Casas de campo vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Mijas</p>
                        <p>Casas vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Prescott</p>
                        <p>Casas vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Scottdale</p>
                        <p>Mansiones vacacionales</p>
                    </div>

                    {/* fila 2 */}
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Tucson</p>
                        <p>Mansiones vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Jasper</p>
                        <p>Cabañas vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Mountain View</p>
                        <p>Casas vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Devon port</p>
                        <p>Alquileres vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Mallacoota</p>
                        <p>Casas vacacionales en la playa</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Ibiza</p>
                        <p>Alquileres vacacionales</p>
                    </div>
                   

                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Anaheim</p>
                        <p>Casas vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Monterey</p>
                        <p>Condominios vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Paso Robles</p>
                        <p>Casas vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Santa Bárbara</p>
                        <p>Alojamientos vacacionales</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Sonoma</p>
                        <p>Casas vacacionales en la playa</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer">
                        <p className="font-semibold">Mostrar más ▼</p>
                    </div>
                </div>

                </div>
            </section>
            <br />
            <hr />

            <section className="grid grid-cols-3 justify-around p-10 lg:px-8">
                <div className="col-span-1">
                    <p className="font-semibold">Asistencia</p>
                    <ul className="grid grid-cols-1 justify-around">
                    <li className="py-3 hover:underline">Centro de ayuda</li>
                    <li className="pb-3 hover:underline">AirCover</li>
                    <li className="pb-3 hover:underline">Antidiscriminación</li>
                    <li className="pb-3 hover:underline">Apoyo para discapacitados</li>
                    <li className="pb-3 hover:underline">Problemas de cancelación</li>
                    <li className="pb-3 hover:underline">Problemas de vecindario</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <p className="font-semibold">Modo anfitrión</p>
                    <ul className="grid grid-cols-1 justify-around">
                    <li className="py-3 hover:underline">Pon tu espacio en Airbnb</li>
                    <li className="pb-3 hover:underline">AirCover para anfitriones</li>
                    <li className="pb-3 hover:underline">Recursos para anfitrionar</li>
                    <li className="pb-3 hover:underline">Foro comunitario</li>
                    <li className="pb-3 hover:underline">Anfitriona con responsabilidad</li>
                    <li className="pb-3 hover:underline">Súmate a una clase gratuita sobre la actividad de los anfitriones</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <p className="font-semibold">Airbnb</p>
                    <ul className="grid grid-cols-1 justify-around">
                    <li className="py-3 hover:underline">Sala de prensa</li>
                    <li className="pb-3 hover:underline">Funciones nuevas</li>
                    <li className="pb-3 hover:underline">Carreras</li>
                    <li className="pb-3 hover:underline">Inversionistas</li>
                    <li className="pb-3 hover:underline">Espacios de Airbnb.org</li>
                    </ul>
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