import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'

import { Hero, SeeMyProjects } from './styled'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            job
            intro
            sub
          }
        }
      }
    `
  )

  return (
    <Hero id="hero">
      <div className="intro-info">
        <div className="intro-main">
          <div className="intro-text"> Hi. I'm</div>
          <h1>{data.site.siteMetadata.author}.</h1>
          <div className="intro-desc">{data.site.siteMetadata.intro}</div>
          <div className="sub">{data.site.siteMetadata.sub}</div>

          <ScrollLink
            smooth={true}
            offset={-80}
            duration={500}
            to="project"
            href="#project"
          >
            <SeeMyProjects title="See My Projects" />
          </ScrollLink>
        </div>
      </div>
    </Hero>
  )
}
