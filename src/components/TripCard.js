import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';

const CardWrapper = styled(Link)`
display: flex;
`;


export default function TripCard({ frontmatter }) {

  const { title, location, startDate, endDate, tags, rating, slug } = frontmatter;

  const { image } = getImage(frontmatter.coverImage)
  

  return (
    <CardWrapper to={`/trip/${slug}`}>
      {image && <GatsbyImage image={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />}
      <article>
        <h2>{title}</h2>
        {/* <p>{location}</p>
        <p>{startDate} - {endDate}</p>
        <div>{tags.map(tag => <span>{tag}</span>)}</div>
        <div className='rating'>{rating}</div> */}
      </article>
    </CardWrapper>
  )
}
