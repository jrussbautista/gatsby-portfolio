import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    html {
      box-sizing: border-box;
      line-height: 1.15;
      font-size: 62.5%;

      @media ${props => props.theme.mediaQueries.medium}{
        font-size: 70%;
      }

      @media ${props => props.theme.mediaQueries.large}{
        font-size: 75%;
      }
    }

    :root {
      --color-primary: ${props => props.theme.colors.primary};
      --color-dark: ${({ theme }) => theme.colors.dark}
    }

    * {
      outline: none;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-family: Montserrat, sans-serif;
      margin: 0;
      font-weight: 400;
      transition: color 0.2s ease-out, background 0.2s ease-out;
      --bg: #fff;

      &.light-mode {
          background-color: #fff;
          color: rgba(10,10,10,0.9);
          --fill: #121212;
        }

        &.dark-mode {
          background-color: #121212;
          --bg: #121212;
          color: #fff;
          --fill: #fff;
        }
    }

    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    a {
       text-decoration: none;
        color: inherit;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }


`
