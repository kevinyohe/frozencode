import React from 'react';
import {graphql} from 'gatsby';

const Index = ({data}) =>{
    return (
        <div>
            <h1>Frozen Code</h1>
            <img src={data.file.publicURL} alt="frozen waterfall" style={{maxWidth: 800}} />
        </div>

    )
}


export const HomepageQuery = graphql`
query HomepageQuery {
  file(relativePath: {eq: "frozen.jpg"}) {
    publicURL
  }
}

`

export default Index;