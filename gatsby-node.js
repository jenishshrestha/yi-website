const path = require(`path`)
const chunk = require(`lodash/chunk`)

exports.createPages = async gatsbyUtilities => {
  const pages = await getPages(gatsbyUtilities)

  if (pages.length) {
    await createIndividualPages({ pages, gatsbyUtilities })
  }
}

/**
 * returns all pages from wordpress
 **/
const getPages = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(/* GraphQL */ `
    query AllPages {
      allWpPage(sort: { fields: [date], order: DESC }) {
        edges {
          page: node {
            id
            uri
            template {
              templateName
            }
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPage.edges
}

const createIndividualPages = async ({ pages, gatsbyUtilities }) => {
  Promise.all(
    pages.map(({ page }) => {
      let pageTemplate,
        tempName = page.template.templateName,
        templateName = tempName.replace(/\s+/g, "-").toLowerCase()
      if (tempName) {
        pageTemplate = path.resolve(`./src/templates/${templateName}.js`)
      } else {
        pageTemplate = path.resolve(`./src/templates/default.js`)
      }
      gatsbyUtilities.actions.createPage({
        path: page.uri,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      })
    })
  )
}
