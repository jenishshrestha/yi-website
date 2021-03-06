import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"
import { SEOContext } from "gatsby-plugin-wpgraphql-seo"

import Header from "./header"
// import Footer from "./footer"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: { seo },
  } = useStaticQuery(graphql`
    query SiteInfoQuery {
      wp {
        seo {
          contentTypes {
            career {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            teamMember {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            work {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <SEOContext.Provider value={{ global: seo }}>
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </SEOContext.Provider>
  )
}

export default Layout
