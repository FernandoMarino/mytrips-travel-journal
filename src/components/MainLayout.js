import React from 'react'
import * as styles from "../styles/layout.css"

export default function MainLayout({ children }) {
  return (
    <main className={styles.main}>
        <div className="container">
            { children }
        </div>
        
    </main>
  )
}
