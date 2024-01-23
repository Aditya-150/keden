import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Details from "@/components/Details";
import Technicalities from "@/components/Technicalities";
import VideoCarousel from "@/components/VideoCarousel";
import LogoCarousel from "@/components/LogoCarousel";
import MapSection from "@/components/MapSection";
import HomeSolutions from "@/components/HomeSolutions";
import Approach from "@/components/Approach";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";

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
      <VideoCarousel />
      <LogoCarousel />
      <MapSection />
      <HomeSolutions />
      <Details />
      <Technicalities />
      <Approach />
      <HomeContact />
      <Footer />
    </main>
  );
}
