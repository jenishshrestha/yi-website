import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
const Header = () => {
  const { wpMenu, wp } = useStaticQuery(
    graphql`
      query {
        wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
          menuItems {
            nodes {
              url
              label
            }
          }
        }
        wp {
          siteOptions {
            themeOption {
              logo {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  )

  const menus = wpMenu?.menuItems?.nodes,
    middleMenuNumber = menus.length / 2,
    logo = wp.siteOptions.themeOption.logo?.localFile?.publicURL

  return (
    <header>
      <div className="container">
        {menus ? (
          <ul className="primaryMenu">
            {menus.map((menu, i) => {
              return (
                <React.Fragment key={i}>
                  {i === middleMenuNumber ? (
                    <li>
                      <Link to="/">
                        <img src={logo} alt="youngInnovations" />
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <Link to={menu.url} itemProp="url">
                      {menu.label}
                    </Link>
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </header>
  )
}
export default Header
