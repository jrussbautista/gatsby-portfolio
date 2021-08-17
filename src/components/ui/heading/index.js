import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyedHeading = styled.div`
  padding: 1.5rem 2rem;
  font-size: 2.4rem;
  font-weight: 600;
`

const Heading = ({ title }) => {
  return <StyedHeading> {title} </StyedHeading>
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Heading
