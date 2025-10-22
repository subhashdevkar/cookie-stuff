import Fearture from "../components/featureSection/FeatureSection";
import SliderSection from "../components/slider/slider";
import ContactUs from "../components/contactUs/ContactUs";
import SwiperSlider from "../components/swiper-slider/SwiperSlider";
import FreeRecipes from "../components/freeRecipes/FreeRecipes";
import HealthyRecipes from "../components/healthyRecipes/HealthyRecipes";
import ReadPost from "../components/readPostsSection/ReadPost";

const Home = () => {
  return (
    <div id="home">
      <SliderSection />
      <Fearture />
      <FreeRecipes backgroundColor={"#fff2f2"} />
      <HealthyRecipes />
      <ReadPost />
      <SwiperSlider />
      <ContactUs />
    </div>
  );
};

export default Home;
