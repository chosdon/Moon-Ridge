import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

import SearchBar from "../components/SearchBar";
import "../styles/HeroSlider.css";

function HeroSlider() {
  return (
    <section className="hero-container">
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            {/* <div className="overlay">
              <h1>Adventure Bike Trips</h1>
              <p>Experience thrilling rides across stunning landscapes</p>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2">
            {/* <div className="overlay">
              <h1>Luxury Car Tours</h1>
              <p>Travel in style with premium comfort and elegance</p>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide3">
            {/* <div className="overlay">
              <h1>Explore New Destinations</h1>
              <p>Discover hidden gems and unforgettable places</p>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide4">
            {/* <div className="overlay">
              <h1>Travel With Comfort</h1>
              <p>Relax and enjoy your journey with top-notch services</p>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Search bar overlay */}
      <div className="search-bar-wrapper">
        <SearchBar />
      </div>

    </section>
  );
}

export default HeroSlider;