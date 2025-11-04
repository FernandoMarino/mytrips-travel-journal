import { Link } from 'gatsby'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from "../styles/header.module.css"


export default function Brand() {
  return (
    <div className={styles.brand}>
        <Link to="/">
            <StaticImage 
            src='../../images/logo.png'
            alt='myTrips logo'
            placeholder='blurred'
            layout='constrained'
            width={128}
            height={128}
            className={styles.logo}
            />
        </Link>
    </div>
  )
}
