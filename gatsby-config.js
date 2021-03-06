module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data`
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 800,
                            withWebp: true,
                            tracedSVG: {
                                color: 'aliceblue'
                            }
                        }
                    }
                ]
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ]
}