import React from "react";
import styles from "./styles.module.css";
import logo from "../../../public/images/keden.svg";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../../public/images/facebook.svg";
import twitter from "../../../public/images/twitter.svg";
import youtube from "../../../public/images/youtube.svg";
import twitch from "../../../public/images/twitch.svg";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" className={styles.logoImage} />
            <h1>Keden</h1>
          </div>
          <div className={styles.description}>
            Priding Ourselves on Top-Tier Network Efficiency, Secure Cyber
            Support, and Versatile Cloud Solutions
          </div>
        </div>
        <div className={styles.links}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.list}>
            <li className={styles.listLink}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.listLink}>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
            </li>
            <li className={styles.listLink}>
              <Link href="/it" className={styles.link}>
                Services
              </Link>
            </li>
            <li className={styles.listLink}>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.title}>Subscribe</div>
          <div className={styles.description}>
            Streamline Your Business Processes Today
          </div>
          <input
            type="email"
            placeholder="Your Mail"
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <Link href="mailto:mail@keden.tech" className={styles.button}>
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerLine}></div>
      <div className={styles.footerEnd}>
        © {new Date().getFullYear()} Keden. All rights reserved
      </div>
    </section>
  );
}
