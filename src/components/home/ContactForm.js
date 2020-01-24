import React from "react"
import styled from "styled-components"
import Heading from "../common/Heading"

const Container = styled.div`
  margin: 3rem 0 5rem 0;

  .page-text {
    font-size: 1.6rem;
    margin-top: 1rem 0;
    text-align: center;
  }
`

const Form = styled.form`
  padding: 0 1.5rem;
  max-width: 80rem;
  margin: 0 auto;

  .group {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
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

  textarea {
    font-size: 1.7rem;
    padding: 0 0.5rem;
    border: 1px solid transparent;
    border-bottom: 1px solid #c5c6c9;
    background: transparent;
  }

  .btn {
    border-radius: 0.4rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    font-size: 2rem;
    background-color: #fff;
    border: 1px solid var(--color-primary);
    cursor: pointer;
    background: transparent;
  }
`

export default () => {
  return (
    <Container id="contact">
      <div className="page-text">Have a projects in mind?</div>
      <Heading title="Send me a message" />
      <Form>
        <div className="group">
          <label htmlFor="name"> Name</label>
          <input type="text" id="name" />
        </div>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="group">
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" rows={3}></textarea>
        </div>
        <div className="group">
          <button type="submit" className="btn">
            {" "}
            Send{" "}
          </button>
        </div>
      </Form>
    </Container>
  )
}
