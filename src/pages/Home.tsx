import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import ProductSection from "../components/sections/ProductSection";
import FramePrimarySection from "../components/sections/FramePrimarySection";
import CategorySection02 from "../components/sections/CategorySection02";
import FrameSecondarySection from "../components/sections/FrameSecondarySection";
import FrameDedicationSection from "../components/sections/FrameDedicationSection";
import GalerySection from "../components/sections/GalerySection";
import TestimonialSection from "../components/sections/TestimonialSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <FramePrimarySection />
      <CategorySection02 />
      <FrameSecondarySection />
      <FrameDedicationSection />
      <GalerySection />
      <TestimonialSection />
    </>
  );
};

export default Home;
