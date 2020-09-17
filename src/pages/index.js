import React from 'react'
import Layout from '../components/layout/'
import SEO from '../components/seo'
import Skills from '../components/home/skills'
import Hero from '../components/home/hero'
import Projects from '../components/home/projects'
import ContactForm from '../components/home/contactForm'
import About from '../components/home/about'
import Works from '../components/home/works'

const IndexPage = () => {
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
