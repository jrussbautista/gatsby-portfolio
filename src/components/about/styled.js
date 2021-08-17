import styled from 'styled-components'

export const Container = styled.div`
  @media ${props => props.theme.mediaQueries.large} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
`

export const Desc = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0;
  line-height: 1.8;
`

export const LeftContainer = styled.div`
  @media ${props => props.theme.mediaQueries.large} {
    flex: 1;
  }

  .tech-stacks {
    display: flex;
  }

  .tech-stacks ul {
    list-style-type: disc;
    padding-left: 15px;
    flex: 1;
  }

  .tech-stacks li {
    margin-bottom: 10px;
    font-size: 1.4rem;
  }

  .tech-title {
    font-size: 1.6rem;
    font-weight: 600;
  }
`

export const ImgWrapper = styled.div`
  max-width: 200px;
  margin: 1rem auto;

  @media ${props => props.theme.mediaQueries.large} {
    margin: 0 4rem;
    max-width: 280px;
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`

export const StyledAbout = styled.div`
  padding: 1rem 1.5rem 6rem 1.5rem;
`
