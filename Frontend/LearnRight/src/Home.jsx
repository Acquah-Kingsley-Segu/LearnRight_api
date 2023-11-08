import { Outlet } from "react-router-dom";
import NavLinks from "./Components/NavLinks";
import ProductInfo from "./Components/SubComponent/ProductIntro";

const Home = () => {
  return (
    <div className="bg-home bg-cover bg-center flex flex-col h-screen">
      <div className="w-full flex-1">
        <NavLinks/>
        <ProductInfo/>
      </div>
      <Outlet/>
    </div>
  );
}

export default Home;