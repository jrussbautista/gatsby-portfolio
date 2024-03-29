import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 6rem;
`

export const WorkWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 1.5rem;

  .dot {
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--color-primary);
    display: inline-block;
    border-radius: 50%;
    margin-right: 0.7rem;
  }

  .stepper {
    padding: 2rem 0;

    &__item {
      display: flex;
      flex-wrap: wrap;
    }

    &__step {
      width: 100%;
      @media ${props => props.theme.mediaQueries.large} {
        width: 40%;
      }
    }

    &__circle {
      width: 2.2rem;
      height: 2.2rem;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      z-index: 1;
      background-color: var(--color-primary);
      border: 4px solid #fff;
      border-radius: 50%;
      display: none;
      @media ${props => props.theme.mediaQueries.large} {
        display: block;
      }
    }

    &__timeline {
      height: 100%;
      width: 100%;
      position: relative;
      padding: 1rem;
      @media ${props => props.theme.mediaQueries.large} {
        display: block;
      }

      &::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        background-color: var(--color-primary);
        display: none;
        @media ${props => props.theme.mediaQueries.large} {
          display: block;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 100%;
        height: 5px;
        background-color: var(--color-primary);

        display: none;
        @media ${props => props.theme.mediaQueries.large} {
          display: block;
        }
      }
    }

    &__info {
      flex: 1;
    }

    &__body {
      position: relative;
      border-radius: 4px;
      border: 1px solid #eee;
      width: 100%;
      padding: 1.5rem;
      margin-bottom: 2rem;
      border-radius: 6px;
    }

    &__title {
      font-size: 1.5rem;
      padding: 1rem 0;
      font-weight: 600;
    }

    &__sub {
      padding-top: 1rem;
      font-size: 1.5rem;
      line-height: 1.5;
    }

    &__timeline-heading {
      font-size: 1.7rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;

      @media ${props => props.theme.mediaQueries.large} {
        position: absolute;
        left: 3rem;
        top: 2rem;
      }
    }

    &__date {
      font-size: 1.3rem;

      @media ${props => props.theme.mediaQueries.large} {
        position: absolute;
        left: 3rem;
        top: 4rem;
      }
    }
  }
`
