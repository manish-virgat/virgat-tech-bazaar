import FeatureProduct from "./components/FeatureProduct";
import Services from "./components/Services";
import "./App.css";

const Home = () => {
  const data = {
    name: "Virgat Tech Bazaar",
  };

  return (
    <>
    <img src="./images/bannerNew.png" className="banner"></img>
      <FeatureProduct />
      <Services />
    </>
  );
};

export default Home;
