import useTitle from "../../../hooks/useTitle";
import Reviews from "../../CustomesRe/Reviews";
import Gallery from "../../Gallery/Gallery";
import ConnectUs from "../../GiveMessage/ConnectUs";
import PhGallery from "../../PhGallery/PhGallery";
import Tabls from "../../Tabs/Tabls";
import Banner from "../Banner/Banner";


const Home = () => {

  useTitle("Toys Center|Home")
  return (
    <div>

      <Banner></Banner>
      <Gallery></Gallery>
      <PhGallery></PhGallery>
      <Tabls></Tabls>
      <Reviews></Reviews>
      <ConnectUs></ConnectUs>


    </div>
  );
};

export default Home;