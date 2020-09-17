import React from 'react'
import Github from '../../icons/github'
import CodePen from '../../icons/codepen'
import LinkedIn from '../../icons/linkedin'
import data from '../../../../content/data.json'
import { StyledFooter } from './styled'

const Footer = () => {
  const renderLinkText = social => {
    switch (social) {
      case 'github':
        return <Github />
      case 'codepen':
        return <CodePen />
      case 'linkedin':
        return <LinkedIn />
      default:
        return null
    }
  }

  return (
    <StyledFooter>
      <ul>
        {data.socialLinks.map((link, i) => (
          <li key={i}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {renderLinkText(link.social)}
            </a>
          </li>
        ))}
      </ul>
      <div className="author">Built by James Russel C. Bautista</div>
    </StyledFooter>
  )
}

export default Footer
