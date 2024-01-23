import Header from "@/components/Header";
import React from "react";
import styles from "./page.module.css";
import Approach from "@/components/Approach";
import Technicalities from "@/components/Technicalities";
import LogoCarousel from "@/components/LogoCarousel";
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
      <section className={styles.cloud}>
        <h1 className={styles.title}>Cloud Computing Support</h1>
        <p className={styles.description}>
          As your business grows, having a scalable cloud solution to support
          your growth is crucial. Without proper storage solutions, slow data
          retrieval speeds and shortages can render your day-to-day processes
          inoperable. That’s why our cloud storage solutions include:
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
            title="Scaleable Support"
            description="Providing data backup and readily-available storage that grows with your business. "
            buttonDisabled={false}
            buttonLink="/about"
            className={styles.tile}
          />
          <SolutionContainer
            bgColor="#FF9AD5"
            vector={vector2}
            title="Automated Integration"
            description="Helping your business streamline the data collection, storing, and retrieval process automatically."
            buttonDisabled={false}
            buttonLink="/about"
            className={styles.tile}
          />
          <SolutionContainer
            bgColor="#FFD200"
            vector={vector3}
            title="Efficient Access"
            description="Offering instantaneous access to the entirety of your data without expansive physical storage devices."
            className={styles.tile}
            buttonDisabled={false}
            buttonLink="/about"
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
