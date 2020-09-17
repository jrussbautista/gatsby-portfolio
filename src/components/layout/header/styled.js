import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 7rem;
  background-color: var(--bg);
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
    font-size: 2.5rem;
  }

  .spacer {
    flex: 1;
  }

  .btn-icon {
    background: transparent;
    border: 0;
    cursor: pointer;
    svg {
      width: 2.5rem;
      height: 2.5rem;
      transform: rotate(180deg);
    }
    rect {
      fill: var(--fill);
    }
  }

  .mobile-icon-menu {
    @media ${props => props.theme.mediaQueries.medium} {
      display: none;
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
    margin: 2rem 0;
    text-align: center;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
