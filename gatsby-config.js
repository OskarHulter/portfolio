module.exports = {
    siteMetadata: {
        title: 'Oskar Hulter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: `${__dirname}/src/img/`,
            },
        },
    ],
}
