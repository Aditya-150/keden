import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Portal({ title, description, buttonText, buttonLink }) {
  return (
    <section className={styles.portal}>
      <div className={styles.container}>
        <h2 className={styles.containerTitle}>{title}</h2>
        <p className={styles.containerDescription}>{description}</p>
        <Link href={buttonLink} className={styles.button}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
