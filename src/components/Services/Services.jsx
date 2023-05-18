import { FaClock, FaEraser, FaPercent } from "react-icons/fa";

const Services = () => {
    return (
        <div className="my-20" data-aos="fade-up"
        data-aos-duration="4000">
            <h2 className="text-5xl text-center font-serif font-medium my-10 text-violet-500">Our Services</h2>
            <div className="grid md:grid-cols-3 mx-16">

                <div>
                <div className="card card-compact w-96 hover:bg-sky-200 mt-5 bg-base-100 p-5 shadow-xl">
                    <figure><FaClock className="text-6xl text-sky-500"></FaClock></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-sky-500 text-center">Great Saving Everyday</h2>
                        <p>Rorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <div className="card-actions justify-end">
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                <div className="card card-compact w-96 mt-5 hover:bg-red-200 bg-base-100 p-5 shadow-xl">
                    <figure><FaEraser className="text-6xl text-red-500"></FaEraser></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-red-500 text-center">Half price Sale</h2>
                        <p>Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum. Lorem ipsum dolor sit amet, consectetur adipis cing elit.</p>
                        <div className="card-actions justify-end">
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                <div className="card card-compact w-96 mt-5 hover:bg-lime-200 bg-base-100 p-5 shadow-xl">
                    <figure><FaPercent className="text-6xl text-lime-500" ></FaPercent></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-lime-500 text-center">Great Saving Everyday</h2>
                        <p>Rorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <div className="card-actions justify-end">
                        
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;