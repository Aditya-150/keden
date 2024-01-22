import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import vector1 from "../../../public/images/discover.svg";
import vector2 from "../../../public/images/tactical.svg";
import vector3 from "../../../public/images/assess.svg";
import vector4 from "../../../public/images/strategic.svg";
import arrow from "../../../public/images/arrow.svg";

export default function Approach() {
  return (
    <section className={styles.approach}>
      <h2 className={styles.approachTitle}>Our Approach</h2>
      <p className={styles.approachDescription}>
        To access your account information, enter a new ticket, or check on{" "}
      </p>
      <div className={styles.approachContainer}>
        <div className={styles.container}>
          <Image src={vector1} alt="approach" className={styles.vector} />
          <p className={styles.title}>Discovery</p>
        </div>
        <Image src={arrow} alt="arrow" className={styles.arrow} />
        <div className={styles.container}>
          <Image src={vector2} alt="approach" className={styles.vector} />
          <p className={styles.title}>Tactical</p>
        </div>
        <Image src={arrow} alt="arrow" className={styles.arrow} />
        <div className={styles.container}>
          <Image src={vector3} alt="approach" className={styles.vector} />
          <p className={styles.title}>Assess</p>
        </div>
        <Image src={arrow} alt="arrow" className={styles.arrow} />
        <div className={styles.container}>
          <Image src={vector4} alt="approach" className={styles.vector} />
          <p className={styles.title}>Strategic</p>
        </div>
      </div>
    </section>
  );
}
