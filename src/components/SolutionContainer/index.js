"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SolutionContainer({
  bgColor,
  vector,
  title,
  description,
  buttonLink,
  buttonDisabled,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const background = bgColor + 33;
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: `${background}`,
        // opacity: "0.2",
        border: isHover ? `2px solid ${bgColor}` : "none",
        height: "20rem",
        width: "auto",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "1rem",
        cursor: "default",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={vector} alt="solution vector" className={styles.vector} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <a
        href={buttonLink}
        className={buttonDisabled ? styles.disabled : styles.learnMore}
      >
        Learn More
      </a>
    </div>
  );
}
