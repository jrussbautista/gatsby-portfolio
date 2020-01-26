import React from "react"
import { works } from "../../../content/data.json"
import Heading from "../common/Heading.js"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 6rem;
`

const WorkWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 1.5rem;

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
        content: "";
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
        content: "";
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

      @media ${props => props.theme.mediaQueries.large} {
        padding-left: 3rem;
      }
    }

    &__body {
      position: relative;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
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

const Works = () => {
  return (
    <Container id="work">
      <Heading title="Where I've Worked" />
      <WorkWrapper>
        {works.map((work, i) => (
          <div className="stepper__list" key={i}>
            <div className="stepper__item">
              <div className="stepper__step">
                <div className="stepper__timeline">
                  <div className="stepper__circle"> </div>
                  <div className="stepper__timeline-heading">
                    {work.company}
                  </div>
                  <div className="stepper__date">{work.date}</div>
                </div>
              </div>
              <div className="stepper__info">
                <div className="stepper__body">
                  <div className="stepper__title"> {work.title}</div>

                  <div className="stepper__sub"> {work.description} </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </WorkWrapper>
    </Container>
  )
}

export default Works
