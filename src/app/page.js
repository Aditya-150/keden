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
import Portal from "@/components/Portal";

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
          Learn More
        </Link>
      </section>
      <VideoCarousel />
      <LogoCarousel />
      <MapSection />
      <HomeSolutions />
      <Details />
      <Technicalities
        title="We Have Been Certified And Trusted By Clients"
        description="Each member of the Keden team takes an oath to provide top-notch service and support to our clients. Addressing network attacks with speed while deploying"
      />
      <Portal
        title="Client Portal Login"
        description="To access your account information, enter a new ticket, or check on the status of an existing ticket, please login into our client portal."
        buttonText="Login"
        buttonLink="/login"
      />
      <Approach />
      <HomeContact />
      <Footer />
    </main>
  );
}
