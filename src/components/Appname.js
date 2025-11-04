import React from 'react'
import * as styles from "../styles/header.module.css"

export default function Appname() {
  return (
    <h1 className={styles.appName} >
        myTrips <span className={styles.tagLine}>- Your Travel Logbook</span>
    </h1>
  )
}
