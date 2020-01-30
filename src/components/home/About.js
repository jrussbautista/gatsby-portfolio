import React from "react"
import Heading from "../common/Heading"
import me from "../../images/me.jpg"
import styled from "styled-components"
import { about } from "../../../content/data.json"

const StyledAbout = styled.div`
  padding: 1rem 1.5rem 6rem 1.5rem;

  .desc {
    font-size: 1.6rem;
    padding: 1rem 0;
    line-height: 1.5;
  }

  .grid {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .img-wrapper {
    max-width: 300px;
    margin: 1rem auto;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    border-radius: 15px;
  }
`

const About = () => {
  return (
    <div id="about">
      <Heading title={`About Me`} />
      <StyledAbout>
        <div className="grid">
          <div className="desc">{about.description}</div>
          <div className="img-wrapper">
            <img className="img" src={me} alt="me" />
          </div>
        </div>
      </StyledAbout>
    </div>
  )
}

export default About
