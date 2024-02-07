import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import detailsImage from "../../../public/images/mobile-1.jpg";

export default function Details() {
  return (
    <section className={styles.details}>
      <Image
        src={detailsImage}
        alt="details image"
        className={styles.detailsImage}
      />
      <div className={styles.detailsData}>
        <h2 className={styles.detailsTitle}>
          We Have Been Certified And Trusted By Clients
        </h2>
        <p className={styles.detailsDescription}>
          Each member of the Keden team takes an oath to provide top-notch
          service and support to our clients. Addressing network attacks with
          speed while deploying
        </p>
        <div className={styles.detailsCTA}>
          <Link href="/about" className={styles.aboutButton}>
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
