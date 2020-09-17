import React from 'react'
import Heading from '../../shared/Heading'
import FrontendIcon from '../../icons/frontend'
import Backend from '../../icons/backend'
import Database from '../../icons/database'
import { skills } from '../../../../content/data.json'
import { Card, Wrapper, Stacks } from './styled'

export default () => {
  return (
    <div id="skill">
      <Heading title="What I Love To Used" />
      <div style={{ padding: '1.5rem' }}>
        <Wrapper>
          {skills.map((skill, i) => (
            <Card key={i}>
              {skill.type === 'front-end' && <FrontendIcon />}
              {skill.type === 'back-end' && <Backend />}
              {skill.type === 'database' && <Database />}
              <div className="card-title"> {skill.name} </div>
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
