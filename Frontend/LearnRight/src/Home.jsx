import NavLinks from "./Components/NavLinks";
import ProductInfo from "./Components/SubComponent/ProductIntro";

const Home = () => {
  return (
    <div className="bg-home bg-cover bg-center h-screen">
      <NavLinks/>
      <ProductInfo/>
    </div>
  );
}

export default Home;