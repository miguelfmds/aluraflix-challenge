import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Home, NewVideo } from './pages'
import { theme, GlobalStyle } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/aluraflix-challenge'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-video' element={<NewVideo />} /> 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
