import React from "react"
import styled from "styled-components"
import Heading from "../common/Heading"
import FrontendIcon from "../icons/frontend"
import Backend from "../icons/backend"
import Database from "../icons/database"

const Wrapper = styled.div`
  margin: 2rem 0 6rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: space-around;
  grid-gap: 3rem;
`

const Stacks = styled.ul`
  list-style-type: none;

  li {
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }
`

const Card = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #eee;

  .card-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
  }

  .icon {
    width: 6rem;
    height: 6rem;
  }

  svg {
    fill: var(--color-primary);
    margin-bottom: 1rem;
  }
`

export default () => {
  return (
    <div id="skill">
      <Heading title="What I Love To Used" />
      <div style={{ padding: "1.5rem" }}>
        <Wrapper>
          <Card>
            <FrontendIcon />
            <div className="card-title"> Front End </div>
            <Stacks>
              <li> HTML </li>
              <li> CSS/ SCSS</li>
              <li> Javascript </li>
              <li> React JS </li>
              <li> Redux </li>
              <li> Next JS</li>
            </Stacks>
          </Card>
          <Card>
            <Backend />
            <div className="card-title"> Back End </div>
            <Stacks>
              <li> Node JS</li>
              <li> Express Js </li>
              <li> Restful Api </li>
              <li> GraphQL </li>
            </Stacks>
          </Card>

          <Card>
            <Database />
            <div className="card-title"> Database</div>
            <Stacks>
              <li> MySQL</li>
              <li> Firebase </li>
              <li> Mongo Db </li>
            </Stacks>
          </Card>
        </Wrapper>
      </div>
    </div>
  )
}
