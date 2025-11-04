exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allMdx(filter: {internal: {contentFilePath: {regex: "/trips/"}}})  {
                nodes {
                    id
                    frontmatter {
                        slug
                    }
                    
                }
            }
        }
    `);

    result.data.allMdx.nodes.forEach(node => {
        createPage({
            path: `/trip/${node.frontmatter.slug}`,
            component: require.resolve(`./src/templates/trip.js`),
            context: {
                id: node.id
            },
        });
    });
};
