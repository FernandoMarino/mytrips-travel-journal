import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import MainLayout from "../components/MainLayout"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  background-color: #0077cc;
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }

  &:focus {
    outline: 2px solid #005fa3;
    outline-offset: 2px;
  }
 
`


const IndexPage = () => {
  return (
    <Layout pageTitle="My Trips">
      <MainLayout>
        <h1>Registre suas aventuras pelo mundo</h1>
        <p>Com o myTrips, cada viagem vira uma história visual. Explore, documente e reviva seus momentos favoritos.</p>


        <h2>O que você pode fazer</h2>
        <ul>
          <li>📍 Criar páginas personalizadas para cada destino</li>
          <li>🌤️ Ver o clima real de cada dia da viagem</li>
          <li>🖼️ Adicionar fotos e destaques memoráveis</li>
          <li>📝 Escrever seu diário de bordo com estilo</li>
        </ul>


        <h2>Pronto para começar?</h2>
        <p>Use o formulário para criar sua primeira viagem ou explore os destinos já registrados.</p>
        <StyledLink to="/new-trip">Criar nova viagem</StyledLink>
        <StyledLink to="/trips">Ver todas as viagens</StyledLink>

      </MainLayout>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>My Trips</title>
