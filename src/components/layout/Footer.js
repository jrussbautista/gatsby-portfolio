import React from "react"
import styled from "styled-components"
import Github from "../icons/github"
import CodePen from "../icons/codepen"
import LinkedIn from "../icons/linkedin"
import data from "../../../content/data.json"
import useDarkMode from "use-dark-mode"

const StyledFooter = styled.footer`
  padding: 3rem 2rem;
  text-align: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: ${({ isDark }) => (isDark ? "#fff" : "#000")};
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }

  .author {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  .copyright {
    margin-top: 0.5rem;
  }
`

const Footer = () => {
  const { value } = useDarkMode(false)

  return (
    <StyledFooter isDark={value}>
      <ul>
        {data.socialLinks.map((link, i) => (
          <li key={i}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.social === "github" ? (
                <Github />
              ) : link.social === "codepen" ? (
                <CodePen />
              ) : link.social === "linkedin" ? (
                <LinkedIn />
              ) : (
                ""
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className="author">Built by James Russel C. Bautista</div>
    </StyledFooter>
  )
}

export default Footer
