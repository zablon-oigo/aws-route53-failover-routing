import { Swiper,SwiperSlide } from "swiper/react"
import 'swipe/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css'

import {Pagination, Navigation, Autoplay} from 'swiper'
import {heroSlider} from '../data'
export default function HeroSlider() {
  return (
    <Swiper>
        {heroSlider.map((slide,index)=>{
            
        })}
    </Swiper>
  )
}
