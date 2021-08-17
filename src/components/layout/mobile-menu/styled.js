import styled from 'styled-components'

export const Menu = styled.div`
  height: 100%;
  position: fixed;
  width: 50%;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : '100%')});
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  background-color: var(--bg);
  top: 0;
  right: 0;
  z-index: 12;

  .menu-wrapper {
    margin-top: 20px;
  }

  .close-button-container {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }

  .close-button {
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 10px;
  }

  .menu-list {
    padding: 1rem;
    text-align: center;

    a {
      font-size: 1.6rem;
    }

    .active {
      color: var(--color-primary);
    }
  }
`
