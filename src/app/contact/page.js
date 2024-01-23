import React from "react";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import icon1 from "../../../public/images/icon1.svg";
import icon2 from "../../../public/images/icon2.svg";
import icon3 from "../../../public/images/icon3.svg";

export default function Contact() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.contact}>
        <h1 className={styles.title}>Contact Keden</h1>
        <p className={styles.description}>
          By working with Nzamu, you’re gaining a forward-leaning partner with
          unparalleled expertise in cloud computing, cyber security, network
          operations, IT support, data backups, and more. 
        </p>
        <p className={`${styles.description} ${styles.one}`}>
          For questions, comments, or concerns, get in touch with our friendly
          customer support team today. Together, we can get the most out of your
          company’s security and data storage solutions. 
        </p>
      </section>
      <section className={styles.contactContainer}>
        <div className={styles.container}>
          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>Contact Us</h2>
            <p className={styles.detailsDescription}>
              Are you ready to take your business to the next level with better
              cyber functionality and networking support?
            </p>
            <div className={styles.detailsConnect}>
              <div className={styles.connect}>
                <div className={`${styles.connectCircle} ${styles.first}`}>
                  <Image src={icon1} alt="icon" className={styles.icon} />
                </div>
                <div className={styles.connectText}>
                  101 S. Reid Street, Suite 307, Sioux Falls, SD 57103
                </div>
              </div>
              <div className={styles.connect}>
                <div className={`${styles.connectCircle} ${styles.second}`}>
                  <Image src={icon2} alt="icon" className={styles.icon} />
                </div>
                <div className={styles.connectText}>1-800-410-3751</div>
              </div>{" "}
              <div className={styles.connect}>
                <div className={`${styles.connectCircle} ${styles.third}`}>
                  <Image src={icon3} alt="icon" className={styles.icon} />
                </div>
                <div className={styles.connectText}>
                  info@website-4d0ad1f0.zme.cul.mybluehost.me
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.formFields}>
              <input
                type="text"
                className={styles.field}
                placeholder="Your Name"
              />
              <input
                type="number"
                className={styles.field}
                placeholder="Phone number"
              />
              <input
                type="email"
                className={styles.field}
                placeholder="Your email"
              />
              <input
                type="text"
                className={styles.field}
                placeholder="Subject"
              />
            </div>
            <textarea placeholder="Your Message" className={styles.message} />
            <div className={styles.box}>
              <Link href="/login" className={styles.button}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
