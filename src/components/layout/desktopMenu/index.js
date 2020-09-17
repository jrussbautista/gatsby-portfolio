import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Button from '../../shared/Button'
import { StyledDesktopMenu, MenuList } from './styled'
import resume from '../../../../content/resume.pdf'

const DesktopMenu = () => {
  return (
    <StyledDesktopMenu>
      <MenuList>
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="project"
          href="#project"
        >
          Projects
        </ScrollLink>
      </MenuList>
      <MenuList>
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="skill"
          href="#skill"
        >
          Skills
        </ScrollLink>
      </MenuList>
      <MenuList>
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="work"
          href="#work"
        >
          Work
        </ScrollLink>
      </MenuList>
      <MenuList>
        <ScrollLink
          smooth={true}
          offset={-80}
          duration={500}
          to="about"
          href="#about"
        >
          About
        </ScrollLink>
      </MenuList>
      <MenuList>
        <ScrollLink
          smooth={true}
          offset={50}
          duration={500}
          to="contact"
          href="#contact"
        >
          Contact
        </ScrollLink>
      </MenuList>
      <MenuList>
        <Button title="Resume" as={'a'} href={resume} target="_blank" />
      </MenuList>
    </StyledDesktopMenu>
  )
}

export default DesktopMenu
