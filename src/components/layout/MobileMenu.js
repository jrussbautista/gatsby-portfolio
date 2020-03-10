import React from "react"
import { Link as ScrollLink } from "react-scroll"
import styled from "styled-components"

const Menu = styled.div`
  .menu-wrapper {
    transform: translateX(${({ isOpen }) => (isOpen ? 0 : "100%")});
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 12;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
  }

  .menu-list {
    padding: 1rem;
    text-align: center;

    a {
      font-size: 2.2rem;
      @media ${props => props.theme.mediaQueries.large} {
        font-size: 1.6rem;
      }
    }
  }
`

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
            to="skill"
            href="#skill"
            onClick={() => setIsOpenSideNav(false)}
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
            href="#about"
            onClick={() => setIsOpenSideNav(false)}
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
            onClick={() => setIsOpenSideNav(false)}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </Menu>
  )
}

export default MobileMenu
