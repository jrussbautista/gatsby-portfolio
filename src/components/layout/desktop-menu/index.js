import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Button from '../../ui/button'
import { StyledDesktopMenu, MenuList } from './styled'
import resume from '../../../../content/resume.pdf'

const DesktopMenu = () => {
  return (
    <StyledDesktopMenu>
      <MenuList>
        <ScrollLink
          spy={true}
          activeClass="active"
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
          spy={true}
          activeClass="active"
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
          spy={true}
          activeClass="active"
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
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          to="contact"
          href="#contact"
        >
          Contact
        </ScrollLink>
      </MenuList>
      <MenuList>
        <Button
          title="Resume"
          variant="outline"
          as="a"
          href={resume}
          target="_blank"
        />
      </MenuList>
    </StyledDesktopMenu>
  )
}

export default DesktopMenu
