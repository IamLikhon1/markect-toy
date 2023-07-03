import {  FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Tranding = () => {

    const handleToast=()=>{
        Swal.fire({
            title: 'Thank You !',
            text: 'For Buy This Toy',
            icon: 'success',
            confirmButtonText: 'Done'
          })
    }
    return (
        <div className="mx-10 my-16"data-aos="zoom-in-up"data-aos-duration="1500">
            <h2 className="text-5xl  text-center font-serif text-violet-500 font-medium my-16">Our Trending Products</h2>
           
           <div className="grid md:grid-cols-3 gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-80" src="https://img.freepik.com/premium-photo/transportation-travel-concept_93675-1091.jpg?w=740" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Truck</h2>
                <div className="flex text-yellow-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
               <p>Price:$20.00</p> 
               <button onClick={handleToast} className="btn btn-info">Buy Now</button>
               
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-80" src="https://img.freepik.com/premium-photo/blue-rc-toy-suv-truck-car-asphalt-ground_43538-27.jpg?w=740" alt="" /></figure>
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
               <button onClick={handleToast}  className="btn btn-info">Buy Now</button>

               
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-80" src="https://img.freepik.com/premium-photo/police-car-toys-isolated-white-background_41158-16765.jpg?w=740" alt="" /></figure>
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
               <button onClick={handleToast}  className="btn btn-info">Buy Now</button>

               
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl"data-aos="zoom-in-up"data-aos-duration="2000">
            <figure><img className="h-80" src="https://img.freepik.com/premium-vector/sport-car-illustration_173474-95.jpg?w=740" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Sports Car</h2>
                <div className="flex text-yellow-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
               <p>Price:$10.00</p> 
               <button onClick={handleToast}  className="btn btn-info">Buy Now</button>

               
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl"data-aos="zoom-in-up"data-aos-duration="2000">
            <figure><img className="h-80" src="https://img.freepik.com/premium-vector/car-sport_74218-217.jpg?w=826" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Sports Car</h2>
                <div className="flex text-yellow-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
               <p>Price:$15.00</p> 
               <button onClick={handleToast}  className="btn btn-info">Buy Now</button>

               
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl"data-aos="zoom-in-up"data-aos-duration="2000">
            <figure><img className="h-80" src="https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-60981.jpg?w=826&t=st=1684500241~exp=1684500841~hmac=e0035ad6c094b1860520445d6553589f8d61ea518234c4d03ca9a22fb1f1b0a8" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Sports Car</h2>
                <div className="flex text-yellow-400">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
               <p>Price:$25.00</p> 
               <button onClick={handleToast}  className="btn btn-info">Buy Now</button>

               
            </div>
            </div>
            </div>
           
        </div>
    );
};

export default Tranding;