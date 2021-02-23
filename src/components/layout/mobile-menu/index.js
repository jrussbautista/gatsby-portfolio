import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu } from './styled'
import Button from '../../ui/button'
import resume from '../../../../content/resume.pdf'

const MobileMenu = ({ isOpenSideNav, setIsOpenSideNav }) => {
  return (
    <Menu isOpen={isOpenSideNav}>
      <div className="menu-wrapper">
        <div className="menu-list">
          <ScrollLink
            smooth={true}
            offset={-80}
            duration={500}
            to="project"
            href="#project"
            activeClass="active"
            spy={true}
            onClick={() => setIsOpenSideNav(false)}
          >
            Projects
          </ScrollLink>
        </div>
        <div className="menu-list">
          <ScrollLink
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            spy={true}
            to="skill"
            href="#skill"
            onClick={() => setIsOpenSideNav(false)}
          >
            Skills
          </ScrollLink>
        </div>
        <div className="menu-list">
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            to="work"
            href="#work"
            onClick={() => setIsOpenSideNav(false)}
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
            activeClass="active"
            spy={true}
            href="#about"
            onClick={() => setIsOpenSideNav(false)}
          >
            About
          </ScrollLink>
        </div>
        <div className="menu-list">
          <ScrollLink
            offset={50}
            duration={500}
            to="contact"
            href="#contact"
            activeClass="active"
            spy={true}
            onClick={() => setIsOpenSideNav(false)}
          >
            Contact
          </ScrollLink>
        </div>
        <div className="menu-list">
          <Button title="Resume" as="a" href={resume} target="_blank" />
        </div>
      </div>
    </Menu>
  )
}

export default MobileMenu
