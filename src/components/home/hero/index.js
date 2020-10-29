import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import avatar from '../../../images/me.jpg'
import SocialLinks from '../../shared/socialLinks'
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
        <div className="avatar-wrapper">
          <img src={avatar} className="avatar" alt="avatar" />
        </div>
        <div className="intro-main">
          <div className="intro-text"> Hi. I'm</div>
          <h1>{data.site.siteMetadata.author}.</h1>
          <div className="intro-desc">{data.site.siteMetadata.intro}</div>
          <div className="sub">{data.site.siteMetadata.sub}</div>
          <SocialLinks />
          <ScrollLink
            smooth={true}
            offset={-80}
            duration={500}
            to="project"
            href="#project"
          >
            <SeeMyProjects variant="outline" title="See My Projects" />
          </ScrollLink>
        </div>
      </div>
    </Hero>
  )
}
