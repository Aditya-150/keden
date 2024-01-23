"use client";
import React, { useState } from "react";
import { FaCaretDown, FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/keden.svg";
import styles from "./styles.module.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav} id="myTopnav">
        <Link href="/" className={styles.logo}>
          <Image src={logo} width={33.82} height={38.05} alt="Keden Logo" />
          <p className={styles.logoText}>Keden</p>
        </Link>
        <ul className={styles.navMenu}>
          <li className={styles.navLink}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </li>
          <li className={styles.navLink}>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                Services
                <FaCaretDown size={12} />
              </button>
              <div className={styles.dropdownContent}>
                <Link className={styles.link} href="/it">
                  IT
                </Link>
                <Link className={styles.link} href="/cybersecurity">
                  Cyber Security
                </Link>
                <Link className={styles.link} href="/cloudcomputing">
                  Cloud Computing Support
                </Link>
              </div>
            </div>
          </li>
          <li className={styles.navLink}>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <Link href="/login" className={styles.button}>
          Portal Login
        </Link>
        {/* <button className={styles.hamburgerButton} onClick={toggleNav}>
          <FaBars size={24} color="#fff" />
        </button> */}
        <div className={styles.toggle} onClick={toggleNav}>
          {isNavOpen ? (
            <FaXmark color="white" size="20" />
          ) : (
            <FaBars color="white" size="20" />
          )}
        </div>
      </nav>
      <div className={isNavOpen ? `${styles.menu}` : `${styles.menuClosed}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuLink}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </li>
          <li className={styles.menuLink}>
              <div className={styles.menuDrop}>
                <p className={styles.menuButton}>Services</p>
                <FaCaretDown size={12} color="white" />
              </div>
            <div className={`${styles.menuDropdownContent}`}>
              <Link className={styles.link} href="/it">
                IT
              </Link>
              <Link className={styles.link} href="/cybersecurity">
                Cyber Security
              </Link>
              <Link className={styles.link} href="/cloudcomputing">
                Cloud Computing Support
              </Link>
            </div>
          </li>
          <li className={styles.menuLink}>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
