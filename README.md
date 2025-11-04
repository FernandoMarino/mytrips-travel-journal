# Projeto desenvolvido para a disciplina de Front-end Jamstack com Gatsby, ministrada por Armênio Cardoso.

O projeto foi desenvolvido por Fernando Marino dos Santos. Durante o projeto foram aplicados diversas técnicas que foram ensinadas em sala de aula.


URL do Website: "https://mytrips-logbook.netlify.app"
URL para o GitHub do projeto: "https://github.com/FernandoMarino/mytrips-travel-journal"

### Técnicas Utilizadas

- Criação de rotas principais através de componentes React
- Desenvolvimento de Layout utilizando componentização (Layout, Header, Navbar, Footer, TripGrid, TripCard, NewFormPage)
- Criação de rotas dinâmicas através de arquivos Markdown (MDX)
- Preparação da camada de dados utilizando diversas fontes de dados, bem como:
- Conexão e busca de dados API
- Aplicação de Gatsby Hooks (useEffect, useState)
- Pré-tratamento e inserção de imagens utilizando GatsbyImage
- configuração do gatsby-config, instalando e declarando os plugins utilizados.
- CSS Modular no Header, Footer, Layout
- CSS-in-JS no TripGrid, TripCard e NewTripForm, TripTemplate (trip.js)


## myTrips – Your Travel Logbook ✈️

Registre suas aventuras pelo mundo com estilo. O **myTrips** é uma aplicação Jamstack construída com Gatsby e MDX que transforma cada viagem em uma página visual, interativa e memorável.


### Tecnologias

- [Gatsby](https://www.gatsbyjs.com/) – Static site generator
- [MDX](https://mdxjs.com/) – Markdown + JSX
- [React](https://reactjs.org/) – UI components
- [Styled-components](https://styled-components.com/) – CSS-in-JS
- [Gatsby Plugin Image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) – Image optimization
- [WeatherAPI](https://www.weatherapi.com/) – Dados climáticos em tempo real

### 🚀 Funcionalidades
- 📍 Criação de páginas personalizadas para cada destino  
- 🌤️ Widget de clima dinâmico via WeatherAPI  
- 🖼️ Galeria de imagens otimizada com GatsbyImage  
- 📝 Diário de viagem com suporte a Markdown e MDX  
- 📂 Formulário estático para gerar novos arquivos `.mdx` (Criação do novo arquivo MDX ainda não foi implementada e será disponibilizada nas próximas versões )


### CI/CD - Netlify

CI/CD configurado no Netlify através da URL: "mytrips-logbook.netlify.app"