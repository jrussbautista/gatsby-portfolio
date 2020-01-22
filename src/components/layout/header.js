import React, { useState, useEffect, useRef } from "react"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import useDarkMode from "use-dark-mode"
import styled from "styled-components"
import HamburgerIcon from "../icons/hamburger"
import Switch from "react-switch"
import sunIcon from "../../images/sun-icon.svg"
import moonIcon from "../../images/moon-icon.svg"

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 70px;
  background-color: ${props => (props.isDark ? "#121212" : "#fff")};
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.06);

  .wrapper {
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logo-title {
    font-weight: 700;
    color: var(--color-primary);
    font-size: 1.6rem;
  }
  .spacer {
    flex: 1;
  }
  .btn-icon {
    background: transparent;
    border: 0;
    cursor: pointer;
    svg {
      width: 2rem;
      height: 2rem;
      transform: rotate(180deg);
    }
    rect {
      fill: ${props => props.theme.colors.dark};
    }
  }
  nav {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    a {
      padding: 0 15px;
    }
  }
  .fill-white svg rect {
    fill: #fff;
  }
  .switch-wrapper {
    margin: 2rem 1rem;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const Menu = styled.div`
  aside {
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
    background-color: ${({ isDark }) =>
      isDark ? "var(--color-dark)" : "#fff"};
  }

  .menu-list {
    padding: 1rem 0;
    text-align: center;

    a {
      font-size: 1.4rem;
    }
  }
`

export default () => {
  const darkMode = useDarkMode(false)
  const [isOpenSideNav, setIsOpenSideNav] = useState(false)
  const sidebarRef = useRef()

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide)
    return () => document.removeEventListener("click", handleClickOutSide)
  }, [])

  const handleClickOutSide = e => {
    if (sidebarRef.current && sidebarRef.current.contains(e.target)) {
      setIsOpenSideNav(false)
    }
  }

  return (
    <Header isDark={darkMode.value}>
      <div className="wrapper">
        <div>
          <ScrollLink
            smooth={true}
            offset={0}
            duration={500}
            className="logo-title"
            to="home"
            href="#home"
          >
            j.russ
          </ScrollLink>
        </div>
        <div className="spacer"></div>
        <button
          onClick={() => setIsOpenSideNav(true)}
          className={`btn-icon ${darkMode.value ? "fill-white" : "fill-dark "}`}
        >
          <HamburgerIcon />
        </button>
      </div>
      <Menu isDark={darkMode.value} isOpen={isOpenSideNav}>
        <aside ref={sidebarRef}>
          <div>
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
            <div className="switch-wrapper">
              <Switch
                onColor="#3d3d3d"
                offColor="#3d3d3d"
                onChange={darkMode.toggle}
                checked={darkMode.value}
                checkedIcon={<img src={moonIcon} alt="moon icon" />}
                uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
              />
            </div>
          </div>
        </aside>
      </Menu>
      {isOpenSideNav && <Overlay ref={sidebarRef} />}
    </Header>
  )
}
