import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

const MainPage = () => {
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

  const calculateElementCount = (flag: boolean) => {
    if (windowWidth >= 1200 && flag) {
      return 7;
    } else if (windowWidth >= 1000 && flag) {
      return 5;
    } else if (windowWidth >= 880 && flag) {
      return 4;
    } else if (windowWidth >= 768 && flag) {
      return 3;
    } else if (windowWidth >= 720 && !flag) {
      return 7;
    } else if (windowWidth >= 650) {
      return 5;
    } else if (windowWidth >= 512) {
      return 4;
    } else {
      return 3;
    }
  };

  const elementsH = calculateElementCount(true);
  const elementsF = calculateElementCount(false);

  return (
    <div>
      <Header showDetails={true} windowWidth={windowWidth} />
      <Main elementsToShow={elementsH} />
      <Footer elementsToShow={elementsF} />
    </div>
  );
};

export default MainPage;
