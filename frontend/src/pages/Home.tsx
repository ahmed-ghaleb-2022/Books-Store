
import Banner from "../components/Banner/Banner";
import BestSellerBooks from "../components/BestSellerBooks/BestSellerBooks";
import FavBooks from "../components/FavBooks/FavBooks";
import MyFooter from "../components/MyFooter/MyFooter";
import Navbar from "../components/Navbar";
import OtherBooks from "../components/OtherBooks/OtherBooks";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Reviews from "../components/Reviews/Reviews";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BestSellerBooks />
      <FavBooks />
      <PromoBanner />
      <OtherBooks />
      <Reviews />
      <MyFooter />
    </div>
  );
};

export default Home;
