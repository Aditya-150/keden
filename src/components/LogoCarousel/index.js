import React from "react";
import Image from "next/image";
import logo1 from "../../../public/images/instacart.png";
import logo2 from "../../../public/images/toyota.png";
import logo3 from "../../../public/images/cisco.png";
import logo4 from "../../../public/images/microsoft.png";
import logo5 from "../../../public/images/strava.png";
import "./styles.css";

export default function LogoCarousel() {
  return (
    <section className="logos-carousel">
      <h1 className="logos-title">Trusted Partners</h1>
      <p className="logos-description">
        Empowering Success Together: Our Trusted Partnerships Fueling Innovation
        and Security Excellence.
      </p>
      <div className="logos">
        <div className="logos-slide">
          <Image src={logo1} alt="logo slide" />
          <Image src={logo2} alt="logo slide" />
          <Image src={logo3} alt="logo slide" />
          <Image src={logo4} alt="logo slide" />
          <Image src={logo5} alt="logo slide" />
        </div>
        <div className="logos-slide">
          <Image src={logo1} alt="logo slide" />
          <Image src={logo2} alt="logo slide" />
          <Image src={logo3} alt="logo slide" />
          <Image src={logo4} alt="logo slide" />
          <Image src={logo5} alt="logo slide" />
        </div>
      </div>
    </section>
  );
}
