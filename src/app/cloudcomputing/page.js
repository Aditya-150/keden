import Header from "@/components/Header";
import React from "react";
import styles from "./page.module.css";
import Approach from "@/components/Approach";
import Technicalities from "@/components/Technicalities";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";
import Portal from "@/components/Portal";

export default function About() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.cloud}>
        <h1 className={styles.title}>Cloud Computing Support</h1>
        <p className={styles.description}>
          As your business grows, having a scalable cloud solution to support
          your growth is crucial. Without proper storage solutions, slow data
          retrieval speeds and shortages can render your day-to-day processes
          inoperable. That’s why our cloud storage solutions include:
        </p>
      </section>
      <Portal
        title="Client Portal Login"
        description="To access your account information, enter a new ticket, or check on the status of an existing ticket, please login into our client portal."
        buttonText="Login"
        buttonLink="/login"
      />
      <Footer />
    </main>
  );
}
