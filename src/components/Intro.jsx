import React from "react";
import Avatar from "../assets/Starbucks__avatar.png";
import Code from "../assets/code.png";
import Cheese from "../assets/cheese.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Intro = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="cards">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              spaceBetween={30}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <div className="card">
                  <div className="Starbucks">
                    <img src={Avatar} alt="Avatar" />
                    <p className="Starbucks__name">Starbucks</p>
                    <p className="Starbucks__status">Gold Tier</p>
                  </div>
                  <div className="Starbucks__down">
                    <img src={Cheese} alt="Cheese" />
                    <p className="Starbucks__desc">Best homie</p>
                  </div>
                  <div className="Starbucks__rate__card">
                    <h1 className="Starbucks__title">Star</h1>
                    <p className="Starbucks__rate">2.464</p>
                  </div>
                  <div className="Starbucks__code__card">
                    <img src={Code} alt="Code" />
                    <h2 className="Starbucks__code">CMLTX123</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <div className="card2">
                  <div className="Starbucks">
                    <img src={Avatar} alt="Avatar" />
                    <p className="Starbucks__name">Starbucks</p>
                    <p className="Starbucks__status">Gold Tier</p>
                  </div>
                  <div className="Starbucks__down">
                    <img src={Cheese} alt="Cheese" />
                    <p className="Starbucks__desc">Best homie</p>
                  </div>
                  <div className="Starbucks__rate__card">
                    <h1 className="Starbucks__title">Star</h1>
                    <p className="Starbucks__rate">2.464</p>
                  </div>
                  <div className="Starbucks__code__card">
                    <img src={Code} alt="Code" />
                    <h2 className="Starbucks__code">CMLTX123</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <div className="card3">
                  <div className="Starbucks">
                    <img src={Avatar} alt="Avatar" />
                    <p className="Starbucks__name">Starbucks</p>
                    <p className="Starbucks__status">Gold Tier</p>
                  </div>
                  <div className="Starbucks__down">
                    <img src={Cheese} alt="Cheese" />
                    <p className="Starbucks__desc">Best homie</p>
                  </div>
                  <div className="Starbucks__rate__card">
                    <h1 className="Starbucks__title">Star</h1>
                    <p className="Starbucks__rate">2.464</p>
                  </div>
                  <div className="Starbucks__code__card">
                    <img src={Code} alt="Code" />
                    <h2 className="Starbucks__code">CMLTX123</h2>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
