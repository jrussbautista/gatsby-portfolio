import styled from 'styled-components'

export const Menu = styled.div`
  .menu-wrapper {
    transform: translateX(${({ isOpen }) => (isOpen ? 0 : '100%')});
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
      font-size: 2rem;
      @media ${props => props.theme.mediaQueries.large} {
        font-size: 1.6rem;
      }
    }

    .active {
      color: var(--color-primary);
    }
  }
`
