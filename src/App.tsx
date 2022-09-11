import React, { useState } from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from './components/Header/header'

import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(",")
  }
});

function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
         < Header />

        <div className="context">
        </div>

        <div className="footer">
        </div>

        </ThemeProvider>
    </div>
  )
}

export default App
