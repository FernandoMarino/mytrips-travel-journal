import React from 'react'
import * as styles from "../styles/layout.css"
import Header from './Header'
import Footer from './Footer'



export default function Layout({ pageTitle, children }) {
  return (
    <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>

        <Footer className={styles.footer}/>
    </div>
    
  )
}
