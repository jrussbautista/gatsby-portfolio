import React from "react"
import styled from "styled-components"
import Heading from "./heading"
import FrontendIcon from "../icons/frontend"
import Backend from "../icons/backend"
import Database from "../icons/database"

const Wrapper = styled.div`
  margin-bottom: 3rem;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`

const Stacks = styled.ul`
  list-style-type: none;

  li {
    padding: 0.6rem;
    font-size: 1rem;
    text-align: center;
  }
`

const Card = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #eee;

  .card-title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
  }

  .icon {
    width: 5rem;
    height: 5rem;
  }

  svg {
    fill: var(--color-primary);
    margin-bottom: 1rem;
  }
`

export default () => {
  return (
    <div id="skill">
      <Heading title="My Stacks " />
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
  )
}
