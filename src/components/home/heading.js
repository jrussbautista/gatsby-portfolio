import React from "react"
import styled from "styled-components"

const Heading = styled.div`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`

export default ({ title }) => {
  return <Heading> {title} </Heading>
}
