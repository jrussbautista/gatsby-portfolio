import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Desc = styled.div`
  font-size: 1.6rem;
  padding: 1rem 0;
  line-height: 1.8;
`

export const ImgWrapper = styled.div`
  max-width: 300px;
  margin: 1rem auto;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border-radius: 15px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const StyledAbout = styled.div`
  padding: 1rem 1.5rem 6rem 1.5rem;
`
