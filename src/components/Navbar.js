import React from 'react'
import * as header_styles from "../styles/header.module.css"
import * as footer_styles from "../styles/footer.module.css"
import { Link } from 'gatsby'

export default function Navbar({ variant }) {
  const navClass = variant === 'footer'? footer_styles.nav : header_styles.nav
  
  return (
    <div>
        <nav className={navClass}>
            <Link to="/">Home</Link>
            <Link to="/trips">My Trips</Link>
            <Link to="/new-trip">Create New Trip</Link>
            
        </nav>
    </div>
  )
}
