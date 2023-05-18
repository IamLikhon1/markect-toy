import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const singleData=useLoaderData();
    console.log(singleData);
    const{picture,name,sellerEmail,sellerName,price,rating,quantity,description}=singleData
    return (
        <div>
            <div className="text-3xl text-center text-violet-500 my-10">Single Toys Information</div>
            <div className="flex justify-center my-20"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
                            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Toy Picture"/></figure>
                <div className="card-body rounded-2xl hover:bg-sky-300">
                    <h2 className="card-title">Toy Name: {name}</h2>
                    <p className="mt-2 font-medium font-serif">Seller Name: {sellerName}</p>
                    <p className="mt-2 font-medium font-serif">Seller Email: {sellerEmail}</p>
                    <p className="mt-2 font-medium font-serif">Price: ${price}</p>
                    <p className="mt-2 font-medium font-serif">Rating: {rating}</p>
                    <p className="mt-2 font-medium font-serif">Available Quantity: {quantity}</p>
                    <p className="mt-2 font-medium font-serif">Detail Description: {description}</p>
                   
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;