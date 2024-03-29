import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Heading from '../ui/heading'
import Github from '../icons/github'
import LinkIcon from '../icons/link'
import {
  Row,
  ImageWrapper,
  Info,
  Name,
  StacksWrapper,
  Buttons,
  Card,
  Col,
} from './styled'

export default () => {
  const { allMarkdownRemark: items } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
        edges {
          node {
            id
            html
            frontmatter {
              type
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
    <div id="project" style={{ margin: '3rem 0' }}>
      <Heading title="Recent Projects" />

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
                    {item.node.frontmatter.stack.split(',').map((stack, i) => (
                      <li key={i}> {stack} </li>
                    ))}
                  </ul>
                </StacksWrapper>
                <Buttons>
                  {item.node.frontmatter.website && (
                    <a
                      target="_blank"
                      href={item.node.frontmatter.website}
                      title="Visit website"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon color="var(--color-primary)" />
                    </a>
                  )}
                  <a
                    target="_blank"
                    href={item.node.frontmatter.source}
                    rel="noopener noreferrer"
                    title="Visit github project"
                  >
                    <Github color={'var(--color-primary)'} />
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
