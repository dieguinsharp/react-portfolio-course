import './testimonials.css'
import data from './data'
import Testimonial from './Testimonial'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What my Clients Say</h2>
      <p>
        These are unbiased testmonials from some of clients
      </p>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: {slidesPerView: 2},
            1025: {slidesPerView: 3}
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {
            data.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <Testimonial testimonial={testimonial}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials