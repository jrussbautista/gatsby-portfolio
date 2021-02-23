import React from 'react'
import Layout from '../components/layout/'
import SEO from '../components/seo'
import Skills from '../components/skills'
import Hero from '../components/hero'
import Projects from '../components/projects'
import Contact from '../components/contact'
import About from '../components/about'
import Works from '../components/works'
import BackToTop from '../components/back-to-top'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="James Russel C. Bautista"
        keywords={[
          `full stack developer`,
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
      <Contact />
      <BackToTop />
    </Layout>
  )
}

export default IndexPage
