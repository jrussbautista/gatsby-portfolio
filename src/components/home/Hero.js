import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"
import avatar from "../../images/avatar.png"

const Hero = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin: 1.5rem 0;
  }

  .avatar-wrapper {
    padding: 3rem;
    text-align: center;

    @media ${props => props.theme.mediaQueries.medium} {
      order: 2;
    }
  }

  .avatar {
    width: 16rem;
  }

  .intro-info {
    text-align: left;
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.mediaQueries.medium} {
      flex-direction: row;
    }
  }

  .intro-job {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .intro-desc {
    margin-top: 1.5rem;
    font-size: 2.8rem;
  }

  .intro-text {
    font-size: 1.8rem;
  }

  .sub {
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.5rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    border: 1px solid var(--color-primary);
    border-radius: 6px;
    height: 5rem;
    padding: 0 3rem;
    text-align: center;
    font-size: 1.6rem;
    background-color: transparent;
    color: var(--color-primary);
    cursor: pointer;
  }
`

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
    <Hero>
      <div className="intro-info">
        <div className="avatar-wrapper">
          <img src={avatar} className="avatar" alt="avatar" />
        </div>
        <div>
          <div className="intro-text"> Hi. I'm</div>
          <h1> {data.site.siteMetadata.author}.</h1>
          <div className="intro-desc">{data.site.siteMetadata.intro}</div>
          <div className="sub">{data.site.siteMetadata.sub}</div>
          <ScrollLink
            smooth={true}
            offset={-80}
            duration={500}
            className="logo-title"
            to="project"
            href="#project"
            className="btn"
          >
            {" "}
            See my works{" "}
          </ScrollLink>
        </div>
      </div>
    </Hero>
  )
}
