import Brand from "../../NewComponents/Brand/Brand";
import CategorySection from "../../NewComponents/CategorySection/CategorySection";
import CreativeComponent from "../../NewComponents/Creative/CreativeComponent";
import ExtraOneSection from "../../NewComponents/ExtraOneSection/ExtraOneSection";
import ExtraTwoSection from "../../NewComponents/ExtraTwoSection/ExtraTwoSection";
import UseTitle from "../../hooks/UseTitle";
import Banner from "../Banner/Banner";
// import Gallery from "../Gallary/Gallery";
import TabBars from "../TabBars/TabBars";
import Tranding from "../Tranding/Tranding";

const Home = () => {
    UseTitle('Home')
    return (
        <div className=" overflow-x-hidden">

            <Banner />

            <CategorySection />

            <TabBars />

            <CreativeComponent/>

            <Tranding />

            <ExtraOneSection />

            <ExtraTwoSection />

            <Brand />
        </div>
    );
};

export default Home;