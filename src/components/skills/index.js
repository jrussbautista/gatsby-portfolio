import React from 'react'
import Heading from '../ui/heading'
import { skills } from '../../../content/data.json'
import { Card, Wrapper, Stacks } from './styled'

export default () => {
  return (
    <div id="skill">
      <Heading title="What I Love To Used" />
      <div style={{ padding: '1.5rem' }}>
        <Wrapper>
          {skills.map((skill, i) => (
            <Card key={i}>
              <Stacks>
                {skill.list.map((item, i) => (
                  <li key={i}> {item.name} </li>
                ))}
              </Stacks>
            </Card>
          ))}
        </Wrapper>
      </div>
    </div>
  )
}
