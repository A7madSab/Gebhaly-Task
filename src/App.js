import React from "react"

import Navigation from "./navigation"
import { ThemeProvider } from "@material-ui/core/styles"

import { BrowserRouter } from "react-router-dom"
import theme from "./theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
