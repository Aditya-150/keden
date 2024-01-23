import Header from "@/components/Header";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import Portal from "@/components/Portal";
import SolutionContainer from "@/components/SolutionContainer";
import vector1 from "../../../public/images/scan-barcode.svg";
import vector2 from "../../../public/images/shield-tick.svg";
import vector3 from "../../../public/images/finger-cricle.svg";

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
      <section className={styles.solutions}>
        <h2 className={styles.solutionsTitle}>
          The Perfect Solution For All The Protection Question.
        </h2>
        <div className={styles.solutionsTiles}>
          <SolutionContainer
            bgColor="#797DF4"
            vector={vector1}
            title="System Updates"
            description="Providing off-the-clock updates to systems to ensure uninterrupted access during business hours."
            buttonDisabled={true}
            className={styles.tile}
          />
          <SolutionContainer
            bgColor="#FF9AD5"
            vector={vector2}
            title="Off-Site Support"
            description="Troubleshooting issues while helping users navigate systems with off-site support solutions. "
            buttonDisabled={true}
            className={styles.tile}
          />
          <SolutionContainer
            bgColor="#FFD200"
            vector={vector3}
            title="Seamless Infrastructure"
            description="Ensuring that internal systems function as intended with speed and security."
            className={styles.tile}
            buttonDisabled={true}
          />
        </div>
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
