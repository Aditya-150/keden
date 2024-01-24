import React from "react";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Login () {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.login}>
        <div className={styles.loginContainer}>
            <h1 className={styles.title}>Client Portal Login</h1>
            <input type="text" className={styles.input} placeholder="User Id"/>
            <input type="password" className={styles.input} placeholder="Password"/>
            <Link href="/login" className={styles.button}>Login</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};
