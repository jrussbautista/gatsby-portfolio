import React, { useState, useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import HamburgerIcon from '../../icons/hamburger'
import DesktopMenu from '../desktopMenu'
import MobileMenu from '../mobileMenu'
import { Header, Overlay } from './styled'

export default () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false)
  const sidebarRef = useRef()

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide)
    return () => document.removeEventListener('click', handleClickOutSide)
  }, [])

  const handleClickOutSide = e => {
    if (sidebarRef.current && sidebarRef.current.contains(e.target)) {
      setIsOpenSideNav(false)
    }
  }

  const overlayElement = isOpenSideNav && <Overlay ref={sidebarRef} />

  return (
    <Header>
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
          className={`btn-icon mobile-icon-menu`}
        >
          <HamburgerIcon />
        </button>
        <DesktopMenu />
        <MobileMenu
          isOpenSideNav={isOpenSideNav}
          setIsOpenSideNav={setIsOpenSideNav}
        />
      </div>

      {overlayElement}
    </Header>
  )
}
