import Header from "@/components/Header";
import React from "react";
import styles from "./page.module.css";
import Approach from "@/components/Approach";
import Technicalities from "@/components/Technicalities";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";

export default function About() {
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
      <Technicalities />
      <Approach />
      <LogoCarousel />
      <Footer />
    </main>
  );
}
