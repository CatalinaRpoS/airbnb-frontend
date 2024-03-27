import FooterItem from "../components/footeritem";
import Header from "../components/header";
import MainItem from "../components/mainitem";

const ItemPage = () => {
  return (
    <div>
      <Header showDetails={false}/>
        <MainItem />
        <FooterItem/>
    </div>
  );
};

export default ItemPage;