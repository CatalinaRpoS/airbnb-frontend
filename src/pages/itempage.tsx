import FooterItem from "../components/footeritem";
import Header from "../components/header";
import MainItem from "../components/mainitem";
import { useEffect, useState } from "react";

const ItemPage = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header showDetails={false} windowWidth={windowWidth} />
      <MainItem windowWidth={windowWidth} />
      <FooterItem />
    </div>
  );
};

export default ItemPage;
