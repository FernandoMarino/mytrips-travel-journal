import React from 'react'
import Brand from './Brand'
import * as styles from "../styles/header.module.css"
import Navbar from './Navbar'
import Appname from './Appname'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Brand />
        <Appname />
        <Navbar />
      </div>
    </header>
  )
}
