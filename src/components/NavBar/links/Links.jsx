"use client"
import React, { useState } from 'react'
import styles from "./links.module.css"
import NavLinks from './navlinks/NavLinks';

const Links = () => {
  const links=[
    {
      title:'Home',
      path:'/'
    },
    {
      title:'About',
      path:'/about'
    },
    {
      title:'Contact Us',
      path:'/contact'
    },
    {
      title:'Blog',
      path:'/blog'
    }
  ]

  const [open,setOpen]=useState(false);

  const session=true;
  const isAdmin=true;
  return (

    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link=>(
        <NavLinks item={link} key={link.path}></NavLinks>
      )))}{
        session? (
          <>
          {
            isAdmin && <NavLinks item={{title:"Admin",path:"/admin"}}/>
          }
          <button className={styles.logout}>Logout</button>
          </>

        )
        :(
          <NavLinks item={{title:"Login",path:"/login"}}/>
        )
      }
    </div>
    <button className={styles.menubutton} onClick={()=>setOpen(prev=> !prev)}>Menu</button>
    {open && (<div className={styles.mobileLinks}>
        {links.map((link)=>(
          <NavLinks item={link} key={link.title}></NavLinks>
        ))}
      </div>


    )}
    </div>
  )
}

export default Links