import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  border-radius: 0.4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  cursor: pointer;
  padding: 0 1.5rem;

  &:hover {
    background: white;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);

    svg {
      fill: var(--color-primary);
    }
  }

  &:disabled {
    opacity: 0.5;
  }

  ${props =>
    props.variant === 'outline' &&
    css`
      background: white;
      color: var(--color-primary);
      border: 1px solid var(--color-primary);
    `}

  &:hover {
    ${props =>
      props.variant === 'outline' &&
      css`
        color: #fff;
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
      `}

    svg {
      ${props =>
        props.variant === 'outline' &&
        css`
          fill: #fff;
        `}
    }
  }
`
export const IconWrapper = styled.span`
  padding-left: 0.5rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
