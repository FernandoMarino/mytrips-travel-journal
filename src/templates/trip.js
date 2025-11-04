import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { graphql } from 'gatsby'
import WeatherWidget from "../components/WeatherWidget";

export const query = graphql`
  query TripById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        location
        tags
        startDate
        endDate
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AVIF, WEBP])
          }
        }
        galleryImages {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AVIF, WEBP] )
          }
        }
        rating
      }
      excerpt
      id
    }
  }
`;

export default function TripTemplate({ data }) {
  
  if (!data?.mdx) {
    <Layout>
      <p>Trip Not found</p>
    </Layout>
  }

  const { frontmatter, body } = data.mdx;
  const { title, location, startDate } = frontmatter
  const image = getImage(frontmatter.coverImage)
  
  return (
    <Layout>
      <h1>{title}</h1>
      <WeatherWidget location={location} date={startDate} />
      {image && <GatsbyImage image={image} alt={title} />}
    </Layout>
  );

}


  /*
const { frontmatter, body } = data.mdx;
  const {
    title,
    location,
    startDate,
    endDate,
    tags,
    rating,
    coverImage
  } = frontmatter;

  const image = getImage(coverImage);

  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p>{location}</p>
        <p>{startDate} – {endDate}</p>
        <div>
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div>⭐ {rating}</div>
        {image && <GatsbyImage image={image} alt={title} />}
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  );
}
  */