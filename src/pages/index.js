import React from "react"
import Layout from "../components/layout/"
import SEO from "../components/seo"
import Skills from "../components/home/Skills"
import Hero from "../components/home/Hero"
import Projects from "../components/home/Projects"
import ContactForm from "../components/home/ContactForm"
import About from "../components/home/About"

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
