import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

const MainPage = () => {
  return (
    <div>
      <Header showDetails={true} />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
