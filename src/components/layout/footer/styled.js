import styled from 'styled-components'

export const StyledFooter = styled.footer`
  padding: 3rem 2rem;
  text-align: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: var(--fill);
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }

  .author {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  .copyright {
    margin-top: 0.5rem;
  }
`
