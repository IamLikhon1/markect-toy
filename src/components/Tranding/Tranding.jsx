import Marquee from "react-fast-marquee";
import {  FaStar } from 'react-icons/fa';

const Tranding = () => {
    return (
        <div className="mx-10 my-16">
            <h2 className="text-5xl  text-center font-serif text-violet-500 font-medium my-16">Our Trending Products</h2>
           <Marquee pauseOnHover={true}>
           <div className="grid md:grid-cols-3 gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-80" src="https://img.freepik.com/premium-photo/transportation-travel-concept_93675-1091.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Sports Car</h2>
                <div className="flex text-yellow-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
               <p>Price:$20.00</p> 
               <button className="btn btn-primary">Buy Now</button>
               
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-80" src="https://img.freepik.com/premium-photo/blue-rc-toy-suv-truck-car-asphalt-ground_43538-27.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Truck</h2>
                <div className="flex text-yellow-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
               <p>Price:$25.00</p> 
               <button className="btn btn-secondary">Buy Now</button>

               
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-80" src="https://img.freepik.com/premium-photo/police-car-toys-isolated-white-background_41158-16765.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Police Car</h2>
                <div className="flex text-yellow-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
               <p>Price:$10.00</p> 
               <button className="btn btn-success">Buy Now</button>

               
            </div>
            </div>
            </div>
           </Marquee>
        </div>
    );
};

export default Tranding;