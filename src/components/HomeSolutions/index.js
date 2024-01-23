import React from "react";
import Image from "next/image";
import background from "../../../public/images/bg2.webp";
import styles from "./styles.module.css";
import SolutionContainer from "../SolutionContainer";
import vector1 from "../../../public/images/scan-barcode.svg";
import vector2 from "../../../public/images/shield-tick.svg";
import vector3 from "../../../public/images/finger-cricle.svg";
import vector4 from "../../../public/images/check.svg";

export default function HomeSolutions() {
  return (
    <section className={styles.solutions}>
      <h2 className={styles.solutionsTitle}>
        The Perfect Solution For All The Protection Question.
      </h2>
      <div className={styles.solutionsTiles}>
        <SolutionContainer
          bgColor="#797DF4"
          vector={vector1}
          title="Cyber Security"
          description="Uncompromising Cyber Security to ensure that data from your business"
          buttonDisabled={true}
          className={styles.tile}
        />
        <SolutionContainer
          bgColor="#FF9AD5"
          vector={vector2}
          title="Cloud Storage"
          description="High-capacity cloud storage to have readily available access to data"
          buttonDisabled={true}
          className={styles.tile}
        />
        <SolutionContainer
          bgColor="#FFD200"
          vector={vector3}
          title="Disaster Management"
          description="Disaster recovery that ensures the survivability of your data"
          className={styles.tile}
          buttonDisabled={true}
        />
        <SolutionContainer
          bgColor="#5AB683"
          vector={vector4}
          title="Managed IT"
          description="Which offers 24/7 support for the computer infrastructure that supports"
          className={styles.tile}
          buttonDisabled={true}
        />
      </div>
    </section>
  );
}
