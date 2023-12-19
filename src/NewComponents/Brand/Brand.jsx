import baby from '../../assets/baby.png'
import owl from '../../assets/owl.png'
import cat from '../../assets/cat.png'
import jar from '../../assets/jar.png'
const Brand = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl  text-[#181d4e] font-semibold text-center md:hidden mt-8'>We work with the best brands</h2>
            <div className='grid grid-cols-2 md:grid-cols-5 items-center md:my-5 md:px-10'>
                <img className='w-48 cursor-pointer' src={baby} alt="" />
                <img className='w-40 cursor-pointer' src={owl} alt="" />
                <img className='w-40 cursor-pointer' src={cat} alt="" />
                <img className='w-40 cursor-pointer' src={jar} alt="" />
                <h2 className='md:text-3xl text-[#181d4e] font-semibold text-end hidden md:block'>We work with the best brands</h2>
            </div>

        </div>
    );
};

export default Brand;