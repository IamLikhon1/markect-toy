import Banner from "../Banner/Banner";
import Gallery from "../Gallary/Gallery";
import TabBars from "../TabBars/TabBars";
import Tranding from "../Tranding/Tranding";

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* banner */}
            {/* Gallery */}
            <Gallery></Gallery>
            {/* Gallery */}
            {/* Tab */}
            <TabBars></TabBars>
            {/* Tab */}
            {/* trending */}
            <Tranding></Tranding>
            {/* trending */}
        </div>
    );
};

export default Home;