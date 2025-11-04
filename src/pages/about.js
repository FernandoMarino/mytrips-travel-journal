// import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout pageTitle={"About"}>
        <p>Estamos desenvolvendo estudos de Jamstack com Gatsby</p>
    </Layout>
  )
}

export const Head = () => <title>About</title>
