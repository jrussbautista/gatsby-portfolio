import styled from 'styled-components'

export const Container = styled.div`
  margin: 3rem 0 5rem 0;

  .page-text {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`

export const Form = styled.form`
  padding: 0 1.5rem;
  max-width: 80rem;
  margin: 0 auto;

  .group {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  label {
    display: block;
    padding: 1rem 0;
    font-size: 1.6rem;
  }

  input {
    width: 100%;
    font-size: 1.7rem;
    padding: 0 0.5rem;
    height: 4rem;
    background: transparent;
    border: 1px solid transparent;
    border-bottom: 1px solid #c5c6c9;
  }

  .input-error {
    border-bottom: 1px solid red;
  }

  textarea {
    font-size: 1.7rem;
    padding: 0 0.5rem;
    border: 1px solid transparent;
    border-bottom: 1px solid #c5c6c9;
    background: transparent;
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`

export const Error = styled.div`
  color: red;
  font-size: 1.5rem;
  padding-top: 1rem;
`

export const SuccessMsg = styled.div`
  background-color: #25d596;
  box-shadow: 0 2px 9px rgba(37, 213, 150, 0.35);
  padding: 1.5rem 2rem;
  border-radius: 6px;
  color: #fff;
  font-size: 1.6rem;
  margin: 1.5rem 0;
`
