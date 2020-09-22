import styled from 'styled-components'

export const StyledLinks = styled.ul`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;

  li {
    svg {
      width: 1.6rem;
      height: 1.6rem;
      fill: var(--fill);
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  li {
    svg:hover {
      fill: var(--color-primary);
    }
  }
`
