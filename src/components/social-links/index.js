import React from 'react'
import Github from '../icons/github'
import CodePen from '../icons/codepen'
import LinkedIn from '../icons/linkedin'
import Twitter from '../icons/twitter'
import data from '../../../content/data.json'
import { StyledLinks } from './styled'

const SocialLinks = () => {
  const renderLinkText = social => {
    switch (social) {
      case 'github':
        return <Github />
      case 'codepen':
        return <CodePen />
      case 'linkedin':
        return <LinkedIn />
      case 'twitter':
        return <Twitter />
      default:
        return null
    }
  }

  return (
    <StyledLinks>
      {data.socialLinks.map((link, i) => (
        <li key={i}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            {renderLinkText(link.social)}
          </a>
        </li>
      ))}
    </StyledLinks>
  )
}

export default SocialLinks
