import React from 'react'
import TripCard from './TripCard'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image';

const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0.5rem;
    padding: 1rem 2rem;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0;
    }
`;

export default function TripGrid({ trips }) {



  return (
    <GridContainer>
        {trips.length === 0 ? (
            <section>
                <p>Nenhuma viagem encontrada</p>
            </section>
        ):(
        <ul>
            {trips.map(trip => (
                <li key={trip.id}>
                    <article>
                        <TripCard frontmatter={trip.frontmatter} />
                    </article>
                </li>
            ))}
        </ul>
        )}
    </GridContainer>
  )
}

/* 

<p>Esses são os últimos posts:</p>
                <ul>
                    {
                        allTrips.map(trip => (
                            
                            <article key={trip.id}>
                                <h2>
                                    <Link to={`/${trip.frontmatter.slug}`}>
                                        {trip.frontmatter.title}
                                    </Link>
                                </h2>
                                <p>Data: {trip.frontmatter.startDate} - {trip.frontmatter.endDate} </p>
                                <p>Location: {trip.frontmatter.location}</p>
                                <p>Rating: {trip.frontmatter.rating}</p>

                                
                                <GatsbyImage 
                                    src={getImage(trip.frontmatter.coverImage)}
                                    alt={trip.frontmatter.slug}
                                    placeholder="blurred"
                                />
                            </article>
                        ))
                    }
                </ul>

*/