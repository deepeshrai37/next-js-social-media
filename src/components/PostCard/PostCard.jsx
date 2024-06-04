import React from 'react'
import styles from './postcard.module.css'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.imgContainer}>
        <Image src='' alt='' fill className={styles.img}></Image>
      </div>
      <span className={styles.date}>01.01.2024</span>
    </div>
    <div className={styles.bottom}>
      <h1 className={styles.title}></h1>
      <p className={styles.desc}></p>
      <Link className={styles.link} href='/blog/post'>READ MORE</Link>
    </div>
  </div>
  )
}

export default PostCard