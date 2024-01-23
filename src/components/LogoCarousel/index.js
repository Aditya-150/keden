import React from "react";
import Image from "next/image";
import logo1 from "../../../public/images/logo/nz-fortinet.png";
import logo2 from "../../../public/images/logo/nz-automox.png";
import logo3 from "../../../public/images//logo/nz-aws.png";
import logo4 from "../../../public/images/logo/nz-microsoft.png";
import logo5 from "../../../public/images/logo/nz-shophos.png";
import logo6 from "../../../public/images/logo/nz-vm-ware.png";
import logo7 from "../../../public/images/logo/nz-kaseya.png";
import logo8 from "../../../public/images//logo/nz-cisco.png";
import logo9 from "../../../public/images/logo/nz-zerto.png";
import logo10 from "../../../public/images/logo/nz-azure.png";
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
          <Image src={logo6} alt="logo slide" />
          <Image src={logo7} alt="logo slide" />
          <Image src={logo8} alt="logo slide" />
          <Image src={logo9} alt="logo slide" />
          <Image src={logo10} alt="logo slide" />
        </div>
        <div className="logos-slide">
          <Image src={logo1} alt="logo slide" />
          <Image src={logo2} alt="logo slide" />
          <Image src={logo3} alt="logo slide" />
          <Image src={logo4} alt="logo slide" />
          <Image src={logo5} alt="logo slide" />
          <Image src={logo6} alt="logo slide" />
          <Image src={logo7} alt="logo slide" />
          <Image src={logo8} alt="logo slide" />
          <Image src={logo9} alt="logo slide" />
          <Image src={logo10} alt="logo slide" />
        </div>
      </div>
    </section>
  );
}
