"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import video1 from "../../../public/images/video1.jpg";
import video2 from "../../../public/images/video2.jpg";
import video3 from "../../../public/images/video3.jpg";

export default function VideoCarousel() {
  return (
    <section className="carousel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="carousel-slide"
            src={video1}
            alt="video slide"
          ></Image>
          <div className="slide-content">
            <h3 className="slide-title">Providing 360° IT Solutions</h3>
            <p className="slide-description">
              Empowering Security in the Digital Age, Safeguarding Your Every
              Click
            </p>
            <div className="slide-container">
              <Link href="/login" className="slide-button">
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="carousel-slide"
            src={video2}
            alt="video slide"
          ></Image>
          <div className="slide-content">
            <h3 className="slide-title">Bringing Best Security Services</h3>
            <p className="slide-description">
              Stay Ahead, Stay Secure: Your Cyber Safety Partners
            </p>
            <div className="slide-container">
              <Link href="/login" className="slide-button">
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="carousel-slide"
            src={video3}
            alt="video slide"
          ></Image>
          <div className="slide-content">
            <h3 className="slide-title">Securing Your Privacy and Data</h3>
            <p className="slide-description">
              Keeping Your Data Safe, Your Peace of Mind Intact
            </p>
            <div className="slide-container">
              <Link href="/login" className="slide-button">
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
