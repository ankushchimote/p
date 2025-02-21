import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = "../../assets/Rahul_FullStack.pdf"; // Ensure resume.pdf is in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rahul_Chimote_Resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rahul</h1>
        <p className={styles.description}>
          I'm a FullStack developer with expertise in React, Spring Boot, and MERN.
          Currently looking for an opportunity to kickstart my career.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:rahulchimote2001@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <button onClick={handleDownload} className={styles.contactBtn}>
            Download Resume
          </button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/mee.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
