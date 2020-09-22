import React from 'react'
import Layout from '../components/layout/'
import SEO from '../components/seo'
import Skills from '../components/home/skills'
import Hero from '../components/home/hero'
import Projects from '../components/home/projects'
import Contact from '../components/home/contact'
import About from '../components/home/about'
import Works from '../components/home/works'
import BackToTop from '../components/shared/backToTop'

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
      <Contact />
      <BackToTop />
    </Layout>
  )
}

export default IndexPage
