const MapContainer: React.FC = () => {
  return (
    <iframe
      title="Mapa de Google"
      width="100%"
      height="450"
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17317.113998563247!2d-75.59288764719118!3d9.52362337284007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e590374a0dc1121%3A0x986dbe3865c06cd0!2sSantiago%20de%20Tol%C3%BA%2C%20Sucre!5e0!3m2!1ses-419!2sco!4v1711557582254!5m2!1ses-419!2sco"
    ></iframe>
  );
};

export default MapContainer;