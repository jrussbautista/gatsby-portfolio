import React from 'react'
import { StyledFooter } from './styled'
import SocialLinks from '../../social-links'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="social">
        <SocialLinks />
      </div>
      <div className="author">Built by James Russel C. Bautista</div>
    </StyledFooter>
  )
}

export default Footer
