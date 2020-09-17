import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Wrapper, BackToTop as StyledBackToTop, IconWrapper } from './styled'

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
  }, [])

  if (!showScroll) return null

  return (
    <Wrapper>
      <ScrollLink
        smooth={true}
        offset={-80}
        duration={500}
        to="hero"
        href="#hero"
      >
        <StyledBackToTop type="button" title="Back to Top">
          <IconWrapper>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-up"
              class="svg-inline--fa fa-chevron-up fa-w-14 scrollToTop__StyledIcon-sc-17tebii-1 huNGxi"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
              ></path>
            </svg>
          </IconWrapper>
        </StyledBackToTop>
      </ScrollLink>
    </Wrapper>
  )
}

export default BackToTop
