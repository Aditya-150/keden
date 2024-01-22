import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function HomeContact() {
  return (
    <section className={styles.contact}>
      <div className={styles.head}>
        <h2 className={styles.title}>We Help You To Have Strong Cyber Security</h2>
        <p className={styles.para}>
          In the midst of the information age, data is widely regarded as one of
          the most lucrative and sought after aspects of online activity. In
          turn, businesses have a sworn responsibility to continuously defend
          employee, partner, customer, and client data alike.
        </p>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.sub}>
        <h3 style={styles.subTitle}>Help Companies Avoid Cyber Threats</h3>
        <p className={styles.para}>
          Addressing network attacks with speed while deploying industry-leading
          tactics to keep businesses ahead of threats.
        </p>
        <div className={styles.hr}></div>
        <h3 style={styles.subTitle}>Protect Any Website From Hackers</h3>
        <p className={styles.para}>
          Keeping firewalls and security measures up to date with new patches
          and configurations.
        </p>
      </div>
    </section>
  );
}
