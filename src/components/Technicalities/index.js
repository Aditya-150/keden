"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import technicalitiesImage from "../../../public/images/mobile-2.jpg";

export default function technicalities({ title, description }) {
  return (
    <section className={styles.technicalities}>
      <div className={styles.technicalitiesTop}>
        <div className={styles.technicalitiesData}>
          <h2 className={styles.technicalitiesTitle}>{title}</h2>
          <p className={styles.technicalitiesDescription}>{description}</p>
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
    </section>
  );
}
