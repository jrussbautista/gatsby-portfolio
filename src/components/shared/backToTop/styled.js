import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 99;
`

export const BackToTop = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  cursor: pointer;
`

export const IconWrapper = styled.span`
  svg {
    width: 2rem;
    color: var(--color-primary);
  }
`
