import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu } from './styled'
import Button from '../../ui/button'
import CloseIcon from '../../icons/close'
import resume from '../../../../content/resume.pdf'

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <Menu isOpen={isOpen}>
      <div className="close-button-container">
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
