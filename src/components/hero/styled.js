import styled from 'styled-components'
import Button from '../ui/button'

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
    margin: 3rem auto;
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
    background-color: var(--color-gray);
    width: 20rem;
    height: 20rem;
    overflow: hidden;
    border-radius: 15px;

    @media ${props => props.theme.mediaQueries.large} {
      order: 2;
    }
  }

  .intro-main {
    flex: 1;
    @media ${props => props.theme.mediaQueries.large} {
      margin-right: 2rem;
    }
  }

  .avatar {
    width: 100%;
    height: 100%;
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
