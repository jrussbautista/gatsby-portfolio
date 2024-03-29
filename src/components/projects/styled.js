import styled from 'styled-components'

export const Row = styled.div`
  padding: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 6rem;
`

export const Col = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media ${props => props.theme.mediaQueries.large} {
    grid-template-columns: 600px 1fr;
  }
  grid-gap: 2rem;
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
`

export const Info = styled.div`
  padding: 0.8rem;

  .desc {
    font-size: 1.5rem;
  }

  p {
    line-height: 2.2rem;
  }
`

export const Name = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
`

export const StacksWrapper = styled.div`
  label {
    font-size: 1.3rem;
    display: block;
    margin-bottom: 0.2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 1.3rem;
      margin-top: 0.3rem;
      color: ${props => props.theme.colors.grayDark};

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`

export const Buttons = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  a {
    margin-right: 2rem;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`
