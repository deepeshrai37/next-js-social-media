import Image from 'next/image';
import styles from './home.module.css'

export default function Home() {
  return (
    <>
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>
        Creative Social Media
      </h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eos corporis, voluptatem quos vel enim tenetur quae fugiat qui nobis!</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt='' fill className={styles.brandImage}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src='/hero.gif' alt='' fill className={styles.heroImage}></Image>
    </div>
  </div>
  </>
  );
}
