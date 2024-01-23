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
      <section className={styles.solutions}>
        <h2 className={styles.solutionsTitle}>
          The Perfect Solution For All The Protection Question.
        </h2>
        <div className={styles.solutionsTiles}>
          <SolutionContainer
            bgColor="#797DF4"
            vector={vector1}
            title="Constant Monitoring"
            description="Ensuring fast network response times to threats."
            buttonDisabled={false}
            buttonLink="/about"
            className={styles.tile}
          />
          <SolutionContainer
            bgColor="#FF9AD5"
            vector={vector2}
            title="Continual Updates"
            description="Keeping firewalls and security measures up to date with new patches and configurations."
            buttonDisabled={false}
            buttonLink="/about"
            className={styles.tile}
          />
          <SolutionContainer
            bgColor="#FFD200"
            vector={vector3}
            title="Threat Response"
            description="Addressing network attacks with speed while deploying industry-leading tactics to keep businesses ahead of threats."
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
