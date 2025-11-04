import React from 'react'
import * as styles from "../styles/footer.module.css"
import Navbar from './Navbar'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerInner}>
            <div className={styles.brand}>
                <span>&copy; {new Date().getFullYear()} myTrips - Your Travel Logbook</span>
            </div>
            <Navbar variant="footer" />
        </div>
    </footer>
  )
}
