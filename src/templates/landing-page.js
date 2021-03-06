import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "gatsby-plugin-wpgraphql-seo"
import {
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Medium,
  Phone,
  Location,
  Email,
} from "./../components/icons"

const LandingPage = ({ data: { page } }) => {
  const bannerImage = getImage(page.homePage.bannerImage.localFile),
    bannerLogo = page.homePage.bannerLogo?.localFile?.publicURL,
    bannerTitle = page.homePage.bannerTitle,
    ctaButtonText = page.homePage.ctaButtonText,
    ctaButtonLink = page.homePage.ctaButtonLink,
    facebookLink = page.homePage.facebook ? page.homePage.facebook : "",
    instagramLink = page.homePage.facebook ? page.homePage.instagram : "",
    twitterLink = page.homePage.facebook ? page.homePage.twitter : "",
    youtubeLink = page.homePage.facebook ? page.homePage.youtube : "",
    mediumLink = page.homePage.facebook ? page.homePage.medium : "",
    phoneNumber = page.homePage.phoneNumber ? page.homePage.phoneNumber : "",
    googleMapLocation = page.homePage.googleMapLocation
      ? page.homePage.googleMapLocation
      : "",
    emailAddress = page.homePage.emailAddress ? page.homePage.emailAddress : ""

  return (
    <Layout>
      <Seo post={page} />
      <div className="homeBanner">
        <div className="homeBanner__background">
          <GatsbyImage
            image={bannerImage}
            alt={page.homePage.bannerImage.altText}
          />
        </div>
        <div className="homeBanner__content">
          <div className="container">
            <div className="homeBanner__content--wrapper">
              <div className="homeBanner__content--svgs">
                <Ellipse1 />
                <Ellipse2 />
                <Ellipse3 />
              </div>
              {bannerLogo ? (
                <img
                  src={bannerLogo}
                  alt={page.homePage.bannerLogo?.altText}
                  width={page.homePage.bannerLogo?.mediaDetails?.width}
                  height={page.homePage.bannerLogo?.mediaDetails?.height}
                />
              ) : (
                ""
              )}

              {bannerTitle ? <h1>{bannerTitle}</h1> : ""}

              {ctaButtonText ? (
                <a
                  href={ctaButtonLink ? ctaButtonLink : "#"}
                  className="btn btn-rounded btn-dark cta-button"
                >
                  {ctaButtonText}
                  <span>→</span>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="homeBanner__footer">
          <div className="container">
            <div class="homeBanner__footer--wrapper">
              <div className="homeBanner__footer--socialIcons">
                <a
                  href={facebookLink}
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href={instagramLink}
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a href={twitterLink} rel="noreferrer nofollow" target="_blank">
                  <Twitter />
                </a>
                <a href={youtubeLink} rel="noreferrer nofollow" target="_blank">
                  <Youtube />
                </a>
                <a href={mediumLink} rel="noreferrer nofollow" target="_blank">
                  <Medium />
                </a>
              </div>
              <div className="homeBanner__footer--contactInfo">
                <a href={"tel:" + phoneNumber}>
                  <Phone />
                  <span>{phoneNumber}</span>
                </a>
                <a
                  href={googleMapLocation}
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <Location />
                </a>
                <a href={"mailto:" + emailAddress}>
                  <Email />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query getLandingPage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      uri
      homePage {
        bannerTitle
        ctaButtonLink
        ctaButtonText
        bannerImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
        }
        bannerLogo {
          altText
          localFile {
            publicURL
          }
          mediaDetails {
            width
            height
          }
        }
        facebook
        instagram
        medium
        twitter
        youtube
        phoneNumber
        googleMapLocation
        emailAddress
      }
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
    }
  }
`
