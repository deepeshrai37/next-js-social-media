import Image from 'next/image';
import styles from './singlepost.module.css'
const SinglePostPage=()=>{
  return (
    <>
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='' alt='' fill className={styles.img}></Image>
      </div>
    </div>
    </>
  );
}

export default SinglePostPage;