import Image from "next/image";
import styles from "./about.module.css"

export default function About() {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.about}>About Us</h3>
        <h1 className={styles.title}>
          We create digital ideas better to showcase in real world
        </h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati est, nulla ea incidunt laborum cum odio. Tenetur repudiandae, eligendi facilis possimus magni eius magnam, cumque nemo earum, dolore dignissimos iure?</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt='' fill className={styles.brandImage}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/about.png' alt='' fill className={styles.heroImage}></Image>
      </div>
    </div>
    </>
  );
};