import Banner from "../Components/Banner";
import CustomersSay from "../Components/CustomerSay";
import Download from "../Components/Download";
import OurService from "../Components/OurService";
import TopItems from "../Components/TopItems";

const Home = () => {
  
  return (
    <div className="">
      <Banner/>
      <TopItems/>
      <OurService/>
      <CustomersSay/>
      <Download/>
    </div>
  );
};

export default Home;
