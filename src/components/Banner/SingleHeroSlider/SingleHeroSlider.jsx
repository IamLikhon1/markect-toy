import Lottie from "lottie-react";
import starAnimation from '../../../assets/Star.json'
const SingleHeroSlider = ({ slider }) => {
    const { bg } = slider
    return (
        <div className="">
            <img className="w-full h-[620px]" src={bg} alt="" />
            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#0c0c0c] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-10 md:space-y-12 pl-3 md:pl-12 w-full text-start'>
                        <h2
                            className='text-4xl md:text-6xl font-bold '>
                            Pick The Best Toy <br /> For Your Kid
                        </h2>
                        {/* show on lg */}
                        <p className="md:text-start md:text-2xl hidden md:block">
                           We offer premium service, weather your are shopping  <br /> at one of our flagship stores or via our website.
                        </p>
                        {/* show on small */}
                        <p className="md:hidden block text-center pr-2">
                           We offer premium service, weather your are shopping  at one of our flagship stores or via our website.
                        </p>
                    </div>

                    {/* animation */}

                    <div className=" hidden md:block relative right-48 bottom-24 rotate-90 ">
                    <Lottie className="w-64" animationData={starAnimation} loop={true} />
                    </div>

                </div>
            </div>
            );
};

            export default SingleHeroSlider;