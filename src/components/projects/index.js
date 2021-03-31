import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Heading from '../ui/heading'
import Github from '../icons/github'
import LinkIcon from '../icons/link'
import Button from '../ui/button'
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
import Tabs from '../ui/tabs'

const tabs = ['Web', 'Mobile']

export default () => {
  const [active, setActive] = useState('Web')

  const { allMarkdownRemark: items } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

  const allItems = items.edges.filter(
    item => item.node.frontmatter.type === active.toLowerCase()
  )

  return (
    <div id="project" style={{ margin: '3rem 0' }}>
      <Heading title="Projects I've Developed" />
      <Tabs active={active} tabs={tabs} onChange={setActive} />
      <Row>
        {allItems.map(item => (
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
                    <Button
                      title="Visit"
                      as="a"
                      target="_blank"
                      href={item.node.frontmatter.website}
                      rel="noopener noreferrer"
                      icon={<LinkIcon color="#fff" />}
                    />
                  )}

                  <Button
                    href={item.node.frontmatter.source}
                    title="Source"
                    as="a"
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Github color={'var(--color-primary)'} />}
                  />
                </Buttons>
              </Info>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
