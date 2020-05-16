import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Heading from "../common/Heading"
import Github from "../icons/github"
import LinkIcon from "../icons/link"

const Row = styled.div`
  padding: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 6rem;
`

const Col = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  @media ${props => props.theme.mediaQueries.large} {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 2rem;
`

const ImageWrapper = styled.div`
  border-radius: 15px;
  border: 1px solid #eee;
  overflow: hidden;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08);
`

const Info = styled.div`
  padding: 0.8rem;

  .desc {
    font-size: 1.5rem;
  }

  p {
    line-height: 2.2rem;
  }
`

const Name = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
`

const StacksWrapper = styled.div`
  label {
    font-size: 1.3rem;
    display: block;
    margin-bottom: 0.2rem;
  }

  ul {
    display: flex;
    li {
      font-size: 1.3rem;
      padding: 0.3rem 0.5rem;
      margin-top: 0.3rem;
      color: ${props => props.theme.colors.primary};

      &:not(:last-child) {
        margin-right: 0.3rem;
      }
    }
  }
`

// const Tabs = styled.div`
//   display: flex;
//   padding: 1rem;

//   .tab-list {
//     flex: 1;
//     text-align: center;
//     padding: 1rem 0;
//     cursor: pointer;
//     font-size: 1.8rem;
//   }

//   .active {
//     font-weight: 600;
//     color: ${props => props.theme.colors.primary};
//     border-bottom: 2px solid ${props => props.theme.colors.primary};
//   }
// `

const Buttons = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .btn {
    padding: 0.8rem 0;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 1.5rem;
    margin-right: 1rem;
    border-radius: 4px;
    width: 10rem;
    text-align: center;

    svg {
      width: 1.5rem;
      height: 1.5rem;
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
  const { allMarkdownRemark: items } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              website
              stack
              source
              image {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div id="project" style={{ margin: "3rem 0" }}>
      <Heading title="Projects I Built" />

      <Row>
        {items.edges.map(item => (
          <Col key={item.node.id}>
            <Card>
              <a
                href={item.node.frontmatter.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageWrapper>
                  <Img
                    fluid={item.node.frontmatter.image.childImageSharp.fluid}
                  />
                </ImageWrapper>
              </a>
              <Info>
                <a
                  href={item.node.frontmatter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Name> {item.node.frontmatter.title} </Name>
                </a>
                <div
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html: item.node.html,
                  }}
                ></div>
                <StacksWrapper>
                  <ul>
                    {item.node.frontmatter.stack.split(",").map((stack, i) => (
                      <li key={i}> {stack} </li>
                    ))}
                  </ul>
                </StacksWrapper>
                <Buttons>
                  <a
                    href={item.node.frontmatter.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {" "}
                    Visit <LinkIcon />{" "}
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.node.frontmatter.source}
                    className="btn btn-outline"
                  >
                    {" "}
                    Source <Github />
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
