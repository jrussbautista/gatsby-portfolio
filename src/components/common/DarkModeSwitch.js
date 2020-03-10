import React from "react"
import Switch from "react-switch"
import useDarkMode from "use-dark-mode"
import sunIcon from "../../images/sun-icon.svg"
import moonIcon from "../../images/moon-icon.svg"

const DarkModeSwitch = () => {
  const darkMode = useDarkMode(false)

  return (
    <Switch
      onColor="#3d3d3d"
      offColor="#3d3d3d"
      onChange={darkMode.toggle}
      checked={darkMode.value}
      checkedIcon={<img src={moonIcon} alt="moon icon" />}
      uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
    />
  )
}

export default DarkModeSwitch
