import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Heading from "./heading"
import Github from "../icons/github"
import LinkIcon from "../icons/link"

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`

const Col = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
`

const ImageWrapper = styled.div`
  background-color: #d5d5d5;
  border-radius: 15px;
  border: 1px solid #eee;
  overflow: hidden;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08);
`

const Info = styled.div`
  padding: 0.8rem;

  .desc {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const Name = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`

const StacksWrapper = styled.div`
  label {
    font-size: 1rem;
    display: block;
    margin-bottom: 0.2rem;
  }

  ul {
    display: flex;
    li {
      font-size: 0.8rem;
      padding: 0.3rem 0.5rem;
      margin-top: 0.3rem;
      color: ${props => props.theme.colors.primary};

      &:not(:last-child) {
        margin-right: 0.3rem;
      }
    }
  }
`

const Tabs = styled.div`
  display: flex;
  padding: 1rem;

  .tab-list {
    flex: 1;
    text-align: center;
    padding: 1rem 0;
    cursor: pointer;
    font-size: 1.1rem;
  }

  .active {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`

const Buttons = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .btn {
    padding: 0.6rem 0;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1rem;
    border-radius: 4px;
    width: 6rem;
    text-align: center;

    svg {
      width: 1rem;
      height: 1rem;
      margin-left: 0.4rem;
    }
  }

  .btn-outline {
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    background-color: #fff;

    svg {
      fill: var(--color-primary);
    }
  }

  .btn-primary {
    border: 1px solid var(--color-primary);
    color: #fff;
    background-color: var(--color-primary);

    svg {
      fill: #fff;
    }
  }
`

export default () => {
  const [active, setActive] = useState("All")

  const { allFile: items } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/projects/" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                website
                source
                stack
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    }
  `)

  return (
    <div id="project">
      <Heading title="Projects I Built" />
      <Tabs>
        <div
          className={`tab-list ${active === "All" ? "active" : ""}`}
          onClick={() => setActive("All")}
        >
          {" "}
          All{" "}
        </div>
        <div
          className={`tab-list ${active === "Web" ? "active" : ""}`}
          onClick={() => setActive("Web")}
        >
          {" "}
          Web{" "}
        </div>
        <div
          className={`tab-list ${active === "Mobile" ? "active" : ""}`}
          onClick={() => setActive("Mobile")}
        >
          Mobile
        </div>
      </Tabs>
      <Row>
        {items.edges.map(item => (
          <Col key={item.node.id}>
            <Card>
              <ImageWrapper>
                <Img
                  fluid={
                    item.node.childMarkdownRemark.frontmatter.image
                      .childImageSharp.fluid
                  }
                />
              </ImageWrapper>
              <Info>
                <Name> {item.node.childMarkdownRemark.frontmatter.title} </Name>
                <div
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html: item.node.childMarkdownRemark.html,
                  }}
                ></div>
                <StacksWrapper>
                  <ul>
                    {item.node.childMarkdownRemark.frontmatter.stack
                      .split(",")
                      .map((stack, i) => (
                        <li key={i}> {stack} </li>
                      ))}
                  </ul>
                </StacksWrapper>
                <Buttons>
                  <a
                    href={item.node.childMarkdownRemark.frontmatter.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {" "}
                    Site <LinkIcon />{" "}
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.node.childMarkdownRemark.frontmatter.source}
                    className="btn btn-outline"
                  >
                    {" "}
                    Code <Github />
                  </a>
                </Buttons>
              </Info>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}