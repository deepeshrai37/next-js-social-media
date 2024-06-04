import Image from 'next/image';
import styles from './contact.module.css'
const Contact=()=>{
return (
  <div className={styles.container}>
   <div className={styles.imagecontainer}>
    <Image src='/contact.png' alt='' fill className={styles.img}></Image>
   </div>
   <div className={styles.fromcontainer}>
    <form action='' className={styles.form}>
      <input type='text' placeholder='Name and Surname'></input>
      <input type='email' placeholder='Email'></input>
      <input type='tel' placeholder='Phone Number(optional)'></input>
      <textarea cols="30" rows="10" placeholder='Message'></textarea>
      <button>Send</button>
    </form>
   </div>
  </div>
);
}

export default Contact;