import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const Index = ({data}) =>{
    return (
        <div>
            <h1>Frozen Code</h1>
            <Img fluid={data.file.childImageSharp.fluid} alt="frozen waterfall" />
            {/* <img src={data.file.childImageSharp.fixed.src} alt="frozen waterfall" style={{maxWidth: 800}} /> */}
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
  }
`


  


export default Index;