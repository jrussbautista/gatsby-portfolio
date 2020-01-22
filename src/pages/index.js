import React from "react"
import Layout from "../components/layout/"
import SEO from "../components/seo"
import Skills from "../components/home/skills"
import Hero from "../components/home/hero"
import Projects from "../components/home/projects"
import ContactForm from "../components/home/contactForm"
import About from "../components/home/about"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `full-stack developer`,
          `gatsby portfolio`,
          `react`,
          `front-end`,
          "back-end",
        ]}
      />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
