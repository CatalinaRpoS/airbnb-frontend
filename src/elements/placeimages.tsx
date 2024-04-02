const PlaceImages: React.FC = () => {
  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/defd5cac-2763-44d4-bbdd-9f7a59c2359d.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/3a46cf50-b38c-488a-81ce-69f270f46eb3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/85236caf-c35e-41af-89a4-87402fab6bc3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/118d09e1-f793-4c50-b8b6-dea166070c1a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1003548971445736385/original/c3bcba17-9a52-4fad-a08e-1dff42b47ce9.jpeg?im_w=720",
  ];

  return (
    <div className="my-5 grid h-72 grid-cols-4 grid-rows-2 gap-2 md:mx-10 lg:mx-20">
      <img
        src={images[0]}
        alt="Imagen 1"
        className="col-span-2 row-span-2 h-full w-full rounded-bl-lg rounded-tl-lg object-cover"
      />
      <img
        src={images[1]}
        alt="Imagen 2"
        className="row-span-1 h-full w-full object-cover"
      />
      <img
        src={images[3]}
        alt="Imagen 3"
        className="row-span-1 h-full w-full rounded-tr-lg object-cover"
      />
      <img
        src={images[2]}
        alt="Imagen 4"
        className="row-span-1 h-full w-full object-cover"
      />
      <img
        src={images[4]}
        alt="Imagen 5"
        className="row-span-1 h-full w-full rounded-br-lg object-cover"
      />
    </div>
  );
};

export default PlaceImages;
