import mandy from '../../assets/mandy.png';
import peter from '../../assets/peter.png';
import { FaQuoteLeft } from "react-icons/fa";
import './Testimonial.css'
const Testimonial = () => {
    return (
        <div>
            <div className='groupKids py-96 md:py-72 relative'>
                <div className="absolute inset-0 bg-[#181D4E] opacity-90">

                    <div className='md:mt-20 md:px-10'>
                        <div className='grid md:grid-cols-3 text-white text-center items-center mx-3 pt-5 py-20'>
                            {/* text */}
                            <div className='text-start mt-5 md:mt-0'>
                                <p className="text-white font-medium mt-5 uppercase">TESTIMONIALS</p>
                                <h2 className="text-white text-xl md:text-3xl font-semibold mt-3">What Our Clients Say About Us</h2>
                                <p className='text-white mt-3'>We appreciate your kind and honest feedback and invite you to our amazing store.</p>
                                <button className='mt-5 px-9 py-3 font-medium rounded-full bg-sky-400'>About Us</button>
                            </div>
                            {/* firstCard */}
                            <div className='md:mx-5 group cursor-pointer mt-10 md:mt-0 hover:-translate-y-3 duration-300'>
                                <div className='w-full bg-white py-10 md:px-5 rounded-lg mt-5'>
                                    <div className='text-3xl text-green-500 group-hover:text-[#181D4E] duration-300 ml-5 '><FaQuoteLeft /></div>
                                    <h2 className='text-[#181D4E] text-start text-xl px-8 mt-7'>What a great store for the entire family! My kids love this place because of the toys!</h2>
                                    <div className='flex gap-5 items-center mt-8'>
                                        <img className='w-20' src={mandy} alt="" />
                                        <div className=''>
                                            <h2 className='text-[#181D4E] text-lg font-semibold'>Mandy Mathers</h2>
                                            <p className='text-[#646672]'>CEO, Business Co.</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* secondCard */}
                            <div className='md:mx-5 group cursor-pointer mt-10 md:mt-0 hover:-translate-y-3 duration-300 hidden md:block'>
                                <div className='w-full bg-white py-10 md:px-5 rounded-lg mt-5'>
                                    <div className='text-3xl text-green-500 group-hover:text-[#181D4E] duration-300 ml-5 '><FaQuoteLeft /></div>
                                    <h2 className='text-[#181D4E] text-start text-xl px-8 mt-7'>Not only do the toys make our children squeal with joy, but the sales team is awesome!</h2>
                                    <div className='flex gap-4 items-center mt-8'>
                                        <img className='w-20' src={peter} alt="" />
                                        <div className=''>
                                            <h2 className='text-[#181D4E] text-lg font-semibold'>Peter Bowman</h2>
                                            <p className='text-[#646672]'>CEO, Business Co.</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Testimonial;