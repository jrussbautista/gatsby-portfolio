import styled from 'styled-components'
import Button from '../../shared/Button'

export const Hero = styled.section`
  min-height: 100vh;
  position: relative;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin: 1.5rem 0;
  }

  .avatar-wrapper {
    padding: 3rem 5rem;
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
    @media ${props => props.theme.mediaQueries.large} {
      order: 2;
    }
  }

  .avatar {
    width: 20rem;
    height: 20rem;
    border-radius: 15px;
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
    line-height: 2rem;
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
