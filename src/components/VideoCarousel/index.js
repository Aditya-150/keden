"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import video1 from "../../../public/images/video1.jpg";
import video2 from "../../../public/images/video2.jpg";
import video3 from "../../../public/images/video3.jpg";

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="custom-prev-arrow" onClick={onClick}>
      <FiArrowLeft size={20} />
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="custom-next-arrow" onClick={onClick}>
      <FiArrowRight size={20} />
    </button>
  );
}

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
            <Link href="https://www.youtube.com/watch?v=inWWhr5tnEA">
              <FaPlayCircle size={80} color="white" className="play-button"/>
            </Link>
            <h3 className="slide-title">Providing 360° IT Solutions</h3>
            <p className="slide-description">
              We believe security is by design and not by updates
            </p>
            <div className="slide-container">
              <Link href="/login" className="slide-button">
                Portal Login
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
            <Link href="https://www.youtube.com/watch?v=WMSsTGg8KWE">
              <FaPlayCircle size={80} color="white" className="play-button"/>
            </Link>
            <h3 className="slide-title">Bringing Best Security Services</h3>
            <p className="slide-description">
              We believe security is by design and not by updates
            </p>
            <div className="slide-container">
              <Link href="/login" className="slide-button">
                Portal Login
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
            <Link href="https://www.youtube.com/watch?v=hXSFdwIOfnE">
              <FaPlayCircle size={80} color="white" className="play-button"/>
            </Link>
            <h3 className="slide-title">Securing Your Privacy and Data</h3>
            <p className="slide-description">
              We believe security is by design and not by updates
            </p>
            <div className="slide-container">
              <Link href="/login" className="slide-button">
                Portal Login
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
