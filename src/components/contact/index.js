import React, { useState } from 'react'
import { useFormik } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import * as Yup from 'yup'
import Heading from '../ui/heading'
import Button from '../ui/button'
import { Container, Form, SuccessMsg, Error } from './styled'

export default () => {
  const [submit, setSubmit] = useState(false)
  const [success, setSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      message: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Name is Required'),
      message: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Message is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setSubmit(true)
        const res = await fetch('https://formcarry.com/s/H9ENUO51KO6', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
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

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `
  )

  return (
    <Container id="contact">
      <Heading className="header" title="Send me a message" />
      <div className="page-text">Have a projects in mind?</div>
      <div className="page-text">
        Email me at <span className="link">{data.site.siteMetadata.email}</span>
      </div>

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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`${formik.touched.name &&
              formik.errors.name &&
              'input-error'}`}
          />
          {formik.touched.name && formik.errors.name ? (
            <Error>{formik.errors.name}</Error>
          ) : null}
        </div>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            className={`${formik.touched.email &&
              formik.errors.email &&
              'input-error'}`}
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
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`${formik.touched.message &&
              formik.errors.message &&
              'input-error'}`}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <Error>{formik.errors.message}</Error>
          ) : null}
        </div>
        <div className="group">
          <div className="btn-wrapper">
            <Button
              title="Send"
              type="submit"
              disabled={submit}
              loading={submit}
              style={{ width: '10rem', height: '4.2rem' }}
            />
          </div>
        </div>
      </Form>
    </Container>
  )
}
