import React from "react"
import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"

const DesktopMenu = () => {
  const StyledDesktopMenu = styled.div`
    display: none;
    align-items: center;
    @media ${props => props.theme.mediaQueries.medium} {
      display: flex;
    }
    .menu-list {
      padding: 0 1rem;
      a {
        font-size: 1.6rem;
      }
    }
  `

  return (
    <StyledDesktopMenu className="desktop-menu">
      <div className="menu-list">
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="project"
          href="#project"
        >
          Projects
        </ScrollLink>
      </div>
      <div className="menu-list">
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="skill"
          href="#skill"
        >
          Skills
        </ScrollLink>
      </div>
      <div className="menu-list">
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="work"
          href="#work"
        >
          Work
        </ScrollLink>
      </div>
      <div className="menu-list">
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="about"
          href="#about"
        >
          About
        </ScrollLink>
      </div>
      <div className="menu-list">
        <ScrollLink
          smooth={true}
          offset={50}
          duration={500}
          to="contact"
          href="#contact"
        >
          Contact
        </ScrollLink>
      </div>
    </StyledDesktopMenu>
  )
}

export default DesktopMenu
