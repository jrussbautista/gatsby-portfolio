import React from 'react'
import Heading from '../ui/heading'
import me from '../../images/me.jpg'
import { skills } from '../../../content/data.json'
import {
  StyledAbout,
  Container,
  Desc,
  Image,
  ImgWrapper,
  LeftContainer,
} from './styled'

const About = () => {
  return (
    <div id="about">
      <Heading title={`About Me`} />
      <StyledAbout>
        <Container>
          <ImgWrapper>
            <Image src={me} alt="James Russel C. Bautista" />
          </ImgWrapper>
          <LeftContainer>
            <Desc className="desc">
              <p>
                Hello. I'm James. I'm passionate in creating web and mobile
                applications.
              </p>
              <p>
                I started my career as a junior front end developer as an on the
                job trainee. After graduating, I continue my career as a front
                end developer for 2 years at Ecreations Inc. After 2 years of
                being a front end developer I decided to level up my career and
                decided to learn backend development to be a full stack
                developer.
              </p>
              <p>
                As of now, I worked as a web developer at Sta. Clara Internation
                Corporation and focused on building performant and well tested
                applications.
              </p>
            </Desc>
            <p className="tech-title">
              Technologies I've been working with recently:
            </p>
            <div className="tech-stacks">
              {skills.map((skill, skillIndex) => (
                <ul key={skillIndex}>
                  {skill.list.map((item, listIndex) => (
                    <li key={listIndex}>{item.name}</li>
                  ))}
                </ul>
              ))}
            </div>
          </LeftContainer>
        </Container>
      </StyledAbout>
    </div>
  )
}

export default About
