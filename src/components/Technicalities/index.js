import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import technicalitiesImage from "../../../public/images/mobile-2.webp";

export default function technicalities() {
  return (
    <section className={styles.technicalities}>
      <div className={styles.technicalitiesTop}>
        <div className={styles.technicalitiesData}>
          <h2 className={styles.technicalitiesTitle}>
            We Have Been Certified And Trusted By Clients
          </h2>
          <p className={styles.technicalitiesDescription}>
            Each member of the Nzamu team takes an oath to provide top-notch
            service and support to our clients. Addressing network attacks with
            speed while deploying
          </p>
          <div className={styles.button}>
            <Link href="/about" className={styles.learnButton}>
              Learn More
            </Link>
          </div>
        </div>
        <Image
          src={technicalitiesImage}
          alt="technicalities image"
          className={styles.technicalitiesImage}
        />
      </div>
      <div className={styles.container}>
        <h2 className={styles.containerTitle}>Client Portal Login</h2>
        <p className={styles.containerDescription}>
          To access your account information, enter a new ticket, or check on
          the status of an existing ticket, please login into our client portal.
        </p>
        <Link href="/login" className={styles.loginButton}>
          Login
        </Link>
      </div>
    </section>
  );
}
