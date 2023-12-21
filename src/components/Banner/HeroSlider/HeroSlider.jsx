import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
// import './style.css'
import { useEffect, useState } from 'react';
import SingleHeroSlider from '../SingleHeroSlider/SingleHeroSlider';
const HeroSlider = () => {
    const [bannerSlider, setBannerSlider] = useState([]);
    useEffect(() => {
        fetch('bannerSlider.json')
            .then(res => res.json())
            .then(data => setBannerSlider(data))
    }, [])
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {bannerSlider.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <SingleHeroSlider slider={slider} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;