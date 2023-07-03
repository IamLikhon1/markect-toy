import UseTitle from "../../hooks/UseTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallary/Gallery";
import Services from "../Services/Services";
import TabBars from "../TabBars/TabBars";
import Tranding from "../Tranding/Tranding";

const Home = () => {
    UseTitle('Home')
    return (
        <div className=" overflow-x-hidden">
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
            <Services></Services>
            {/* services */}
            {/* services */}
        </div>
    );
};

export default Home;