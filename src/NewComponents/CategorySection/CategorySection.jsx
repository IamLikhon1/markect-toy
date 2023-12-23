import TitleComponent from "../TitleComponent/TitleComponent";

const CategorySection = () => {
    return (
        <div className="my-20">
            {/* title */}
            <TitleComponent title="CATEGORIES" subTitle="We design toys not just for kids but with kids"/>

            <div className="mt-14 grid md:grid-cols-4 container mx-auto">

                {/* imgOne */}
                <div className="cursor-pointer hover:scale-110 duration-500">
                    <img className="h-52 w-[320px] rounded-xl mx-auto " src="https://img.freepik.com/free-photo/white-easter-car-with-blue-egg-pink-background_23-2149301329.jpg?w=1060&t=st=1702733102~exp=1702733702~hmac=78980c4be7ff7bbdc43d0587f40587c7b8b92e08b2072498ebc562556ab6937a" alt="" />
                    <p className="relative bottom-10 left-12 font-bold text-white text-xl">Mini Cars</p>
                </div>

                {/* imgTwo */}
                <div className="cursor-pointer hover:scale-110 duration-500">
                    <img className="h-52 w-[320px] rounded-xl mx-auto " src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318377.jpg?w=1380&t=st=1702733526~exp=1702734126~hmac=6fb7c8fa419ac73c96df9cacc0c8268c335a04e9b94ed558598ff13134783d9e" alt="" />
                    <p className="relative bottom-10 left-12 font-bold text-white text-xl">Trucks</p>
                </div>

                {/* imgThree */}
                <div className="cursor-pointer hover:scale-110 duration-500">
                    <img className="h-52 w-[320px] rounded-xl mx-auto " src="https://img.freepik.com/premium-photo/easter-car-with-dotted-egg_23-2149301317.jpg?w=1380" alt="" />
                    <p className="relative bottom-10 left-12 font-bold text-white text-xl">Classic Cars</p>
                </div>

                {/* imgFour */}
                <div className="cursor-pointer hover:scale-110 duration-500">
                    <img className="h-52 w-[320px] rounded-xl mx-auto " src="https://img.freepik.com/free-photo/pink-easter-car-still-life_23-2149301272.jpg?w=1380&t=st=1702733895~exp=1702734495~hmac=21895fa709804a57dce4b62391bc8241feccf7ddd4c0e01eb05742b1aa62783d" alt="" />
                    <p className="relative bottom-10 left-12 font-bold text-white text-xl">Jeeps</p>
                </div>

            </div>

        </div>
    );
};

export default CategorySection;