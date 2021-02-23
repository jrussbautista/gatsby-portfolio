import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  padding: 1rem;

  .tab-list {
  }

  .active {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`

export const TabItem = styled.button`
  flex: 1;
  text-align: center;
  padding: 1rem 0;
  cursor: pointer;
  font-size: 1.8rem;
  background-color: transparent;
  border: 2px solid transparent;

  ${props =>
    props.active &&
    css`
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
    `}
`
