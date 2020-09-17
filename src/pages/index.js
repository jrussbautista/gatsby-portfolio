import React from 'react'
import Layout from '../components/layout/'
import SEO from '../components/seo'
import Skills from '../components/home/Skills'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import ContactForm from '../components/home/ContactForm'
import About from '../components/home/About'
import Works from '../components/home/Works'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="James Russel C. Bautista"
        keywords={[
          `full-stack developer`,
          `gatsby portfolio`,
          `react`,
          `front-end`,
          `back-end`,
        ]}
      />
      <Hero />
      <Projects />
      <Skills />
      <Works />
      <About />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
