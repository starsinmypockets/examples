import React, { useState } from "react"
import "./App.css"
import Body from "./Body"
import Switcher from "./Switcher"
import { ThemeContext } from "./Context"

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <h1>App Header</h1>
        <Switcher />
        <Body />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
