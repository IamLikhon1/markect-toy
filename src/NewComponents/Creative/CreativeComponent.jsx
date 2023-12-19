import Lottie from "lottie-react";
import animationCircle from '../../assets/circel.json'
const CreativeComponent = () => {
    return (
        <div className="mx-5 mt-10 md:mt-20 -mb-32 md:-mb-48">
            <div className="grid md:grid-cols-2 gap-5 md:gap-0 container mx-auto">
                {/* first img */}
                <div className="md:mx-auto ">
                    <img className="rounded-xl" src="https://img.freepik.com/free-photo/kid-playing-his-room_23-2149187879.jpg?w=360&t=st=1702962635~exp=1702963235~hmac=51ad18acf5f1cdcaee17512100a9c6977a4df97be7f2b3e51873f8b9fde73efa" alt="" />

                </div>

                {/* text */}
                <div className="text-start">
                    <p className="text-[#181d4e] font-medium mt-5 uppercase">CREATIVE APPROACH</p>
                    <h2 className="text-4xl md:text-5xl text-[#181d4e] font-semibold mt-5">We help you take care of  the kids</h2>
                    <p className="mt-3 text-[#646672]">Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun!

                    </p>
                </div>
                {/* animation */}
                <div className="flex justify-end">
                    <Lottie className="w-24 bottom-80 left-7 md:w-44 relative md:bottom-60 md:-left-32" animationData={animationCircle}  loop={true} />
                </div>
                {/* second img */}
                <div className="relative bottom-28 md:bottom-60 md:right-10">
                    <img className="rounded-xl" src="https://img.freepik.com/free-photo/medium-shot-kids-playing-with-toys-indoors_23-2150126788.jpg?w=1060&t=st=1702963125~exp=1702963725~hmac=fded9c2f9a5c9fe43b5e1eba4ff4d180208a94ef30d0acf3fc855a13dfedb3b4" alt="" />
                </div>

            </div>
        </div>
    );
};

export default CreativeComponent;