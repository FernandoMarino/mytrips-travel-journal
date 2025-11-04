import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import TripGrid from '../components/TripGrid'

export default function Trips() {

    const data = useStaticQuery(graphql`
        query {
            allMdx {
                totalCount
                nodes {
                    frontmatter {
                        title
                        slug
                        location
                        startDate(formatString: "YYYY-MM-DD")
                        endDate(formatString: "YYYY-MM-DD")
                        tags
                        rating
                        coverImage {
                            childImageSharp {
                            gatsbyImageData(width: 100, placeholder: BLURRED)
                            }
                        }
                    }
                    id
                }
            }
        }
    `)

    const allTrips = data.allMdx.nodes
    

        return (
            <Layout>
                <TripGrid trips={allTrips}/>
            </Layout>    
        )
}
