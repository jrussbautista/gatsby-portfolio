import styled from 'styled-components'
import Button from '../ui/button'

export const Hero = styled.section`
  position: relative;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  min-height: calc(100vh);

  @media ${props => props.theme.mediaQueries.large} {
    margin-top: 0;
  }

  h1 {
    font-size: 3rem;
    margin: 1.5rem 0;
  }

  .intro-info {
    text-align: left;
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.mediaQueries.large} {
      flex-direction: row;
    }
  }

  .intro-job {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .intro-desc {
    margin-top: 1.5rem;
    font-size: 2.8rem;
  }

  .intro-text {
    font-size: 1.8rem;
  }

  .sub {
    margin-top: 2rem;
    line-height: 2.5rem;
    font-size: 1.5rem;
  }
`

export const SeeMyProjects = styled(Button)`
  height: 5rem;
  padding: 0 3rem;
  display: inline-flex;
  align-items: center;
  margin: 2rem 0;
  font-size: 1.5rem;
`
