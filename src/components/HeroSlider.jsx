import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css'

// import {Pagination, Navigation, Autoplay} from 'swiper'
import {heroSlider} from '../data'
export default function HeroSlider() {
  return (
    <Swiper>
        {heroSlider.map((slide,index)=>{
            const {title, subtitle, image, buttonText}=slide;
            return <SwiperSlide key={index} className="py-12 lg:py-16">
                <div className="container mx-auto text-center lg:text-left">
                    <div className="">
                        <div className="">
                            <h1 className="">
                                {title}
                            </h1>
                            <p className="text-base lg:text-[18px] lg:leading-8 max-w-[540px] mb-8 ">
                                {subtitle}
                            </p>
                            <button className="mb-8 btn lg:mb-0">
                                {buttonText}
                            </button>
                        </div>
                        <div className="flex justify-center flex-1">
                            <img src={image.type} alt="" className="h-96 lg:h-auto" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  )
}
