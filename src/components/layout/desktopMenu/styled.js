import styled from 'styled-components'

export const StyledDesktopMenu = styled.div`
display: none;
align-items: center;
@media ${props => props.theme.mediaQueries.medium} {
  display: flex;
}
}`

export const MenuList = styled.div`
  padding: 0 1rem;
  a {
    font-size: 1.5rem;
  }
`
