import styles from "../style";
import Past_Events from "./Past_Event";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { past_events } from "../constants";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Past_EventContainer = () => {
  return (
    <div>
      <h2 className="text-center text-white text-4xl mb-10 font-bold tracking-tight sm:text-5xl">
        Our past events
      </h2>
      <section id="events" className={`${styles.paddingY} flex-col relative`}>
        <Swiper
          className="pb-10"
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
              {past_events.map((event, index) => (
                <SwiperSlide key={index}>
                  <Past_Events
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

export default Past_EventContainer;
