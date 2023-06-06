import Banner from "./Banner";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import Movies from "./Movie/Movies";
import NewsLetter from "./NewsLetter/NewsLetter";
import OurServies from "./OurServies";


const Home = () => {
    return (
        <div>
            <Banner/>
            <OurServies/>
            <Movies/>
            <MiddleBanner/>
            <NewsLetter/>
        </div>
    );
};

export default Home;