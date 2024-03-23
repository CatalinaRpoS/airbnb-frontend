import "../styles/main.css";
import Items from "./items";

const Main: React.FC = () => {
  return (
    <main className="bg-white">
      <div></div>
      <div className="flex flex-wrap m-6 items-center justify-center">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </main>
  );
};

export default Main;
