import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  .avatar-wrapper {
    padding: 3rem 0;
    text-align: center;

    @media only screen and (min-width: 680px) {
      order: 2;
    }
  }

  .avatar {
    width: 10rem;
  }

  .intro-info {
    text-align: left;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .intro-job {
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: 600;
  }

  .intro-desc {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  .intro-text {
    font-size: 1.5rem;
  }

  .sub {
    margin-top: 2rem;
    line-height: 1.5rem;
    font-size: 1.1rem;
  }

  .btn {
    margin-top: 2rem;
    border: 1px solid var(--color-primary);
    border-radius: 6px;
    padding: 1rem 2.2rem;
    text-align: center;
    font-size: 1.4rem;
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
          <button className="btn"> See my works </button>
        </div>
      </div>
    </Hero>
  )
}
