"use client";
import Header from "@/components/Header";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Approach from "@/components/Approach";
import advantagesImage from "../../../public/images/video1.jpg";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";
import Portal from "@/components/Portal";
import Image from "next/image";
import Link from "next/link";
import adv1 from "../../../public/images/adv-img-1.webp";
import adv2 from "../../../public/images/adv-img-2.webp";
import adv3 from "../../../public/images/adv-img-3.webp";

function AdvContainer({ image, title, description, color }) {
  return (
    <div className={styles.advContainer} style={{ backgroundColor: `${color}` }}>
      <Image src={image} alt="adv image" className={styles.advImage}/>
      <h4 className={styles.advTitle}>{title}</h4>
      <p className={styles.advDescription}>{description}</p>
      <Link href="/contact" className={styles.advButton}>
        Contact Us
      </Link>
    </div>
  );
}

export default function About() {
  const [renderedHtml, setRenderedHtml] = useState(null);

  useEffect(() => {
    const html = (
      <div>
        Each member of the Nzamu team takes an oath to provide top-notch service
        and support to our clients. We embody the highest ideals of service,
        including:
        <div>
          <ul>
            <li>
              Integrity: Providing an honest assessment of your cyber security
              and storage needs while offering best-in-class technology to
              support.
            </li>
            <li>
              Transparency: Ensuring that our clients understand exactly what
              they’re getting from our services.
            </li>
            <li>
              Service: Taking the necessary time to help teach clients how to
              navigate the systems we put in place.
            </li>
          </ul>
        </div>
      </div>
    );
    setRenderedHtml(html);
  }, []);
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.about}>
        <h1 className={styles.title}>About Keden</h1>
        <p className={styles.description}>
          Priding Ourselves On Top-Tier Network Efficiency, Secure Cyber
          Support, And Versatile Cloud Solutions
        </p>
      </section>
      <section className={styles.advantages}>
        <div className={styles.advantagesTop}>
          <div className={styles.advantagesData}>
            <h2 className={styles.advantagesTitle}>The Nzamu Advantage</h2>
            <p className={styles.advantagesDescription}>
              By working with Nzamu for your cyber, network, and cloud-based
              business needs, you are ensured a streamlined and reliable
              partnership from start to finish. Here’s why Nzamu is the trusted
              name to know for IT and cyber solutions Qualified IT Experts
            </p>
            <div className={styles.button}>
              <Link href="/about" className={styles.learnButton}>
                Learn More
              </Link>
            </div>
          </div>
          <Image
            src={advantagesImage}
            alt="advantages image"
            className={styles.advantagesImage}
          />
        </div>
        <div className={styles.advantagesBox}>
          <AdvContainer
            image={adv1}
            title="Accurate Assessments"
            description="When you reach out, we help conduct a thorough assessment to determine what your business does (and does not) need."
            color="#EEEFFE"
          />
          <AdvContainer
            image={adv2}
            title="Vetted Expertise"
            description="We’re constantly researching and applying leading tech into our core business offering, ensuring that."
            color="#FFF2FA"
          />
          <AdvContainer
            image={adv3}
            title="Accelerated Setup"
            description="Enjoy streamlined integration when you partner with Nzamu. We have the knowledge and expertise to fast track your setup."
            color="#FFFBE6"
          />
        </div>
      </section>
      <section className={styles.mission}>
        <h2 className={styles.missionTitle}>Our Mission Statement</h2>
        <p className={styles.missionDescription}>
          At Nzamu, our mission is to support businesses with the most
          competitive rates available for quality IT, cyber security, data
          backup, and cloud-computing services. We believe in the power of
          trusted technology to drive better business results.
        </p>
      </section>
      <advantages title="Our Core Values" description={renderedHtml} />
      <Portal
        title="For Your Business Growth"
        description="Are you ready to take your business to the next level with better cyber functionality and networking support? Reach out to our Nzamu team today to learn how our processes can accelerate your business growth."
        buttonText="Get in touch"
        buttonLink="/contact"
      />
      <Approach />
      <LogoCarousel />
      <Footer />
    </main>
  );
}
