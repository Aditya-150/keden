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
      <section className={styles.security}>
        <h1 className={styles.title}>Cyber Security</h1>
        <p className={styles.description}>
          In the midst of the information age, data is widely regarded as one of
          the most lucrative and sought after aspects of online activity. In
          turn, businesses have a sworn responsibility to continuously defend
          employee, partner, customer, and client data alike. Our cyber security
          services include:
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
