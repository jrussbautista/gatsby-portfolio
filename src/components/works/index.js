import React from 'react'
import { works } from '../../../content/data.json'
import Heading from '../ui/heading'
import { WorkWrapper, Container } from './styled'

const Works = () => {
  return (
    <Container id="work">
      <Heading title="Where I've Worked" />
      <WorkWrapper>
        {works.map((work, i) => (
          <div className="stepper__list" key={i}>
            <div className="stepper__item">
              <div className="stepper__step">
                <div className="stepper__timeline">
                  <div className="stepper__circle"> </div>
                  <div className="stepper__timeline-heading">
                    {work.company}
                  </div>
                  <div className="stepper__date">{work.date}</div>
                </div>
              </div>
              <div className="stepper__info">
                <div className="stepper__body">
                  <div className="stepper__title"> {work.title}</div>
                  <ul className="desc">
                    {work.description.map((desc, i) => (
                      <li className="stepper__sub" key={i}>
                        <span className="dot"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </WorkWrapper>
    </Container>
  )
}

export default Works
