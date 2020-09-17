import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 2rem 0 6rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: space-around;
  grid-gap: 3rem;
`

export const Stacks = styled.ul`
  list-style-type: none;

  li {
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }
`

export const Card = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #eee;

  .card-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
  }

  .icon {
    width: 6rem;
    height: 6rem;
  }

  svg {
    fill: var(--color-primary);
    margin-bottom: 1rem;
  }
`
