import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
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

const Error = styled.div`
  color: red;
  font-size: 1.5rem;
  padding-top: 1rem;
`

const SuccessMsg = styled.div`
  background-color: #25d596;
  box-shadow: 0 2px 9px rgba(37, 213, 150, 0.35);
  padding: 1.5rem 2rem;
  border-radius: 6px;
  color: #fff;
  font-size: 1.6rem;
  margin: 1.5rem 0;
`

export default () => {
  const [submit, setSubmit] = useState(false)
  const [success, setSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is Required"),
      message: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Email is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Message is Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setSubmit(true)
        const res = await fetch("https://formcarry.com/s/H9ENUO51KO6", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...values }),
        })
        if (res.ok) {
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 5000)
        }
        resetForm()
      } catch (error) {
        console.log(error)
      } finally {
        setSubmit(false)
      }
    },
  })

  return (
    <Container id="contact">
      <div className="page-text">Have a projects in mind?</div>
      <Heading title="Send me a message" />

      <Form onSubmit={formik.handleSubmit}>
        {success && (
          <SuccessMsg>
            Thank your for messaging me. I will reply as soo as I read your
            message.
          </SuccessMsg>
        )}
        <div className="group">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`${formik.touched.name &&
              formik.errors.name &&
              "input-error"}`}
          />
          {formik.touched.name && formik.errors.name ? (
            <Error>{formik.errors.name}</Error>
          ) : null}
        </div>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            className={`${formik.touched.email &&
              formik.errors.email &&
              "input-error"}`}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </div>
        <div className="group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            rows={3}
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`${formik.touched.message &&
              formik.errors.message &&
              "input-error"}`}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <Error>{formik.errors.message}</Error>
          ) : null}
        </div>
        <div className="group">
          <button type="submit" disabled={submit} className="btn">
            {submit ? "Sending..." : "Submit"}
          </button>
        </div>
      </Form>
    </Container>
  )
}
