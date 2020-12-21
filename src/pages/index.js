import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const Index = ({data}) =>{
    console.log(data.toc.nodes[0].frontmatter)
    return (
        <div>
            <h1>Frozen Code</h1>
            <Img fluid={data.file.childImageSharp.fluid} alt="frozen waterfall" />
            {/* <img src={data.file.childImageSharp.fixed.src} alt="frozen waterfall" style={{maxWidth: 800}} /> */}
        
        <ul>
        {data.toc.nodes.map((thing)=> (
        <li style={{listStyleType: "none"}}><a href={thing.frontmatter.slug}>{thing.frontmatter.title}</a></li>
        ))}
        </ul>
        </div>

    )
}


export const HomepageQuery = graphql`
query HomepageQuery {
    file(relativePath: {eq: "frozen.jpg"}) {
      childImageSharp {
        fixed {
            ...GatsbyImageSharpFixed
        }
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
    toc: allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        title
        description
      }
    }
  }
}
`


  


export default Index;