import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        SocialShit
      </div>
      <div className={styles.text}>
      Deepesh's Social Media @ All rights reserved.
      </div>
    </div>
  )
}

export default Footer