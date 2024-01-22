import Header from "@/components/Header";
import React from "react";
import styles from "./page.module.css";
import Approach from "@/components/Approach";
import Technicalities from "@/components/Technicalities";
import LogoCarousel from "@/components/LogoCarousel";

export default function About() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.information}>
        <h1 className={styles.title}>Information Technology</h1>
        <p className={styles.description}>
          When teams are given collateral duties involving managing their IT
          services, they are distracted from their core competencies.
          Additionally, in-house IT teams are notoriously expensive, taking away
          from business profitability. Our managed IT services are an affordable
          way to keep the technology-dependent side of your business running
          smoothly. These services include:
        </p>
      </section>
    </main>
  );
}
