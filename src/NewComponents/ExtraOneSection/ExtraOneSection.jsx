import best from '../../assets/best.png'
import fast from '../../assets/fast.png'
import buyer from '../../assets/buyer.png'
import live from '../../assets/live.png'

const ExtraOneSection = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 container mx-auto'>
            <div className='flex md:gap- items-center mx-auto'>
                <img src={best} className='w-24' alt="" />
                <div>
                    <h2 className='text-[#181D4E] font-semibold text-lg mt-4'>Best Prices</h2>
                    <p className='text-[#646672] text-sm'>Affordable</p></div>
            </div>
            <div className='flex md:gap- items-center mx-auto'>
                <img src={fast} className='w-20' alt="" />
                <div>
                    <h2 className='text-[#181D4E] font-semibold text-lg mt-4'>Fast Shipment</h2>
                    <p className='text-[#646672] text-sm'>Express</p></div>
            </div>
            <div className='flex md:gap- items-center mx-auto'>
                <img src={buyer} className='w-20' alt="" />
                <div>
                    <h2 className='text-[#181D4E] font-semibold text-lg mt-4'>Buyers Protection</h2>
                    <p className='text-[#646672] text-sm'>Guarantee</p></div>
            </div>
            <div className='flex md:gap- items-center mx-auto'>
                <img src={live} className='w-20' alt="" />
                <div>
                    <h2 className='text-[#181D4E] font-semibold text-lg mt-4'>Live Support</h2>
                    <p className='text-[#646672] text-sm'>Online</p></div>
            </div>
            </div>
        </div>
    );
};

export default ExtraOneSection;