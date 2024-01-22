import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import earth from "../../../public/images/Earth.svg";

export default function MapSection() {
  return (
    <section className={styles.map}>
      <h2 className={styles.mapTitle}>Areas we Serve</h2>
      <p className={styles.mapDescription}>
        For questions, comments, or concerns, get in touch with out friendly
        customer support team today.
      </p>
      <div className={styles.mapContainer}>
        <Image src={earth} alt="map" className={styles.mapImage} />
      </div>
    </section>
  );
}
