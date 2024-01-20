import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Details from "@/components/Details";
import Technicalities from "@/components/Technicalities";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.homeHero}>
        <h1 className={styles.title}>Cyber Security solutions for security</h1>
        <p className={styles.description}>
          Elevate Your Digital Defense: Unleashing Advanced Cybersecurity
          Solutions to Safeguard Your Online Presence with Confidence and
          Resilience.
        </p>
        <Link href="/login" className={styles.button}>
          Portal Login
        </Link>
      </section>
      <Details />
      <Technicalities />
    </main>
  );
}
