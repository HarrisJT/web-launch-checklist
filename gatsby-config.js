module.exports = {
  siteMetadata: {
    author: `Harris Thompson`,
    description: `A simple website launch checklist to keep track of the most important enrichment possibilities for a website.`,
    siteUrl: `https://weblaunchchecklist.com`,
    title: `Web Launch Checklist`,
    email: `harris@harrisjt.com`,
    twitterHandle: `harrisjt_`,
    githubHandle: `harrisjt`,
    linkedinHandle: `harristhompson`,
    issueUrl: `https://github.com/harrisjt/web-launch-checklist/issues/new`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
};
