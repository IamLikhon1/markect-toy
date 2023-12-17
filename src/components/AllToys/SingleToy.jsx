import { useLoaderData } from "react-router-dom";
import TitleComponent from "../../NewComponents/TitleComponent/TitleComponent";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import {  FaStar } from "react-icons/fa";
import { MdOutlineToys } from "react-icons/md";

const SingleToy = () => {
    const singleData = useLoaderData();
    const { picture, name, email, sellerName, price, rating, quantity, description,category } = singleData;
    // console.log(category);
    return (
        <div className="container mx-auto">
            <TitleComponent title="Toys Cars World" subTitle="More Information About This Toy" />

            <div className="grid md:grid-cols-2 mx-5 my-10 md:my-16 gap-10 md:gap-12">
                {/* for img */}
                <div className="py-10 px-8 md:px-0 shadow rounded-lg border items-center">

                    <img src={picture} className="md:h-96 h-full mx-auto rounded-lg" alt="" />

                </div>

                {/* for Text */}
                <div className="">
                    <h2 className="text-3xl text-start font-semibold">{name}</h2>
                    <h4 className="text-start text-[#12AEE0] text-2xl mt-3 font-medium">${price}.00</h4>
                    <p className="mt-5 text-[#646672] "> <span className="uppercase font-semibold">{description}</span>. <br /> <br />
                        Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor. <br /> <br />

                        Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore.

                    </p>
                    {/* button */}

                    <div className="mt-8 flex gap-3">
                        <button className="px-14 py-4 rounded-full bg-[#12AEE0] text-white text-center flex items-center gap-2 font-semibold"><AiOutlineShoppingCart className="text-xl" />Buy Now</button>

                        <div className="py-4 px-5 rounded-full border  hover:text-sky-500 duration-500 cursor-pointer ">
                            <CiHeart className="items-center text-xl " />
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="font-medium my-2"><span className="font-semibold text-[#181D4E] cursor-pointer">Category:</span> {category}</p>

                        <p className="font-medium my-2"><span className="font-semibold text-[#181D4E] ">Tags: </span>
                         item,  play,  store</p>

                        <p className="font-medium my-2 flex items-center gap-1"><span className="font-semibold text-[#181D4E] ">Ratings: </span>
                         {rating} <FaStar  className="text-yellow-300" /></p>

                        <p className="font-medium my-2 flex items-center gap-1"><span className="font-semibold text-[#181D4E] ">Quantity: </span>
                         {quantity} <MdOutlineToys  className="" /></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleToy;