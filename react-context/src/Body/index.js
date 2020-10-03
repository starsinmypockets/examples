import React, { useContext } from "react"
import { ThemeContext } from "../Context"

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <body>
      <h2>App Body</h2>
      <p>Show context value here</p>
      <p>{theme}</p>
    </body>
  )
}
