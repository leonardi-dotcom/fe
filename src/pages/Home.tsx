import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import ProductSection from "../components/sections/ProductSection";
import FramePrimarySection from "../components/sections/FramePrimarySection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <FramePrimarySection />
    </>
  );
};

export default Home;
