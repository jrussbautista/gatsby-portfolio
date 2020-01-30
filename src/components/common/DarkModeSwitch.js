import React from "react"
import Switch from "react-switch"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import sunIcon from "../../images/sun-icon.svg"
import moonIcon from "../../images/moon-icon.svg"

const DarkModeSwitch = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <Switch
            onColor="#3d3d3d"
            offColor="#3d3d3d"
            onChange={checked => toggleTheme(checked ? "dark" : "light")}
            checked={theme === "dark"}
            checkedIcon={<img src={moonIcon} alt="moon icon" />}
            uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
          />
        )
      }}
    </ThemeToggler>
  )
}

export default DarkModeSwitch
