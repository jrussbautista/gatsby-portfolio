import React from 'react'
import Heading from '../../shared/Heading'
import { about } from '../../../../content/data.json'
import { StyledAbout, Container, Desc } from './styled'

const About = () => {
  return (
    <div id="about">
      <Heading title={`About Me`} />
      <StyledAbout>
        <Container>
          <Desc className="desc">{about.description}</Desc>
        </Container>
      </StyledAbout>
    </div>
  )
}

export default About
