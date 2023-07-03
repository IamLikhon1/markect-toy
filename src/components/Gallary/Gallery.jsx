
const Gallery = () => {
    return (
        <div className="my-10 mx-10 "data-aos="zoom-in-up"data-aos-duration="2000">
            <hr />
            <h2 className="text-5xl text-center my-8 font-serif font-medium text-violet-500">Gallery Section</h2>
            <hr className="mb-10" />
           <div className="grid md:grid-cols-2 overflow-x-hidden">
            <div className="grid md:grid-cols-2 gap-5 ">
                <img src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8180.jpg?w=740" alt="" />
                <img src="https://img.freepik.com/premium-photo/blue-rc-toy-suv-truck-car-asphalt-ground_43538-27.jpg?w=740" alt="" />
                <img src="https://img.freepik.com/premium-photo/car-gift-concept-human-holding-hands-palm-toy-car-with-red-ribbon-yellow-background-top-view-flat-lay-composition-best-offer-cars-sale-rent-template-presentation-show-vehicle_94095-150.jpg?w=740" alt="" />
                <img src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?w=740" alt="" />
            </div>





            <div>
                <h2 className="text-6xl font-serif ml-5 ">Unlimited Cars <span className="text-violet-500">Toys</span> </h2>

                <h4 className="text-3xl ml-5 mt-8">Active toys for active and smart kids. <br /> Brings fun and non stop learning for <br /> your little <span className="text-red-400">One</span></h4>

                <button className="btn btn-accent btn-outline mt-8 ml-5 hover:rounded-3xl">Read More</button>
            </div>

           </div>
        </div>
    );
};

export default Gallery;