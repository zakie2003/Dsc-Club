import styles from "../style";
import Events from "./Events";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { events } from "../constants";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const EventContainer = () => {
  return (
    
    <div className="items-center">
      <h2 className="text-center text-white text-4xl mb-10 font-bold tracking-tight sm:text-5xl">
        Our upcoming events
      </h2>
      <section id="events" className={`${styles.paddingY} flex-col relative`}>
        <Swiper
          className="pb-10"
          centeredSlides
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation
          modules={[Autoplay, Navigation]}
          spaceBetween={50}
        >
          <div className="swiper-container mt-4 pb-2 !overflow-hidden">
            <div className="swiper-wrapper">
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <Events
                    content={event.content}
                    link={event.link}
                    image={event.image}
                    title={event.title}
                  />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </section>
    </div>
    
  );
};

export default EventContainer;
