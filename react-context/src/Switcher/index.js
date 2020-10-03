import React, { useContext } from "react"
import { ThemeContext } from "../Context"

export default () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div>
      <h3>Select theme:</h3>
      <select
        onChange={e => {
          console.log(e)
          setTheme(e.target.value)
        }}
        value={theme}
      >
        <option value="light">Light</option>
        <option value="medium">Medium</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}
