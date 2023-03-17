import "./TripPlanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import TripImg from "../../images/trip-1.jpg";
import TripImg2 from "../../images/trip-2.jpg";
import TripImg3 from "../../images/trip-3.jpg";
import TripImg4 from "../../images/trip-4.jpg";
import TripImg5 from "../../images/trip-5.jpg";
import TripImg6 from "../../images/trip-6.jpg";
import TripImg7 from "../../images/trip-7.jpg";
import TripImg8 from "../../images/trip-8.jpg";
import TripImg9 from "../../images/trip-9.jpg";
import TripImg10 from "../../images/trip-10.jpg";
import TripImg11 from "../../images/trip-11.jpg";

interface TripCardProps {
  title: string;
  distance: string;
  image: string;
}

const TripPlanner = () => {
  return (
    <div className="section trip-planner">
      <div className="container">
        <h4 className="section-subtitle">Quick and easy trip planner</h4>
        <h2 className="section-title">
          Pick a vibe
        </h2>

        <div className="trip-slider">
          <Swiper
            grabCursor={true}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1200: {
                width: 1200,
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <TripCard
                image={TripImg}
                title="Ain Sokhna"
                distance="230 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg2}
                title="Ras Matarma"
                distance="246 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg3}
                title="Ras Sedr"
                distance="253 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg4}
                title="Hurghada"
                distance="315 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg5}
                title="Borg El Arab"
                distance="330 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg6}
                title="Safaga"
                distance="248 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg7}
                title="El Alamein"
                distance="351 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg8}
                title="Sharm El Sheikh"
                distance="351 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg9}
                title="Alexandria"
                distance="355 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg10}
                title="Dahab"
                distance="371 Km Away"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TripCard
                image={TripImg11}
                title="Port Said"
                distance="383 Km Away"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const TripCard = ({ title, distance, image }: TripCardProps): JSX.Element => {
  return (
    <div className="trip-card">
      <div className="img-wrapper">
      <img src={image} alt={title} />
      </div>
      <div className="trip-card__detail">
        <h3>{title}</h3>
        <p>{distance}</p>
      </div>
    </div>
  );
};

export default TripPlanner;
